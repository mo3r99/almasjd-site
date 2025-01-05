import Link from "next/link"
import { cn } from "@/lib/utils"


import styles from './button.module.css'

export default function Button ({colour, href, children, className, back, ...props}) {
    var style = `${props.className && props.className} ${styles.btn} transition-all duration-300 flex items-baseline max-w-48 relative font-[family-name:var(--font-montserrat)] uppercase font-bold mt-4`;
    style=cn(
            `${styles.btn} transition-all duration-300 flex items-baseline max-w-48 relative font-[family-name:var(--font-montserrat)] uppercase font-bold`,
            className
          )

    let color, c;

    if (colour === 'blue') {
        style = style + ' text-tradewind hover:text-[#458878] ' + styles.blueButton
        c = 'text-tradewind hover:text-[#458878] transition-all duration-300'
        color = '#458878'
    } else if (colour === 'orange') {
        style = style + ' text-weborange hover:text-[#bb7d21] ' + styles.orangeButton
        c = 'text-weborange hover:text-[#bb7d21] transition-all duration-300 ' 
        color = '#458878'
    } else if (colour === 'purple') {
        style = style + ' text-dolphin ' + styles.purpleButton
        c = 'text-dolphin hover:text-[#423c5a] transition-all duration-300'
        color = '#458878'
    }

    return (
      <>
      {href ? (<Link className={style} href={href} {...props}>
      {back && (      <svg
      className={`mx-2 ${styles.svg} ${back && styles.backwards}`}
        viewBox="0 0 512 512"
        height="1em"
        width="1em"
      >
        <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l73.4 73.4H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h370.7l-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
      </svg>)}
      <p className={c}>
        {children}
      </p>
      {!back && <svg
      className={`mx-2 ${styles.svg} ${back && styles.backwards}`}
        viewBox="0 0 512 512"
        height="1em"
        width="1em"
      >
        <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l73.4 73.4H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h370.7l-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
      </svg>}
    </Link>) : (<button className={style} {...props}>
      <p className={c}>
        {children}
      </p>
      <svg
      className={`mx-2 ${styles.svg}`}
        viewBox="0 0 512 512"
        height="1em"
        width="1em"
      >
        <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l73.4 73.4H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h370.7l-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
      </svg>
    </button>)}
    </>
    )
}