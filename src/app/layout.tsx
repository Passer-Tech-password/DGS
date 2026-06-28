import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./ClientLayout";

export const metadata: Metadata = {
  title: "DARAH Gadget Store - Premium Gadgets & Repairs",
  description: "Shop premium smartphones, laptops, accessories, and professional gadget repair services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased min-h-screen">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
