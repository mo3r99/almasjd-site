import Button from "@/app/ui/button/button";
import Heading from "../../ui/heading/heading";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Flower, Sprout } from "lucide-react";
import Image from "next/image";

import ottomanImg from "@/assets/ottoman.png";
import charityHandImg from "@/assets/charity-hand.png";
import Breadcrumbs from "@/app/ui/breadcrumb/breadcrumbs";

export const metadata = {
  title: "Donate",
};

const almasjid = (
  <section className="mt-4 max-w-5xl bg-[rgb(230,249,244)] p-10 md:rounded-3xl flex flex-col md:flex-row gap-10 text-center md:text-right">
     <Image
        src={ottomanImg}
        width={350}
        height={200}
        alt={"Support Al Masjid"}
        className="h-auto w-auto mix-blend-multiply hidden md:block"
      />
      <Image
        src={ottomanImg}
        width={200}
        height={150}
        alt={"Support Al Masjid"}
        className="mix-blend-multiply block md:hidden self-center"
      />
      <div>
    <Heading className="flex text-xl mb-4 items-center justify-center md:justify-end text-center md:text-right gap-2 text-[rgb(220,147,37)]">
    
      <Flower />
      Support Al Masjid
    </Heading>
    <Heading className="text-[1.5rem] leading-8 md:text-4xl">
      Abu Hurayra (May Allāh be pleased with him) narrates that the Messenger of
      Allāh ﷺ said: “Allāh says: ‘Spend, O son of Adam, and I shall spend on
      you.'”
    </Heading>
    <p className="font-[family-name:var(--font-montserrat)] mt-4">
      This institute was founded upon the aim to reach out to families that
      cannot access Islamic services by giving them an accessible option to do
      so, safeguarding their faith and the faith of their progeny. By donating
      to our cause, you are taking part in this noble mission and are investing
      in Sadaqah Jariyah for yourself.
    </p>
    <Button colour={"orange"} href={"/support-almasjid"} className={"max-w-72 mt-4 justify-center md:float-right"}>
      Support Al Masjid
    </Button>
    </div>
  </section>
);

const sadqah = (
  <section className="md:mb-8 flex flex-col md:flex-row-reverse gap-6 md:mt-4 max-w-5xl text-center md:text-left bg-[rgb(249,243,230)] p-8 md:p-10 md:rounded-3xl">
    <Image
        src={charityHandImg}
        width={350}
        height={200}
        alt={"Support Al Masjid"}
        className="mix-blend-multiply hidden md:block"
      />
      <Image
        src={charityHandImg}
        width={200}
        height={200}
        alt={"Support Al Masjid"}
        className="mix-blend-multiply block md:hidden self-center"
      />
    <div>
    <Heading className="flex text-xl mb-4 items-center justify-center md:justify-start text-right gap-2 text-[rgb(220,147,37)]">
      
      <Sprout />
      Give Sadaqah
    </Heading>
    <Heading className="text-[1.5rem] leading-8 md:text-4xl">
      The Prophet ﷺ said: "Charity does not decrease wealth, no one forgives
      another except that Allah increases his honour, and no one humbles himself
      for the sake of Allah except that Allah raises his status."
    </Heading>
    <p className="font-[family-name:var(--font-montserrat)] mt-4">
      The Prophet ﷺ said: “The believer’s shade on the Day of Resurrection will
      be his Sadaqah.” (Al-Tirmidhi).
    </p>
    <Button colour={"blue"} href={""} className={"max-w-72 mt-4 justify-center md:float-right md:justify-start"}>
      Give Sadaqah
    </Button>
    </div>
  </section>
);

export default function Donate() {
  return (
    <>
    <div className="block md:hidden bg-[rgb(230,249,244)] w-screen h-[300px] absolute top-0 left-0 z-0"></div>
      <main className="md:max-w-[80vw] mx-auto">
        <Breadcrumbs className={'mx-auto mt-4 w-[130px] z-10 relative'}/>
        {/* <Tabs defaultValue="almasjid" className="mx-auto text-center mt-8">
          <TabsList className="font-[family-name:var(--font-montserrat)]">
            <TabsTrigger value="almasjid">Support Al Masjid</TabsTrigger>
            <TabsTrigger value="sadaqah">Sadaqah</TabsTrigger>
            <TabsTrigger value="zakat">Zakat</TabsTrigger>
          </TabsList>
          <TabsContent value="almasjid">{almasjid}</TabsContent>
          <TabsContent value="sadaqah">{sadqah}.</TabsContent>
          <TabsContent value="zakat">Give Zakat.</TabsContent>
        </Tabs> */}

        {almasjid}
        {sadqah}
      </main>
    </>
  );
}
