import BranchPageClient from "../BranchPageClient";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Study Abroad Consultancy in Vijayawada",
  description: "GVK EduTech - Best study abroad consultancy in Vijayawada. Expert guidance for MBBS and Masters abroad. Visit our Vijayawada office for free counseling.",
};

export default function VijayawadaPage() {
  return <BranchPageClient city="Vijayawada" />;
}