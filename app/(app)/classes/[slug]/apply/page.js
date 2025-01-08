import Breadcrumbs from "@/app/ui/breadcrumb/breadcrumbs";
import Heading from "@/app/ui/heading/heading";
import IFrame from "./iframe";

export default async function ApplyPage({ params }) {
  var whichClass = await params.slug;
  var iframe;

  switch (whichClass) {
    case "maktab":
      whichClass = "Qur'an & Islamic Studies";
      iframe = "https://forms.office.com/Pages/ResponsePage.aspx?id=ZOrjoRGHW0a27251DWrQb7SjwJ0Q6f1Dm73UP8eB77pUNlRHRzJEQVZYVEU5WlVWVzJVRTVXTTMwOC4u&embed=true"
      break;
    case "arabicForKids":
      whichClass = "Arabic for Kids";
      iframe =
        "https://forms.office.com/Pages/ResponsePage.aspx?id=ZOrjoRGHW0a27251DWrQb7SjwJ0Q6f1Dm73UP8eB77pUNkU1VjlRU1pLVVhTRFNZRVQyWkNXWE85Ry4u&embed=true";
      break;
    case "alimiyyah":
      whichClass = "Advanced Islamic Sciences";
      iframe =
        "https://forms.office.com/Pages/ResponsePage.aspx?id=ZOrjoRGHW0a27251DWrQb7SjwJ0Q6f1Dm73UP8eB77pUMEdEUFVXVjk3RlVPQlVHUUsxVDJNWkpFOS4u&embed=true";
      break;
  }

  return (
    <>
      <section className="max-w-5xl mx-auto my-4 width-[100%]">
        <Breadcrumbs className="mt-16 mb-4" />
        <Heading className="p-0 max-w-[80vw] my-0 mx-auto">
          Apply for {whichClass}
        </Heading>
      </section>
      <IFrame src={iframe} />
    </>
  );
}
