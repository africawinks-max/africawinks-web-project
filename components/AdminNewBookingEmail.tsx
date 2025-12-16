import * as React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Img,
  Tailwind,
} from "@react-email/components";

interface Props {
  name: string;
  email: string;
  contact: string;
  people: number;
  packageName: string;
}

export default function AdminNewBookingEmail({
  name,
  email,
  contact,
  people,
  packageName,
}: Props) {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="m-0 p-0 bg-gradient-to-br from-[#93693a] to-[#f1ede8fa] font-sans">
          <Container className="py-10 px-4">
            <Section className="max-w-[600px] mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl">

              {/* Header */}
              <Section className="bg-gradient-to-br from-[#754e21] to-[#977f63] px-10 py-12 text-center">
                <div className="mx-auto mb-5 flex h-[120px] w-[120px] items-center justify-center rounded-full border-4 border-white/20 bg-white/10 backdrop-blur">
                  <Img
                    src="https://www.africawinks.co.za/logo-sample.jpg"
                    alt="Africawinks"
                    width="120"
                    height="120"
                    className="rounded-full object-contain"
                  />
                </div>

                <Text className="m-0 text-3xl font-extrabold text-white tracking-tight">
                  New Booking Alert!
                </Text>
                <Text className="mt-2 text-white/95 text-base">
                  🎉 Exciting news from your travel platform
                </Text>
              </Section>

              {/* Content */}
              <Section className="px-10 py-10">
                <Section className="mb-8 rounded-2xl border-2 border-indigo-100 bg-gradient-to-br from-[#f6f8fb] to-[#e9ecf5] p-8">
                  <Text className="mb-6 text-xl font-bold text-slate-800">
                    Customer Details
                  </Text>

                  <Detail label="Name" value={name} />
                  <Detail label="Email" value={email} />
                  <Detail label="Contact" value={contact} />
                  <Detail label="Number of People" value={people.toString()} />
                  <Detail label="Package" value={packageName} strong />
                </Section>

                <Section className="rounded-xl border-l-4 border-amber-500 bg-gradient-to-br from-amber-100 to-amber-200 p-5">
                  <Text className="m-0 text-sm leading-relaxed text-slate-800">
                    ⚡ <strong>Action Required:</strong> Please follow up with the
                    customer within 24 hours to confirm their booking and discuss
                    the travel details.
                  </Text>
                </Section>
              </Section>

              {/* Footer */}
              <Section className="border-t bg-slate-50 px-8 py-6 text-center">
                <Text className="mb-2 text-sm text-slate-500">
                  This is an automated notification from your booking system
                </Text>
                <Text className="text-xs text-slate-400">
                  © 2025 Africa Winks Tours. All rights reserved.
                </Text>
              </Section>

            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

/* ---------------------------------------
   Small helper component (email-safe)
---------------------------------------- */
function Detail({
  label,
  value,
  strong,
}: {
  label: string;
  value: string;
  strong?: boolean;
}) {
  return (
    <Section className="border-b border-slate-300 py-3 last:border-b-0">
      <Text className="m-0 text-xs font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </Text>
      <Text
        className={`mt-1 ${
          strong ? "text-lg font-bold" : "text-base font-semibold"
        } text-slate-800`}
      >
        {value}
      </Text>
    </Section>
  );
}
