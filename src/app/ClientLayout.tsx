'use client';

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton"), { ssr: false });

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith('/admin');

  return (
    <>
      {!isAdminRoute && <Header />}
      <main className={isAdminRoute ? "min-h-screen" : "min-h-screen bg-background-dark text-white font-sans"}>{children}</main>
      {!isAdminRoute && <Footer />}
      {!isAdminRoute && <WhatsAppButton />}
    </>
  );
}
