import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Serif } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "ATL Drives — Scheduled Rides, Done Right",
  description:
    "Pre-scheduled rides for commuters, caregivers, crews, and everyone who can't afford to miss a pickup. Serving Metro Atlanta with flat-rate, no-surge pricing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${instrumentSerif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
