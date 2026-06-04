import BranchPageClient from "../BranchPageClient";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Study Abroad Consultancy in Visakhapatnam",
  description: "GVK EduTech - Best study abroad consultancy in Visakhapatnam. Expert guidance for MBBS and Masters abroad. Visit our Visakhapatnam office for free counseling.",
};

export default function VisakhapatnamPage() {
  return <BranchPageClient city="Visakhapatnam" />;
}