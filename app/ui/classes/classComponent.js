import Image from "next/image";
import styles from "./classComponent.module.css";
import Button from "../button/button";

export default function ClassComponent({
  backgroundImage,
  href,
  title,
  children,
  advanced,
  kids,
  className,
  ...props
}) {
  return (
    <div className={`${styles.container} ${className} w-[300px] h-[400px] mb-6`}>
      <div
        className={`${styles.img} w-[100%] h-[100%] bg-[70%] hover:bg-[68%]`}
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      ></div>
      <div className={styles.innerContainer}>
        {advanced && <span className="uppercase font-[family-name:var(--font-montserrat)] text-xs font-bold text-dolphin">Advanced</span>} {advanced && kids && <span>•</span>} {kids && <span className="uppercase font-[family-name:var(--font-montserrat)] text-xs font-bold text-dolphin">Kids</span>}
        <h2 className="text-2xl font-bold mb-1 font-[family-name:var(--font-raleway)]">
          <mark className={styles.mark}>{title}</mark>
          {/* {title} */}
        </h2>
        <p className="text-sm mb-4 font-[family-name:var(--font-montserrat)]">
          {children}
        </p>
        <Button href={href} colour="blue">
          Learn More
        </Button>
      </div>
    </div>
  );
}