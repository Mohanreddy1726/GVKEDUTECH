import BranchPageClient from "../BranchPageClient";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Study Abroad Consultancy in Tirupati",
  description: "GVK EduTech - Best study abroad consultancy in Tirupati. Expert guidance for MBBS and Masters abroad. Visit our Tirupati office for free counseling.",
};

export default function TirupatiPage() {
  return <BranchPageClient city="Tirupati" />;
}