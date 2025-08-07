"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";
import { getSalahTimes, saveSalahTimes } from "@/app/lib/databaseConnections";
import {Button} from "@/components/ui/button";
import Form from "@/app/ui/form/form";

export default function SalahTimes() {
  const [times, setTimes] = useState({
    fajr: new Date().setHours(1, 0, 0, 0),
    zuhr: new Date().setHours(1, 0, 0, 0),
    asr: new Date().setHours(1, 0, 0, 0),
    maghrib: new Date().setHours(1, 0, 0, 0),
    isha: new Date().setHours(1, 0, 0, 0),
    jumuah: new Date().setHours(14, 45, 0, 0),
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function getTimes() {
      return await getSalahTimes();
    }
    const times = getTimes()
      .then((times) => {
        console.log(times);
        setTimes({
          fajr: times.fajr,
          zuhr: times.zuhr,
          asr: times.asr,
          maghrib: times.maghrib,
          isha: times.isha,
          jumuah: times.jumuah,
        });
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [setTimes]);

  function changeTime(e, salah) {
    const time = new Date().setHours(
      parseInt(e.target.value.substring(0, 2)) + 1,
      parseInt(e.target.value.substring(3)),
      0,
      0
    );
    setTimes((prevTime) => ({
      ...prevTime,
      [salah]: time,
    }));
  }
  return (
    <>
      <h1 className="text-lg mb-4">
        Darnley Musalla Salah Times {loading && `... Updating`}
      </h1>
      <Form className={'pt-4 flex flex-column gap-4'} action={saveSalahTimes} showContentOnSubmit={true}>
        <div>
          <label htmlFor="fajr">Fajr</label>
          <Input
            type="time"
            id="fajr"
            name="fajr"
            value={
              typeof times.fajr === "string"
                ? times.fajr
                : new Date(times.fajr).toISOString().substring(11, 16)
            }
            onChange={(e) => changeTime(e, "fajr")}
          />
        </div>
        <div>
          <label htmlFor="zuhr">Zuhr</label>
          <Input
            type="time"
            id="zuhr"
            name="zuhr"
            value={
              typeof times.zuhr === "string"
                ? times.zuhr
                : new Date(times.zuhr).toISOString().substring(11, 16)
            }
            onChange={(e) => changeTime(e, "zuhr")}
          />
        </div>
        <div>
          <label htmlFor="asr">Asr</label>
          <Input
            type="time"
            id="asr"
            name="asr"
            value={
              typeof times.asr === "string"
                ? times.asr
                : new Date(times.asr).toISOString().substring(11, 16)
            }
            onChange={(e) => changeTime(e, "asr")}
          />
        </div>
        <div>
          <label htmlFor="maghrib">Maghrib</label>
          <Input
            type="time"
            id="maghrib"
            name="maghrib"
            value={
              typeof times.maghrib === "string"
                ? times.maghrib
                : new Date(times.maghrib).toISOString().substring(11, 16)
            }
            onChange={(e) => changeTime(e, "maghrib")}
            disabled
          />
        </div>
        <div>
          <label htmlFor="isha">Isha</label>
          <Input
            type="time"
            id="isha"
            name="isha"
            value={
              typeof times.isha === "string"
                ? times.isha
                : new Date(times.isha).toISOString().substring(11, 16)
            }
            onChange={(e) => changeTime(e, "isha")}
          />
        </div>
        <div>
          <label htmlFor="jumuah">Jumu'ah</label>
          <Input
            type="time"
            id="jumuah"
            name="jumuah"
            value={
              typeof times.jumuah === "string"
                ? times.jumuah
                : new Date(times.jumuah).toISOString().substring(11, 16)
            }
            onChange={(e) => changeTime(e, "jumuah")}
          />
        </div>

        <Button disabled={loading} className={'my-4 w-full'} type="submit" variant={'outline'}>Save Times</Button>
      </Form>
    </>
  );
}
