'use client';

import ThemeSwitcher from "@/app/components/ThemeSwitcher";
import Link from "next/link";
import {usePathname} from "next/navigation";
import BannerNoText from "@/app/logos-icons/banner_no_text";

const links: { href: string, label: string }[] = [
    {href: '/', label: 'Home'},
    {href: '/weapons', label: 'Weapons'},
    {href: '/agents', label: 'Agents'},
    {href: '/contracts', label: 'Contracts'},
    {href: '/matches', label: 'Matches'},
    {href: '/player-card', label: 'Player Card'},
]

export default function Header() {

    const pathname = usePathname();

    return (
        <header
            className="overflow-x-auto bg-primary text-white dark:text-palette-black dark:bg-primary-550 text-center p-4 top-0 inset-x-0 w-full flex outline-1 outline items-center justify-between sticky">
            <Link href={"/"} className={"-ml-8"}><BannerNoText fill={"fill-white"} height={"50pt"}
                                                               width={"250pt"}/></Link>
            <nav className={"flex justify-center items-center gap-4 text-lg"}>
                {links.slice(1, links.length).map((link) => (
                    <Link key={link.label} href={link.href}
                          className={`group p-2 rounded-md shadow-2xl ${pathname.includes(link.href) ? "text-xl text-palette-black dark:bg-palette-black dark:text-white bg-white" : "bg-palette-black dark:bg-white"}`}>
                        <p className={"relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-primary before:group-hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300"}>{link.label}</p>
                    </Link>
                ))}
                <ThemeSwitcher/>
            </nav>
        </header>
    )
}