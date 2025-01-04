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

export default function Breadcrumbs({className}) {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);
  
  let allPaths = [];
  let currentPath = '';
  for (let x = 0; x < pathNames.length; x++) {
    currentPath += pathNames[x] + '/';
    allPaths.push(currentPath);
  }

  return (
      <Breadcrumb className={className}>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          {pathNames.map((path, index) => {
            const link = path;

            switch (path) {
              case 'arabicForKids':
                path = 'Arabic for Kids'
                break;
              case 'alimiyyah':
                path = 'Advanced Islamic Sciences'
                break;
              case 'maktab':
                path = "Qur'an & Islamic Studies"
                break;
              case 'hifz':
                path = "Qur'an Memorisation"
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
                    <BreadcrumbPage>{String(path).charAt(0).toUpperCase() +
                        String(path).slice(1)}</BreadcrumbPage>
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
