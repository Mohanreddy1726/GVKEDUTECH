import BranchPageClient from "../BranchPageClient";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Study Abroad Consultancy in Karimnagar",
  description: "GVK EduTech - Best study abroad consultancy in Karimnagar. Expert guidance for MBBS and Masters abroad. Visit our Karimnagar office for free counseling.",
};

export default function KarimnagarPage() {
  return <BranchPageClient city="Karimnagar" />;
}