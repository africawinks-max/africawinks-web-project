import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
}

export default function EmailTemplate({ firstName }: EmailTemplateProps) {
  return (
    <div>
      <h1>Welcome, {firstName}!!! We are high!!</h1>
      <p>Thanks for choosing Africawinks.</p>
    </div>
  );
}
