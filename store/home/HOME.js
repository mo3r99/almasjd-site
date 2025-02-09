import { Description } from "@radix-ui/react-dialog";
import { backIn } from "motion";

const HOME = {
  main: {
    hero: {
      title: "Welcome to Your Masjid",
      subtitle:
        "AlMasjid is your online hub for Islamic education, spiritual development and growth, managed by a panel of qualified Imams and experienced scholars. Explore our website to discover something for you.",
      button: "See our classes",
      buttonLink: "/classes",
      image: "hero.png",
    },
    sections: [
      {
        title: "Islamic Studies for Children",
        type: "l",
        link: "/classes/maktab",
        caption: "Limited spaces",
        image: "quran.png",
        text: "A well-structured program for children aged 7-14, guided by experienced teachers to nurture faith and learning.",
      },
      {
        title: "Arabic for Kids",
        type: "r",
        link: "/classes/arabicForKids",
        caption: "Limited spaces",
        image: "arabic-kids.png",
        text: "Learn the basics of Arabic grammar and syntax to understand the Qur’an, hadith, as well as key texts in Islamic jurisprudence for teens aged 12-14.",
      },
    ],
  },
  sections: [
    {
        title: 'Classes',
        type: 'classes',
        background: true,
    },
    {
        title: 'Featured Lessons',
        type: 'lessons',
        background: 'bg-zinc-900',
    },
    {
        title: 'Services',
        type: 'services',
        background: true,
    },
    {
        title: 'Live Stream',
        type: 'livestream'
    },
    {
        title: 'Sign Up Form',
        type: 'community'
    }
  ],
};

export default HOME;
