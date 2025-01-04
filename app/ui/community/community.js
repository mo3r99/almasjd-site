"use client";

import Heading from "../../ui/heading/heading";
import Image from "next/image";
import { Input } from "../../../components/ui/input";
import Button from "../button/button";
import { useState } from "react";

export default function Community({ children }) {
  return (
    <section className="flex flex-col justify-center items-center p-5 bg-dolphin text-white z-10">
      <Heading className="pt-8 pb-2 text-center">Join Our Community</Heading>
      <p className="text-center font-[family-name:var(--font-montserrat)] pb-8">
        {!children
          ? "Stay up to date about the latest that Almasjid is doing in your community. We will never spam you."
          : children}
      </p>

      <div id="mc_embed_shell" className="w-[100%] max-w-xl">
        <link
          href="//cdn-images.mailchimp.com/embedcode/classic-061523.css"
          rel="stylesheet"
          type="text/css"
        />

        <div id="mc_embed_signup">
          <form
            action="https://almasjid.us14.list-manage.com/subscribe/post?u=83f095a995cf71f9fed976406&amp;id=a83d31a9e1&amp;f_id=00c3f7e0f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
          >
            <div id="mc_embed_signup_scroll">
              <div className="mc-field-group w-[100%]">
                <Input
                  type="email"
                  name="EMAIL"
                  className="required email w-[100%]"
                  id="mce-EMAIL"
                  required
                  placeholder="Email"
                />
              </div>
              <div id="mce-responses" className="clear foot">
                <div
                  className="response"
                  id="mce-error-response"
                  style={{display: "none"}}
                ></div>
                <div
                  className="response"
                  id="mce-success-response"
                  style={{display: "none"}}
                ></div>
              </div>
              <div
                aria-hidden="true"
                style={{position: 'absolute', left: '-5000px'}}
              >
                <Input
                  type="text"
                  name="b_83f095a995cf71f9fed976406_a83d31a9e1"
                  tabIndex="-1"
                />
              </div>
              <div className="optionalParent w-[100%]">
                <div className="clear w-[100%]">
                  <Button
                  colour='orange'
                    type="submit"
                    name="subscribe"
                    id="mc-embedded-subscrib"
                    className="m-auto"
                    value="Subscribe"
                  >Subscribe</Button>
                 
                  <p style={{margin: "0px auto"}}>
                    <a
                    className="hidden"
                      href="http://eepurl.com/i4LSlU"
                      title="Mailchimp - email marketing made easy and fun"
                    >
                      <span style={{display: "inline-block", backgroundColor: "transparent", borderrRadius: "4px"}}>
                        <Image
                          className="refferal_badge hidden"
                          src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
                          alt="Intuit Mailchimp"
                          width={220}
                          height={40}
                          style={{width: '220px', height: '40px', display: 'flex', padding: '2px 0px', justifyContent: 'center', alignItems: "center"}}
                        />
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
        <script
          type="text/javascript"
          src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
        ></script>
        <script type="text/javascript" src="./mailchimp.js"></script>
      </div>
    </section>
  );
}
