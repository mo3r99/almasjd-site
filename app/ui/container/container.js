export default function Container ({children, ...props}) {
    const style = `${props.className && props.className} max-w-5xl h-auto mx-auto`;

    return (
        <div className={style} {...props}>
            {children}
        </div>
    )
}