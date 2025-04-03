import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/ui/Navbar";
import PageWrapper from "@/components/ui/PageWrapper";

export const metadata: Metadata = {
  title: "Crypto Stats",
  description: "Stay updated with real-time crypto market stats.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`antialiased`}>
        <Navbar />
        <PageWrapper>{children}</PageWrapper>{" "}
      </body>
    </html>
  );
}
