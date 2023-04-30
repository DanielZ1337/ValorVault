'use client';

import React, {Fragment, useState} from "react";
import {Dialog, Transition} from "@headlessui/react";
import {useRouter} from "next/navigation";
import {Weapon} from "@/app/types/weapon";
import axios from "axios";
import ErrorAlert from "@/app/components/errorAlert";

export default async function WeaponModal({params}: { params: { id: string } }) {

    const [isOpen, setIsOpen] = useState(true)
    const [error, setError] = useState(false)

    const router = useRouter()

    const weapon: Weapon = await axios.get(`https://valorant-api.com/v1/weapons/${params.id}`)
        .then(res => res.data.data)
        .catch((res) => {
            console.log(res)
        })

    if (!weapon) {
        return <div className={"absolute bg-black/75 w-screen h-screen flex justify-center items-center"}><ErrorAlert
            message={"Weapon not found"}/></div>
    }

    return (
        <div className={"absolute bg-black/75 w-screen h-screen flex justify-center items-center"}>
            <div className={"flex w-screen h-screen items-center justify-center"}>
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
                                <div className={"fixed inset-0 flex items-center justify-center"}>
                                    <div
                                        className={"inset-0 bg-primary transition-opacity w-fit h-fit p-8 shadow-xl rounded-[1rem] drop-shadow-[0px_0px_15px_rgba(255,63,63,0.25)]"}>
                                        <h1 className={"text-3xl text-center text-white font-bold mb-4"}>Invalid
                                            username or
                                            tag</h1>
                                        <h1>Intercepted WeaponModal</h1>
                                        <h1>{params.id}</h1>
                                        <button onClick={() => {
                                            setIsOpen(false)
                                            setTimeout(() => {
                                                router.back()
                                            }, 200)
                                        }}>Close
                                        </button>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </Dialog>
                </Transition>
            </div>
        </div>
    )
}