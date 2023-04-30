'use client';

import BannerNoText from "@/app/logos-icons/banner_no_text";
import Link from "next/link";
import SuccessToast from "@/app/components/success_toast";
import {
    BsDiscord,
    BsFillEnvelopeFill,
    BsGithub,
    BsInstagram,
    BsSteam,
    BsTwitch,
    BsTwitter,
    BsYoutube
} from "react-icons/bs";
import {useState} from "react";

const links: { name: string, href: string, icon: React.ReactElement }[] = [
    {name: "GitHub", href: "", icon: <BsGithub size={"50px"}/>},
    {name: "Twitter", href: "", icon: <BsTwitter size={"50px"}/>},
    {name: "Discord", href: "", icon: <BsDiscord size={"50px"}/>},
    {name: "Instagram", href: "", icon: <BsInstagram size={"50px"}/>},
    {name: "YouTube", href: "", icon: <BsYoutube size={"50px"}/>},
    {name: "Email", href: "", icon: <BsFillEnvelopeFill size={"50px"}/>},
    {name: "Steam", href: "", icon: <BsSteam size={"50px"}/>},
    {name: "Twitch", href: "", icon: <BsTwitch size={"50px"}/>},
]

function CopyDiscord() {
    navigator.clipboard.writeText("Даниелз#3144")
}

export default function Footer() {

    const [CopyDiscordClicked, setCopyDiscordClicked] = useState(false);

    return (
        <footer
            className={"mt-8 bg-primary text-gray-600 text-center text-xs p-12 bottom-0 inset-x-0 w-full justify-between grid grid-cols-2"}>
            {CopyDiscordClicked ?
                <div className={"fixed bottom-2 right-8 ml-8"}>
                    <SuccessToast message={"Copied to clipboard!"} onClick={() => setCopyDiscordClicked(false)}/>
                </div> : null}
            <Link className={"flex items-center justify-start"} href={"/"}>
                <BannerNoText fill={"fill-white"} height={"50pt"} width={"400pt"}/>
            </Link>
            <div className={"flex items-center justify-center"}>
                {links.map((link) => (
                    link.name === "Discord" || link.name === "Email" ? (
                        <button className={"text-neutral-100 hover:text-palette-black w-full h-full flex items-center justify-center"} key={link.href} onClick={() => {
                            if (link.name === "Email") window.open("mailto:danielz2nd@hotmail.com")
                            if (link.name === "Discord") {
                                CopyDiscord()
                                setCopyDiscordClicked(true)
                            }
                        }
                        }>{link.icon}</button>
                    ) : (
                        <Link href={link.href} key={link.name}
                              className={"text-neutral-100 hover:text-palette-black w-full h-full flex items-center justify-center"}
                        >{link.icon}</Link>
                    )
                ))}
            </div>
        </footer>
    )
}