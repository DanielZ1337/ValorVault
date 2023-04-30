'use client';

import {Dialog, Transition} from "@headlessui/react";
import React, {Fragment, Suspense} from "react";
import Spin from "@/app/logos-icons/spin";
import {useRouter} from "next/navigation";
import LeftArrow from "@/app/logos-icons/leftarrow";

export default async function WeaponPopUp({children}: { children: React.ReactNode }) {

    const router = useRouter()

    return (
        <>
            <Transition appear show={true} as={Fragment}>
                <Dialog onClose={() => {
                    router.back()
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
                        <div className={"fixed inset-0 flex items-center justify-center bg-black/75"}>
                            <div
                                className={"inset-0 bg-primary dark:bg-gradient-to-r from-0% from-primary via-[51%] md:via-[48%] dark:via-palette-black to-100% dark:to-zinc-950 transition-opacity p-8 shadow-xl rounded-[1rem] md:h-auto md:w-auto max-h-[50vh] md:max-h-full overflow-x-hidden drop-shadow-[0px_0px_15px_rgba(255,63,63,0.25)]"}>
                                <Suspense fallback={
                                    <div className={"flex justify-center items-center mx-auto inset-0 p-10"}><Spin
                                        className={"fill-white"}/></div>}>
                                    <Dialog.Panel
                                        className={"mx-auto"}>
                                        <button className={"rounded-full p-1 -mt-5 md:-mt-4 hover:bg-white/20 z-[100]"}
                                                onClick={() => {
                                                    router.back()
                                                }}><LeftArrow stroke={"white"}/></button>
                                        {children}
                                    </Dialog.Panel>
                                </Suspense>
                            </div>
                        </div>
                    </Transition.Child>
                </Dialog>
            </Transition>
        </>
    );
}
