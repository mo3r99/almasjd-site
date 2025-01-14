'use client'

import Script from "next/script";

export default function PdfReader({ src }) {
  return (
    <>
      <link href="/dflip/css/dflip.min.css" rel="stylesheet" type="text/css" />
      <link href="/dflip/css/themify-icons.min.css" rel="stylesheet" type="text/css" />
      <Script
        src="https://code.jquery.com/jquery-3.7.1.min.js"
        integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
        crossorigin="anonymous"
      />

      <Script src={"/dflip/js/dflip.min.js"} />
      

      <div
        className="_df_book"
        source={src}
      />
    </>
  );
}
