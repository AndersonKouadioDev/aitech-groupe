import Link from "next/link";
import React from "react";

const SingleServices1 = ({
  data,
}: {
  data: { id: number; icon: string; title: string; text: string };
}) => {
  const { icon, title, text } = data;

  return (
    <>
      <div className="services-style-one">
        <i className={icon}></i>
        <h4>
          <Link
            //  href={`/services-details/${id}`}
            href="#"
          >
            {title}
          </Link>
        </h4>
        <p>{text}</p>
      </div>
    </>
  );
};

export default SingleServices1;
