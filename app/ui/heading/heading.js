export default function Heading({children, ...props}) {
    const style = `${props.className && props.className} text-4xl font-[family-name:var(--font-raleway)] font-semibold`
    return(
        <h1 className={style}>{children}</h1>
    )
}