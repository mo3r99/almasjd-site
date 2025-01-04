import Breadcrumbs from "@/app/ui/breadcrumb/breadcrumbs";
import Container from "@/app/ui/container/container";
import Heading from "@/app/ui/heading/heading";

export default async function ApplyPage({ params }) {
  var whichClass = await params.slug;

  switch (whichClass) {
    case "maktab":
      whichClass = "Qur'an & Islamic Studies";
      break;
    case "arabicForKids":
      whichClass = "Arabic for Kids";
      break;
    case "alimiyyah":
      whichClass = "Advanced Islamic Sciences";
      break;
  }

  return (
    <section className="max-w-5xl mx-auto my-4 width-[100%]">
      <Breadcrumbs className="mt-16 mb-4"/>
      <Heading className="p-0 max-w-[80vw] my-0 mx-auto">Apply for {whichClass}</Heading>
    </section>
  );
}
