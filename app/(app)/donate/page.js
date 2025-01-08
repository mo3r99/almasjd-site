import Heading from "../../ui/heading/heading";

export const metadata = {
  title: 'Donate',
};

export default function Donate() {
  return (
    <>
    <Heading></Heading>
    <div className="h-[1200px]">
    <iframe name="give-embed-form" src="https://almasjid.co.uk/give/sadaqah-2?giveDonationFormInIframe=1" data-autoscroll="0" style={{border: '0px', visibility: 'visible', overflow: 'scroll', height: '696px', width: '725px'}} scrolling="no" data-contentloaded="1"></iframe>
    </div>
    </>
  );
}
