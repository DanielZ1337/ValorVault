'use client'


import React, {Fragment, Suspense, useEffect, useState} from "react";
import {Dialog, Transition} from "@headlessui/react";
import Spin from "@/app/logos-icons/spin";
import Leftarrow from "@/app/logos-icons/leftarrow";
import AgentComp from "@/app/agents/components/agentComp";

export default function MatchesPage() {
    const [profile, setProfile] = useState<string>("")
    const [usernameInvalidOpen, setUsernameInvalidOpen] = useState(false)

    function checkUsername(): boolean {
        setUsernameInvalidOpen(true)
        if (profile.includes("#") && !usernameInvalidOpen) {
            // handleSubmit()
            return true
        } else {
            return false
        }
    }

    useEffect(() => {
        console.log(usernameInvalidOpen)
    }, [usernameInvalidOpen,profile])


    return (
        <>
            <div className={"mx-48"}>
                <label htmlFor={"text"} className={"text-sm font-medium text-muted-foreground"}>Please enter your
                    username
                    and tag</label>
                <input
                    type={"text"}
                    id={"profileInput"}
                    placeholder={"example#1234"}
                    onChange={(e) => setProfile(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            if (!checkUsername()) {
                                setUsernameInvalidOpen(!usernameInvalidOpen)
                            }
                        }
                    }}
                    className={"flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"}
                />
            </div>
            <Transition appear show={usernameInvalidOpen} as={Fragment}>
                <Dialog onClose={() => {

                }}
                        className={"relative z-50"}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >

                                        <Dialog.Panel
                                            className={"mx-auto grid grid-cols-2 overflow-hidden"}>
                                            {/*@ts-ignore*/}
                                            <AgentComp/>
                                        </Dialog.Panel>
                    </Transition.Child>
                </Dialog>
            </Transition>
        </>
    )
}