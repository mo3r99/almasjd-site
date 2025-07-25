"use client";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../../components/ui/breadcrumb";
import path from "path";
import { cn } from "@/lib/utils";

export default function Breadcrumbs({ className }) {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((segment) => segment);

  let allPaths = [];
  let currentPath = "";
  for (let x = 0; x < pathNames.length; x++) {
    currentPath += pathNames[x] + "/";
    allPaths.push(currentPath);
  }

  return (
    <Breadcrumb className={cn(className, "max-w-[80vw]")}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {pathNames.map((path, index) => {
          const link = path;

          switch (path) {
            case "arabicForKids":
              path = "Arabic for Kids";
              break;
            case "alimiyyah":
              path = "Advanced Islamic Sciences";
              break;
            case "maktab":
              path = "Qur'an & Islamic Studies";
              break;
            case "hifz":
              path = "Qur'an Memorisation";
              break;
            case "four-greatest-muslims":
              path = "Stories of the Four Greatest Muslims";
              break;
            case "1":
              path = "Summary of Meanings of Quran";
              break;
            case "3":
              path = "Stories of the Prophets";
              break;
            case "5":
              path = "Connecting With the Qur'an";
              break;
            case "6":
              path = "Summary of the Meanings of the Quran (Urdu)";
              break;
            case "hygiene":
              path = "Male Hygiene Course";
              break;
            case "female-hygiene":
              path = "Female Hygiene Course";
              break;
            case "tafseer-surahs":
              path = "Female Tafseer Course";
              break;
            case "sanatayn":
              path = "Sanatayn Course for Sisters";
              break;
          }

          return (
            <Fragment key={index}>
              <BreadcrumbItem>
                {index != pathNames.length - 1 ? (
                  <BreadcrumbLink href={`/${allPaths[index]}`}>
                    {String(path).charAt(0).toUpperCase() +
                      String(path).slice(1)}
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage>
                    {String(path).charAt(0).toUpperCase() +
                      String(path).slice(1)}
                  </BreadcrumbPage>
                )}
              </BreadcrumbItem>
              {index != pathNames.length - 1 && <BreadcrumbSeparator />}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
