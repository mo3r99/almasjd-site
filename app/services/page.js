import Image from "next/image";
import ServicesSection from "../ui/services/services";
import Community from "../ui/community/community";

export const metadata = {
  title: 'Services',
};

export default function Services() {
  return (
    <>
    <ServicesSection />
    <Community>Stay up to date about our latest services. We will never spam you.</Community>
    </>
  );
}
