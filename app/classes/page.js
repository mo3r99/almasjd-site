import ClassesSection from "../ui/classes/classes";
import Community from "../ui/community/community";
import Breadcrumbs from "../ui/breadcrumb/breadcrumbs";

export const metadata = {
  title: "Classes",
};

export default function Classes() {
  return (
    <>
    <Breadcrumbs className='mx-auto mt-8'/>
    <ClassesSection style={{marginTop: 0, paddingTop: 0}}/>
    <Community>Stay up do date about our latest classes. We will never spam you.</Community>
    </>
  );
}
