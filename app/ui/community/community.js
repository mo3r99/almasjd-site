import Heading from "../../ui/heading/heading";
import { Input } from "../../../components/ui/input";
import Button from "../button/button";

import Form from "../form/form";
import newSubscriber from "@/actions/newSubscriber";

export default function Community({ children }) {
  return (
    <section className="flex flex-col justify-center items-center p-5 bg-dolphin text-white z-10">
      <Heading className="pt-8 pb-2 text-center">Join Our Community</Heading>
      <p className="text-center font-[family-name:var(--font-montserrat)] pb-8">
        {!children
          ? "Stay up to date about the latest that Almasjid is doing in your community."
          : children}
      </p>

      <Form className="flex flex-col items-center w-full md:w-1/2" action={newSubscriber}>
        <Input
          type="email"
          placeholder="Email Address"
          className="w-full"
          required
          name="email"
        />
        <Button type="submit" colour="orange" className="mt-4">
          Subscribe
        </Button>
      </Form>
    </section>
  );
}
