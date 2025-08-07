import { getServerSideSitemapIndex } from "next-sitemap";
import classes from '@/store/classes/classes';

export async function GET(request) {
  // Method to source urls from cms
  // const urls = await fetch('https//example.com/api')
  var classes = Object.values(classes).map((cls) =>
    'https://www.almasjid.co.uk/' + cls.href
  );

  return getServerSideSitemapIndex(classes);
}
