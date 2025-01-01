import { motion } from "motion/react"

import Image from "next/image";
import styles from "./classComponent.module.css";
import Button from "../button/button";

export default function ClassComponent({
  backgroundImage,
  href,
  title,
  children,
  advanced,
  foundation,
  intermediate,
  className,
  ...props
}) {
  return (
    <div initial={{ scale: 0 }} animate={{ scale: 1 }}
      className={`${styles.container} ${className} w-[300px] h-[400px] mb-6`}
    >
      <div
        className={`${styles.img} w-[100%] h-[100%] relative`}
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        <Image
          src={backgroundImage}
          alt={title}
          layout={"fill"}
          objectFit={"cover"}
          className={styles.image}
          style={{pointerEvents: 'none'}}
        />
      </div>
      <div className={styles.innerContainer}>
        {advanced && (
          <span className="uppercase font-[family-name:var(--font-montserrat)] text-xs font-bold text-dolphin">
            Advanced
          </span>
        )}{" "}
        {/* {advanced && <span>•</span>}{" "} */}
        {foundation && (
          <span className="uppercase font-[family-name:var(--font-montserrat)] text-xs font-bold text-dolphin">
            Foundation
          </span>
        )}
        {intermediate && (
          <span className="uppercase font-[family-name:var(--font-montserrat)] text-xs font-bold text-dolphin">
            Intermediate
          </span>
        )}
        <h2 className="text-2xl font-bold mb-1 font-[family-name:var(--font-raleway)]">
          <mark className={styles.mark}>{title}</mark>
          {/* {title} */}
        </h2>
        <p className="text-sm mb-4 font-[family-name:var(--font-montserrat)]">
          {children}
        </p>
        <Button href={href} colour="purple">
          Learn More
        </Button>
      </div>
    </div>
  );
}
