'use client';

import {Dialog, Transition} from "@headlessui/react";
import React, {Fragment, Suspense, useEffect} from "react";
import {useAgentContext} from "@/app/agents/context/agentContext";
import Spin from "@/app/logos-icons/spin";
import AgentComp from "@/app/agents/components/agentComp";
import {useSearchParams} from "next/navigation";
import LeftArrow from "@/app/logos-icons/leftarrow";

export default function AgentPopUp() {
    const {agentActive, setAgentActive, agentId, setAgentId} = useAgentContext();

    const agentIdSearchParams: string | null = useSearchParams().get('id');

    useEffect(() => {
        if (agentIdSearchParams) {
            setAgentActive(true);
            setAgentId(agentIdSearchParams);
        }
    }, [agentIdSearchParams, setAgentActive, setAgentId]);

    return (
        <>
            <Transition appear show={agentActive} as={Fragment}>
                <Dialog onClose={() => {
                    setAgentActive(false)
                    setAgentId(null)
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
                                className={"inset-0 bg-primary transition-opacity w-fit h-fit p-8 shadow-xl rounded-[1rem] drop-shadow-[0px_0px_15px_rgba(255,63,63,0.25)]"}>
                                {agentId ? (
                                    <Suspense
                                        fallback={<div
                                            className={"flex justify-center items-center mx-auto inset-0 p-10"}>
                                            <Spin/></div>}>
                                        <button className={"rounded-full p-1 hover:bg-white/20"}><LeftArrow
                                            stroke={"white"}/></button>
                                        <Dialog.Panel
                                            className={"mx-auto grid grid-cols-2 overflow-hidden"}>
                                            {/*@ts-ignore*/}
                                            <AgentComp/>
                                        </Dialog.Panel>
                                    </Suspense>
                                ) : (
                                    <>
                                    </>)}
                            </div>
                        </div>
                    </Transition.Child>
                </Dialog>
            </Transition>
        </>
    );
}
