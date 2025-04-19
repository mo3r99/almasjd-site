"use server";

import "server-only";

import { formatDate } from "@/app/lib/formatDate";

import MailerLite from "@mailerlite/mailerlite-nodejs";
import { z } from "zod";

export default async function newSubscriber(prevState, formData) {
  const mailerlite = new MailerLite({
    api_key: `${process.env.MAILER_LITE_API_KEY}`,
  });

  const email = formData.get("email");

  const emailSchema = z.string().email({ message: "Invalid email address" });
  const emailSafe = emailSchema.safeParse(email);

  if (!emailSafe.success) {
    return { error: "Please enter a valid email address" };
  }

  const params = {
    email: emailSafe.data,
    subscribed_at: formatDate(new Date()),
  };

  const response = await mailerlite.subscribers.createOrUpdate(params);

  if (response.status == 201) {
    return { message: "JazakAllah Khayran for subscribing!" };
  } else if (response.status == 400) {
    return { error: "Please enter a valid email address" };
  } else if (response.status == 200) {
    return { message: "You are already subscribed. JazakAllah Khayran!" };
  } else {
    return { error: "An error occurred. Please try again later." };
  }
}
