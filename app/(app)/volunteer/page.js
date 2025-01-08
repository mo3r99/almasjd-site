import IFrame from "../(app)/classes/[slug]/apply/iframe";
import Breadcrumbs from "../ui/breadcrumb/breadcrumbs";
import Heading from "../ui/heading/heading";

export const metadata = {
  title: "Volunteer",
};


export default function Volunteer() {
  const iframe = 'https://forms.office.com/Pages/ResponsePage.aspx?id=ZOrjoRGHW0a27251DWrQb7SjwJ0Q6f1Dm73UP8eB77pUNURHSDlFT1o5SkVOSkNOMFZQQU1QN0dJWS4u&embed=true" frameborder="0" marginwidth="0" marginheight="0" style="border: none; max-width:100%; max-height:100vh'
  return (
    <>
      <section className="max-w-5xl mx-auto my-4 width-[100%]">
        <Breadcrumbs className="mt-16 mb-4" />
        <Heading className="p-0 max-w-[80vw] my-0 mx-auto">
          Volunteer with Al Masjid
        </Heading>
      </section>
      <IFrame src={iframe} />
    </>
  );
}
