import Breadcrumbs from "@/app/ui/breadcrumb/breadcrumbs";
import Heading from "../../../ui/heading/heading";
import { NotebookPen } from "lucide-react";
import Community from "@/app/ui/community/community";

export default function Careers() {
  return (
    <>
      <section className="h-auto max-w-5xl mx-auto my-4 mb-10 mt-16">
        <Breadcrumbs className="mt-8 mb-4" />

        <Heading className="font-[800] text-5xl max-w-[80vw] m-auto p-0">
          <NotebookPen className="w-[48px] h-[48px] inline mr-4"/>
          Free Careers Advice
        </Heading>

        <span className="w-16 h-2 bg-weborange my-4 block"></span>

        <p className="mt-6 font-[family-name:var(--font-montserrat)] mb-8 max-w-[80vw] m-auto">
          Regular seminars across Scotland - Please register for your free space
          in our next seminar in your nearest city.
        </p>
      </section>

      <Community>Sign up to find out when the next free seminar is.</Community>
    </>
  );
}
