"use client";

import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import prayTimes from "@/app/lib/prayerTimes";
import { getSalahTimes } from "@/app/lib/databaseConnections";
import to12h from "@/app/lib/to12h";

export default function PrayerTimesTable() {
  const [times, setTimes] = useState({
    fajr: "",
    zuhr: "",
    asr: "",
    maghrib: "",
    isha: "",
    jumuah1: "",
    jumuah2: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function getTimes() {
      return await getSalahTimes();
    }
    getTimes()
      .then((times) => {
        console.log(times);

        prayTimes.setMethod("Karachi");
        const timings = prayTimes.getTimes(
          new Date(),
          [55.8113655, -4.3629321],
          1,
          "24h"
        );
        const [h, m] = timings.maghrib.split(":").map(Number);
        const d = new Date();
        d.setHours(h, m + 7, 0, 0);

        setTimes({
          fajr: times.fajr,
          zuhr: times.zuhr,
          asr: times.asr,
          maghrib: `${String(d.getHours()).padStart(2, "0")}:${String(
            d.getMinutes()
          ).padStart(2, "0")}`,
          isha: times.isha,
          jumuah1: times.jumuah1,
          jumuah2: times.jumuah2,
        });
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [setTimes]);

  const prayerData = [
    // {
    //   type: "BEGINS",
    //   fajr: prayerTimes.fajr, // CHANGE THESE TO WHAT IS REQUIRED
    //   zuhr: prayerTimes.zuhr,
    //   asr: prayerTimes.asr,
    //   maghrib: prayerTimes.maghrib,
    //   isha: prayerTimes.isha,
    //   'Jumuʿah': ''
    // },
    {
      type: "JAMAAT",
      fajr: loading ? "--:--" : to12h(times.fajr.substring(0, 5)),
      zuhr: loading ? "--:--" : to12h(times.zuhr.substring(0, 5)),
      asr: loading ? "--:--" : to12h(times.asr.substring(0, 5)),
      maghrib: loading ? "--:--" : to12h(times.maghrib.substring(0, 5)),
      isha: loading ? "--:--" : to12h(times.isha.substring(0, 5)),
      jumuah1: loading ? "--:--" : to12h(times.jumuah1.substring(0, 5)),
      jumuah2: loading ? "--:--" : to12h(times.jumuah2.substring(0, 5)),
    },
  ];

  return (
    <div className="max-w-3xl mx-auto text-center">
      <Table className="max-w-3xl w-full md:text-lg font-[family-name:var(--font-raleway)]">
        <TableHeader>
          <TableRow className="border-b-0">
            <TableHead className="text-center p-2 font-semibold text-tradewind">
              {/* Empty cell for row labels */}
            </TableHead>
            <TableHead className="text-center p-2 font-semibold text-tradewind">
              FAJR
            </TableHead>
            <TableHead className="text-center p-2 font-semibold text-tradewind">
              ZUHR
            </TableHead>
            <TableHead className="text-center p-2 font-semibold text-tradewind">
              ASR
            </TableHead>
            <TableHead className="text-center p-2 font-semibold text-tradewind">
              MAGHRIB
            </TableHead>
            <TableHead className="text-center p-2 font-semibold text-tradewind">
              ISHA
            </TableHead>
            <TableHead className="text-center p-2 font-semibold text-tradewind">
              JUMUʿAH 1
            </TableHead>
            <TableHead className="text-center p-2 font-semibold text-tradewind">
              JUMUʿAH 2
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {prayerData.map((row, index) => (
            <TableRow key={index} className="border-b-0 text-center">
              <TableCell className="text-center p-2 font-semibold text-weborange ">
                {row.type}
              </TableCell>
              <TableCell className="text-center p-2 font-medium text-gray-700 ">
                {row.fajr}
              </TableCell>
              <TableCell className="text-center p-2 font-medium text-gray-700 ">
                {row.zuhr}
              </TableCell>
              <TableCell className="text-center p-2 font-medium text-gray-700 ">
                {row.asr}
              </TableCell>
              <TableCell className="text-center p-2 font-medium text-gray-700 ">
                {row.maghrib}
              </TableCell>
              <TableCell className="text-center p-2 font-medium text-gray-700 ">
                {row.isha}
              </TableCell>
              <TableCell className="text-center p-2 font-medium text-gray-700 ">
                {row.jumuah1}
              </TableCell>
              <TableCell className="text-center p-2 font-medium text-gray-700 ">
                {row.jumuah2}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
