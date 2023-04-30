'use client'

import React, {Fragment, Suspense, useEffect, useMemo, useState} from "react";
import {Dialog, Transition} from "@headlessui/react";
import AccountDetails from "@/app/player-card/accountDetails";
import Spin from "@/app/logos-icons/spin";

export default function PlayerCardPage() {
    const [profile, setProfile] = useState<string>("")
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [valid, setValid] = useState<boolean>(false)
    const regex: RegExp = useMemo(() => /^([A-z0-9_-]+)#([A-z0-9]{1,4})$/gm, []);
    const [username, setUserName] = useState("")
    const [tag, setTag] = useState("")

    function handleSubmit() {
        if (profile.match(regex) !== null) {
            const match = regex.exec(profile)
            if (match !== null) {
                setUserName(match[1])
                setTag(match[2])
            }
        }
    }

    useEffect(() => {
        regex.test(profile) ? setValid(true) : setValid(false)
    }, [profile, regex])

    return (
        <>
            {username && tag && valid && username === profile.split("#")[0] && tag === profile.split("#")[1] ? (
                <>
                    <Suspense fallback={<Spin/>}>
                        {/*@ts-ignore*/}
                        <AccountDetails username={username} tag={tag}/>
                    </Suspense>
                </>
            ) : null}
            <div className={"mx-48"}>
                <label htmlFor={"text"} className={"text-sm font-medium text-muted-foreground"}>Please enter your
                    username
                    and tag</label>
                <input
                    type={"text"}
                    id={"profileInput"}
                    placeholder={"example#1234"}
                    onChange={(e) => setProfile(e.target.value)}
                    onKeyDown={async (e) => {
                        if (e.key === "Enter") {
                            if (valid) {
                                setIsOpen(false)
                                handleSubmit()
                            } else {
                                setIsOpen(true)
                            }
                        }
                    }}
                    className={"flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"}
                />
            </div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog onClose={() => {
                    setIsOpen(false)
                }} className={"relative z-50"}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Panel>
                            <div className={"fixed inset-0 flex items-center justify-center bg-black/75"}>
                                <div
                                    className={"inset-0 bg-primary transition-opacity w-fit h-fit p-8 shadow-xl rounded-[1rem] drop-shadow-[0px_0px_15px_rgba(255,63,63,0.25)]"}>
                                    <h1 className={"text-3xl text-center text-white font-bold mb-4"}>Invalid username or
                                        tag</h1>
                                    <p>
                                        Please make sure you entered your username and tag correctly.
                                        <br/>
                                        Like this: {"\"danielz#1337\""}
                                    </p>
                                    <button className={"p-4 shadow-xl bg-white dark:bg-palette-black rounded-lg w-full mt-4 text-center text-black dark:text-white font-bold text-xl hover:bg-opacity-90 transition-all duration-300 ease-in-out"}
                                            onClick={() => setIsOpen(false)}>
                                        I understand
                                    </button>
                                </div>
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </Dialog>
            </Transition>
        </>
    )
}