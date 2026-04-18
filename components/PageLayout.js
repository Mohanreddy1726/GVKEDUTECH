import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const PageLayout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};
