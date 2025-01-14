import amLogo from '@/assets/am-logos/sm-logo.png'
import Image from 'next/image'

export default function Layout({children}) {
    return (
        <html lang="en">
        <body className="md:py-[25%] bg-white">
        <Image src={amLogo} height={75} width={75} alt='al masjid logo' style={{margin: '1rem calc(50vw - 40px)'}} />
            {children}
        </body>
        </html>
    )
}