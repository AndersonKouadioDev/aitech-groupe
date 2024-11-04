"use client";
import { ContactUs } from "@/src/actions/emails/contact_us.action";
import React, { useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { toast } from "react-toastify";

// Types pour une meilleure type-safety
interface FormFields {
  name: string;
  email: string;
  phone: string;
  comments: string;
  services: string;
}

// Liste des services disponibles
const AVAILABLE_SERVICES: { value: string; label: string }[] = [
  { value: "video-surveillance", label: "Video Surveillance" },
  { value: "maintenance-informatique", label: "Maintenance Informatique" },
  { value: "reseau-informatique", label: "Réseau Informatique" },
  { value: "reseau-telecom", label: "Réseau Télécom" },
  { value: "appli-mobile", label: "Appli Mobile" },
  { value: "appli-web", label: "Appli Web" },
  { value: "electricite", label: "Electricité" },
  { value: "formation", label: "Formation" },
  { value: "autre", label: "Autre" },
] as const;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      name="submit"
      id="submit"
      disabled={pending}
      className={pending ? "disabled" : ""}
    >
      <i className="fa fa-paper-plane"></i>
      {pending ? "Envoi en cours..." : "Entrer en contact"}
    </button>
  );
}

const ContactForm = () => {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(formData: FormData) {
    try {
      // Validation des données
      const name = formData.get("name");
      const email = formData.get("email");
      const phone = formData.get("phone");
      const comments = formData.get("comments");
      const services = formData.get("services");

      // Vérification que les champs requis sont remplis
      if (!name || !email || !phone || !comments || !services) {
        toast.error("Veuillez remplir tous les champs obligatoires");
        return;
      }

      // Validation du format email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.toString())) {
        toast.error("Veuillez entrer une adresse email valide");
        return;
      }

      // Validation du format téléphone (format universel)
      const phoneRegex = /^\+?[1-9]\d{1,14}$/;
      if (!phoneRegex.test(phone.toString())) {
        toast.error("Veuillez entrer un numéro de téléphone valide");
        return;
      }

      // Vérification que le service sélectionné est valide
      if (
        !AVAILABLE_SERVICES.map((s) => s.value).includes(services.toString())
      ) {
        toast.error("Veuillez sélectionner un service valide");
        return;
      }

      const formFields: FormFields = {
        name: name.toString(),
        email: email.toString(),
        phone: phone.toString(),
        comments: comments.toString(),
        services: services.toString(),
      };

      const result = await ContactUs({
        ...formFields,
        // Envoi du service comme tableau pour correspondre à votre server action
        services: [formFields.services],
      });

      if (result.success) {
        setStatus("success");
        toast.success("Votre message a été envoyé avec succès !");
        formRef.current?.reset();
      } else {
        throw new Error(result.error || "Erreur lors de l'envoi du formulaire");
      }
    } catch (error) {
      console.error("Erreur lors de la soumission:", error);
      setStatus("error");
      toast.error(
        error instanceof Error
          ? error.message
          : "Une erreur s'est produite. Veuillez réessayer."
      );
    }
  }

  return (
    <form
      className="contact-form"
      ref={formRef}
      action={handleSubmit}
      noValidate // On désactive la validation HTML5 car on gère nous-mêmes
    >
      <div className="row">
        <div className="col-lg-12">
          <div className="form-group">
            <input
              className="form-control"
              id="name"
              name="name"
              placeholder="Nom & Prénom"
              type="text"
              autoComplete="name"
              required
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="form-group">
            <input
              className="form-control"
              id="email"
              name="email"
              placeholder="Email*"
              type="email"
              autoComplete="email"
              required
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-group">
            <input
              className="form-control"
              id="phone"
              name="phone"
              placeholder="Téléphone"
              type="tel"
              autoComplete="tel"
              required
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="form-group">
            <select
              className="form-select"
              aria-label="Services select"
              id="services"
              name="services"
              required
            >
              {AVAILABLE_SERVICES.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="form-group comments">
            <textarea
              className="form-control"
              id="comments"
              name="comments"
              placeholder="Parlez-nous du projet*"
              autoComplete="off"
              required
            ></textarea>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12">
          <SubmitButton />
        </div>
      </div>

      {status !== "idle" && (
        <div className="col-lg-12 alert-notification">
          <div
            id="message"
            className={`alert-msg ${
              status === "success" ? "text-success" : "text-danger"
            }`}
          >
            {status === "success"
              ? "Votre message a été envoyé avec succès !"
              : "Une erreur s'est produite. Veuillez réessayer."}
          </div>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
