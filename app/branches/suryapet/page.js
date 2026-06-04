import BranchPageClient from "../BranchPageClient";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Study Abroad Consultancy in Suryapet",
  description: "GVK EduTech - Best study abroad consultancy in Suryapet. Expert guidance for MBBS and Masters abroad. Visit our Suryapet office for free counseling.",
};

export default function SuryapetPage() {
  return <BranchPageClient city="Suryapet" />;
}