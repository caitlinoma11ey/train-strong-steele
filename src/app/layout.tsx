import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Train Strong Steele",
  description: "Personal trainer and nutritionist website",
  keywords: ["personal trainer", "PT", "body builder"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
