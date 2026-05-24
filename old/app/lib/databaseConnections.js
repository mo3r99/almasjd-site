"use server";

import { neon } from "@neondatabase/serverless";

export async function getSalahTimes() {
  const sql = neon(process.env.DATABASE_URL);
  return {
    fajr: (await sql`SELECT salah_time FROM salah_times WHERE id=1`)[0]
      .salah_time,
    zuhr: (await sql`SELECT salah_time FROM salah_times WHERE id=2`)[0]
      .salah_time,
    asr: (await sql`SELECT salah_time FROM salah_times WHERE id=3`)[0]
      .salah_time,
    maghrib: (await sql`SELECT salah_time FROM salah_times WHERE id=4`)[0]
      .salah_time,
    isha: (await sql`SELECT salah_time FROM salah_times WHERE id=5`)[0]
      .salah_time,
    jumuah1: (await sql`SELECT salah_time FROM salah_times WHERE id=6`)[0]
      .salah_time,
    jumuah2: (await sql`SELECT salah_time FROM salah_times WHERE id=7`)[0]
      .salah_time,
  };
}

export async function saveSalahTimes(prevState, formData) {
  try {
    console.log(formData);

    const sql = neon(process.env.DATABASE_URL);

    await sql`UPDATE salah_times SET salah_time = ${formData.get("fajr")} WHERE id = 1`;
    await sql`UPDATE salah_times SET salah_time = ${formData.get("zuhr")} WHERE id = 2`;
    await sql`UPDATE salah_times SET salah_time = ${formData.get("asr")} WHERE id = 3`;
    await sql`UPDATE salah_times SET salah_time = ${formData.get("maghrib")} WHERE id = 4`;
    await sql`UPDATE salah_times SET salah_time = ${formData.get("isha")} WHERE id = 5`;
    await sql`UPDATE salah_times SET salah_time = ${formData.get("jumuah1")} WHERE id = 6`;
    await sql`UPDATE salah_times SET salah_time = ${formData.get("jumuah2")} WHERE id = 7`;


    return { message: "Times Saved." };
  } catch (err) {
    console.log(err);
    return { error: "An error occurred. Please try again later." };
  }
}
