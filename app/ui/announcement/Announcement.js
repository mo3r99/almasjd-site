import Image from "next/image";
import Heading from "../heading/heading";
import Button from "../button/button";

export default function Announcement({ title, img, className, children, btnText, href }) {
return (
    <div className={`bg-[#958bbc] rounded-lg overflow-hidden ${className} text-center flex flex-col justify-center items-center`}>
        <div className="w-full h-48 relative">
            <Image 
                width={200}
                height={200}
                src={img} 
                alt={title}
                className="object-cover p-4 mx-auto"
                //sizes="(max-width: 768px) 100vw, 768px"
            />
        </div>

        <div className="p-8">
            <Heading className="font-[family-name:var(--font-raleway)] mb-2 text-xl">{title}</Heading>
            <p className="font-[family-name:var(--font-montserrat)] text-white">{children}</p>

            {btnText && href && <Button colour={'white'} href={href} className={'mx-auto text-center mt-8 mb-2'}>{btnText}</Button>}
        </div>
    </div>
);
}
