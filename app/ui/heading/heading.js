export default function Heading({children, ...props}) {
    const style = `text-4xl font-[family-name:var(--font-raleway)] font-semibold ${props.className && props.className}`
    return(
        <h1 className={style} {...props}>{children}</h1>
    )
}