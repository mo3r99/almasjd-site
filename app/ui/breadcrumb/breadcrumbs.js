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
} from "@/components/ui/breadcrumb";

export default function Breadcrumbs({className}) {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);
  console.log(paths, pathNames);

  return (
      <Breadcrumb className={className}>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          {pathNames.map((path, index) => {
            return (
              <Fragment key={index}>
                <BreadcrumbItem>
                  {index != pathNames.length - 1 ? (
                    <BreadcrumbLink href={`/${path}`}>
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
