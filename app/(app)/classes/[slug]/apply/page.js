"use server";

import Breadcrumbs from "@/app/ui/breadcrumb/breadcrumbs";
import Heading from "@/app/ui/heading/heading";
import IFrame from "./iframe";

import { notFound } from "next/navigation";

export default async function ApplyPage({ params }) {
  var slug = await params;
  var url = slug.slug;

  var urlArray = url.split("/");

  var whichClass = urlArray[0];

  let whichClassTitle = "Class";
  let iframeUrl = "";

  switch (whichClass) {
    case "maktab":
      whichClassTitle = "Qur'an & Islamic Studies";
      iframeUrl =
        "https://forms.office.com/Pages/ResponsePage.aspx?id=ZOrjoRGHW0a27251DWrQb7SjwJ0Q6f1Dm73UP8eB77pUNlRHRzJEQVZYVEU5WlVWVzJVRTVXTTMwOC4u&embed=true";
      break;
    case "arabicForKids":
      whichClassTitle = "Arabic for Kids";
      iframeUrl =
        "https://forms.office.com/Pages/ResponsePage.aspx?id=ZOrjoRGHW0a27251DWrQb7SjwJ0Q6f1Dm73UP8eB77pUNkU1VjlRU1pLVVhTRFNZRVQyWkNXWE85Ry4u&embed=true";
      break;
    case "alimiyyah":
      whichClassTitle = "Advanced Islamic Sciences";
      iframeUrl =
        "https://forms.office.com/Pages/ResponsePage.aspx?id=ZOrjoRGHW0a27251DWrQb7SjwJ0Q6f1Dm73UP8eB77pUMEdEUFVXVjk3RlVPQlVHUUsxVDJNWkpFOS4u&embed=true";
      break;
    case "tafseer":
      whichClassTitle = "Tafseer of Last 10 Surahs";
      iframeUrl =
        "https://forms.office.com/Pages/ResponsePage.aspx?id=ZOrjoRGHW0a27251DWrQb7SjwJ0Q6f1Dm73UP8eB77pUQVdNQldKTURHT0VOQ0IxS1Y1QTlIMUFMWC4u&embed=true";
      break;
    case "hifz":
      whichClassTitle = "Qur'an Memorisation Class";
      iframeUrl =
        "https://forms.office.com/Pages/ResponsePage.aspx?id=ZOrjoRGHW0a27251DWrQb7SjwJ0Q6f1Dm73UP8eB77pUNU8zN0I1MjVGWUlFWldGQjcwSjRRSFVZUi4u&embed=true";
      break;
    default:
      return notFound();
  }

  return (
    <>
      <section className="max-w-5xl mx-auto my-4 width-[100%]">
        <Breadcrumbs className="mt-16 mb-4" />
        <Heading className="p-0 max-w-[80vw] my-0 mx-auto">
          Apply for {whichClassTitle}
        </Heading>
      </section>
      <IFrame src={iframeUrl} />
    </>
  );
}
