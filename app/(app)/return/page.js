"use client";

import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import Container from "@/app/ui/container/container";
import Heading from "@/app/ui/heading/heading";
import Image from "next/image";

const handsImg = "https://almasjid-site.s3.eu-north-1.amazonaws.com/charity.png";

export default function Return({}) {
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sessionId = urlParams.get("session_id");

    fetch(`/api/checkout_sessions?session_id=${sessionId}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.status);
        setCustomerEmail(data.customer_email);
        setName(data.customer_name);
      });
  }, []);

  if (status === "open") {
    return redirect("/donate");
  }

  if (status === "complete") {
    return (
      <Container>
        <section
          id="success"
          className="my-8 w-full max-w-[80vw] flex flex-col-reverse md:flex-row-reverse gap-4"
        >
          <Image
          className="hidden md:block mx-auto"
            src={handsImg}
            width={400}
            height={400}
            alt={"thank you for donating"}
          />

          <Image
          className="md:hidden block mx-auto"
            src={handsImg}
            width={200}
            height={200}
            alt={"thank you for donating"}
          />

          <div className="w-full md:w-[50%] my-auto">
            <Heading className="mb-4 md:text-6xl">Thank you, {name.split(" ")[0]}!</Heading>
            <p className="font-[family-name:var(--font-montserrat)]">
              Your donation has been received! Jazākallahu Khayrā! A
              confirmation email will be sent to {customerEmail}. If you have
              any questions, please email{" "}
              <a
                className="text-cyan-700 hover:text-cyan-500"
                href="mailto:salam@almasjid.co.uk"
              >
                salam@almasjid.co.uk
              </a>
              .
            </p>
          </div>
        </section>
      </Container>
    );
  }

  return null;
}
