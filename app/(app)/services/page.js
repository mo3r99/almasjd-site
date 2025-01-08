import Breadcrumbs from "../ui/breadcrumb/breadcrumbs";
import ServicesSection from "../ui/services/services";
import Community from "../ui/community/community";

export const metadata = {
  title: 'Services',
};

export default function Services() {
  return (
    <>
        <Breadcrumbs className='mx-auto mt-8'/>
    
    <ServicesSection style={{marginTop: 0, paddingTop: 0}}/>
    <Community>Stay up to date about our latest services. We will never spam you.</Community>
    </>
  );
}
