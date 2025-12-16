import * as React from "react";

interface Props {
  name: string;
  tour: string;
}

export default function ClientAcknowledgementEmail({ name, tour }: Props) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h1>👣 Thanks for your request, {name}!</h1>

      <p>
        We’ve received your booking request for the{" "}
        <strong>{tour}</strong> walking tour.
      </p>

      <p>
        Our Africawinks team will contact you within <strong>24 hours</strong>.
      </p>

      <p>
        <em>And the whole world winks back 😉</em>
      </p>

      <hr />

      <p>— Africawinks Team</p>
    </div>
  );
}
