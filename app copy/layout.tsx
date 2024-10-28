import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/bundle";
import "react-modal-video/css/modal-video.css";
import "react-toastify/dist/ReactToastify.css";
import "react-photo-view/dist/react-photo-view.css";
import "react-circular-progressbar/dist/styles.css";
import "react-rangeslider/lib/index.css";

import "@/public/assets/css/animate.css";
import "@/public/assets/css/font-awesome.min.css";
import "@/public/assets/css/flaticon-set.css";

import "@/public/assets/css/nice-select.css";
import "@/public/assets/css/validnavs.css";
import "@/public/assets/css/helper.css";
import "@/public/assets/css/unit-test.css";
import "@/public/assets/css/style.css";

import Dependency from "@/components/utilities/Dependency";
import { Manrope, Outfit } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Aitech Groupe - Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${outfit.className} ${manrope.className}`}>
        <Dependency />
        {children}
      </body>
    </html>
  );
}
