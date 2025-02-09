import Image from 'next/image'

export default function Layout({children}) {
    return (
        <html lang="en">
        <body className="md:py-[25%] bg-white">
        <Image src={'https://almasjid-site.s3.eu-north-1.amazonaws.com/sm-logo.png'} height={75} width={75} alt='al masjid logo' style={{margin: '1rem calc(50vw - 40px)'}} />
            {children}
        </body>
        </html>
    )
}