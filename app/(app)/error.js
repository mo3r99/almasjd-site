"use client"

import Heading from "../ui/heading/heading";

export default function Error({error}) {
    return(
        <main>
            <Heading>Oops... looks like an error occured.</Heading>
            <p>Please try again later. Error code: {error}</p>
        </main>
    )
}