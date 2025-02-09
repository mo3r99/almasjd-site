const LESSONS = {
  links: [
    ["tajweed-series", "tajweedSeries"],
    ["reminders", "reminders"],
    ["prophets-stories", "storiesOfProphets"],
    ["lectures", "drNasserLessons"],
  ],
  tajweedSeries: {
    title: "Tajweed Series",
    description:
      "Enhance your Qur’anic recitation with our Tajweed Series, featuring audio lessons which will guide you through the rules and principles of Tajweed.",
    soundcloud: true,
    link: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1250268328%3Fsecret_token%3Ds-x2IoTxIyIRH&color=%23ff9900&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
  },
  reminders: {
    title: "Reminders",
    description:
      "Stay spiritually motivated with our collection of Islamic reminders. Here, you can listen to the pre-recorded advices and also download them from SoundCloud to listen when you're offline.",
    soundcloud: true,
    link: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1254639673%3Fsecret_token%3Ds-yxpZGouDJam&color=%23ff9900&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
  },
  storiesOfProphets: {
    title: "Stories of the Prophets",
    description:
      "Delve into the inspiring Stories of the Prophets, exploring their lives, lessons, and the timeless wisdom they offer.",
    soundcloud: true,
    link: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1254642217%3Fsecret_token%3Ds-humcrsofMcL&color=%23ff9900&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
  },
  drNasserLessons: {
    title: "Audio Lectures by Mawlana Nasser Rashid",
    markdown: `Here you can find the short Tafseer reminders that were delivered by Molana Dr. Nasser Rashid at the AlMasjid Prayer Hall during the blessed month of Ramadhan 1443/2022. Please click a link to download/listen. \n
Feel free to browse our website to find out more about AlMasjid. You may be interested in joining our volunteers’ team, where we offer you an opportunity to utilise whatever you can spare (time, skills, wisdom, space, or money) for the greater good of mankind. \n
We have a 100% donation policy, where all of your donations are used to disseminate education of the Qur’an and Sunnah to mankind.

## Eid Message – Appreciating the Blessing of Ramadhan
https://drive.google.com/file/d/1qPo8kSR4t2gc6BIfuF7oza0ELxUf3DyK/view?usp=sharing",

## Connecting with The Quran Series
https://drive.google.com/drive/folders/17V9XIl2C7nSSZu0XKkgis6IvlMfyJ5KU?usp=sharing

## Ramadhan: The Mercy of Ar-Rahman
https://drive.google.com/file/d/14i0070PK-c0ptpuDrqrGCxjMLAhNnVB_/view?usp=sharing
## The Acceptance of Du’aa (Part 2/3) – The Do’s of Making Du’aa
https://drive.google.com/file/d/1Uh1fpzG0WsNAfpXUKmsCmwfUE4XykN3X/view?usp=sharing

## The Acceptance of Du’aa (Part 3/3) – The Do’s (continued), Don’ts & FAQs of Making Du’aa
https://drive.google.com/file/d/1crZWrJWRorP9XBFdIuKES8hvrHOKr5jM/view?usp=sharing`,
  },
};


const LESSON = [
  {
    title: "Stories of the Four Greatest Muslims",
    description:
      "Learn why Allāh granted them the seal of approval and why the Muslim ummah has held them in the highest regard for over 14 centuries.",
    slug: "four-greatest-muslims",
    external: false,
    image: null,
  },
  {
    title: "Video Lessons",
    description:
      "Join our YouTube channel for regular video lessons which cover a range of topics.",
    slug: "https://youtube.com/almasjid",
    external: true,
    image: "https://almasjid-site.s3.eu-north-1.amazonaws.com/video-lessons.png",
  },
  {
    title: "PDF Library",
    description:
      "Browse our library of books in PDF format and read at your own convenience, featuring a variety of resources.",
    slug: "pdf-library",
    external: false,
    image: "https://almasjid-site.s3.eu-north-1.amazonaws.com/video-lessons.png",
  },
  {
    title: "Tajweed Series",
    description:
      "Enhance your Qur’anic recitation with audio lessons which will guide you through the rules and principles of Tajweed.",
    slug: "tajweed-series",
    external: false,
    image: "https://almasjid-site.s3.eu-north-1.amazonaws.com/tajweed-series.jpg",
  },
  {
    title: "Reminders",
    description:
      "Stay spiritually motivated with our collection of Islamic reminders.",
    slug: "reminders",

    external: false,
    image: "https://almasjid-site.s3.eu-north-1.amazonaws.com/reminders.jpg",
  },
  {
    title: "Stories of Prophets",
    description:
      "Delve into the inspiring Stories of the Prophets, with audio podcasts exploring their lives, lessons, and the timeless wisdom they offer.",
    slug: "prophets-stories",
    external: false,
    image: "https://almasjid-site.s3.eu-north-1.amazonaws.com/stories-prophets.jpg",
  },
  {
    title: "Lessons by Sheikh Nasser Rashid",
    description:
      "A collection of insightful lectures by Dr. Nasser Rashid, covering a wide range of Islamic topics.",
    slug: "lectures",
    external: false,
    image: "https://almasjid-site.s3.eu-north-1.amazonaws.com/lectures.jpg",
  },
];

export default { LESSONS, LESSON };
