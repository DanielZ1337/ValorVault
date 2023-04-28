'use client';

import ThemeSwitcher from "@/app/components/ThemeSwitcher";
import Link from "next/link";
import {usePathname} from "next/navigation";

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
            className="bg-primary text-white dark:text-palette-black dark:bg-primary-550 text-center p-4 top-0 inset-x-0 w-full flex outline-1 outline items-center justify-between sticky">
            <div>
                <Link href={"/"}>ValorVault</Link>
            </div>
            <nav className={"flex justify-center items-center gap-4 text-lg"}>
                {links.slice(1, links.length).map((link) => (
                    <Link key={link.label} href={link.href}
                          className={`p-2 rounded-md shadow-2xl ${pathname.includes(link.href) ? "text-xl text-palette-black dark:bg-palette-black dark:text-white bg-white" : "bg-palette-black dark:bg-white"}`}>{link.label}</Link>
                ))}
                <ThemeSwitcher/>
            </nav>
        </header>
    )
}