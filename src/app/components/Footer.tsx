'use client';

import BannerNoText from "@/app/logos-icons/banner_no_text";
import Link from "next/link";
import SuccessToast from "@/app/components/success_toast";
import {BsDiscord, BsFillEnvelopeFill, BsGithub, BsInstagram, BsSteam, BsTwitter, BsYoutube} from "react-icons/bs";
import {useEffect, useState} from "react";
import {Transition} from "@headlessui/react";
import {shuffle} from "@/app/hooks/getShuffledArray";

export default function Footer() {
    const [CopyDiscordClicked, setCopyDiscordClicked] = useState(false);

    const links: { name: string, href: string, icon: React.ReactElement }[] = [
        {name: "GitHub", href: "https://github.com/DanielZ1337/ValorVault", icon: <BsGithub className={"w-full h-full"}/>},
        {name: "Twitter", href: "https://twitter.com/DanielZ1337", icon: <BsTwitter className={"w-full h-full"}/>},
        {name: "Discord", href: "", icon: <BsDiscord className={"w-full h-full"}/>},
        {name: "Instagram", href: "https://www.instagram.com/danielz1337/", icon: <BsInstagram className={"w-full h-full"}/>},
        {name: "YouTube", href: "https://www.youtube.com/danielz1337tm", icon: <BsYoutube className={"w-full h-full"}/>},
        {name: "Email", href: "mailto:danielz2nd@hotmail.com", icon: <BsFillEnvelopeFill className={"w-full h-full"}/>},
        {name: "Steam", href: "https://steamcommunity.com/id/danielz1337/", icon: <BsSteam className={"w-full h-full"}/>},
        // {name: "Twitch", href: "", icon: <BsTwitch size={"3.125rem"}/>},
    ]
    function CopyDiscord() {
        navigator.clipboard.writeText("Даниелз#3144")
    }

    useEffect(() => {
        if (CopyDiscordClicked) {
            setTimeout(() => {
                setCopyDiscordClicked(false)
            }, 3000)
        }
    }, [CopyDiscordClicked])

    return (
        <footer
            className={"mt-8 bg-primary text-gray-600 text-center text-xs p-6 bottom-0 inset-x-0 w-full justify-between grid grid-cols-2"}>
            <Transition
                show={CopyDiscordClicked}
                enter="transition-opacity transition-scale duration-75"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                as={"div"}
                className={"fixed bottom-2 right-8 ml-8"}
            >
                <SuccessToast message={"Copied to clipboard!"} onClick={() => setCopyDiscordClicked(false)}/>
            </Transition>
            <Link className={"flex items-center justify-start"} href={"/"}>
                <BannerNoText fill={"fill-white"} height={"50pt"} width={"400pt"}/>
            </Link>
            <div className={"flex items-center justify-between"}>
                {links.map((link) => (
                    link.name === "Discord" || link.name === "Email" ? (
                        <button
                            className={"text-neutral-100 hover:text-palette-black w-16 h-16 p-1 flex items-center justify-center"}
                            key={link.href} onClick={() => {
                            if (link.name === "Email") window.open(link.href)
                            if (link.name === "Discord") {
                                CopyDiscord()
                                setCopyDiscordClicked(true)
                            }}}>{link.icon}</button>
                    ) : (
                        <Link href={link.href} key={link.name}
                              className={"text-neutral-100 hover:text-palette-black w-16 h-16 p-1 flex items-center justify-center"}
                        >{link.icon}</Link>
                    )
                ))}
            </div>
        </footer>
    )
}
