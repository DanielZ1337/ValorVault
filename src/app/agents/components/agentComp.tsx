import axios from "axios";
import {Agent} from "@/app/types/agent";
import Image from "next/image";
import Spin from "@/app/logos-icons/spin";
import {Suspense, useMemo} from "react";
import {useAgentContext} from "@/app/agents/context/agentContext";
import {redirect} from 'next/navigation';

export default async function AgentComp() {

    const agentId = useAgentContext().agentId

    const agent: Agent = await useMemo(async () => (
        await axios.get(`https://valorant-api.com/v1/agents/${agentId}`)
            .then(res => res.data.data)
            .catch(() => {
                redirect('/agents')
            })
    ), [agentId])

    return (
        <div className={"mx-auto grid md:grid-cols-2"}>
            {agent ? (<>
                <Suspense fallback={<Spin/>}>
                    <div
                        className={"p-4 text-center flex flex-col col-span-1 justify-between items-center md:mt-0 -mt-[3.85rem] -ml-0 md:-ml-16 -z-50"}>
                        <h1 className={"text-3xl text-white md:mb-0 mb-8"}>{agent.displayName}</h1>
                        <div className={"md:w-full md:h-full h-64 w-64 relative animate-agent-bounce"}>
                            <Image src={agent.background} className={"object-contain"} fill
                                   alt={agent.displayName}/>
                            <Image src={agent.fullPortrait} className={"object-contain"} fill
                                   alt={agent.displayName}/>
                        </div>
                    </div>
                </Suspense>
                <div
                    className={"text-white col-span-1 max-w-[50vh] max-h-[50vh] text-center overflow-y-auto md:-mr-4 p-4 pl-4"}>
                    <Suspense fallback={<Spin/>}>
                        <h1 className={"text-2xl"}>Abilities</h1>
                        <br/>
                        <div className={"grid grid-cols-2 gap-4"}>
                            {agent.abilities.map((ability) => (
                                <div key={ability.displayName}
                                     className={"flex flex-col items-center drop-shadow-2xl "}>
                                    {ability.displayIcon ? (
                                        <Image
                                            className={"drop-shadow-[0px_0px_15px_rgba(0,0,0,0.25)]"}
                                            src={ability.displayIcon} width={100} height={100}
                                            alt={ability.displayName}/>) : null}
                                    <h1 className={"text-xl"}>{ability.displayName}</h1>
                                    <p className={"text-sm dark:text-gray-200 text-neutral-200"}>{ability.description}</p>
                                </div>
                            ))}
                        </div>
                    </Suspense>
                </div>
            </>) : <Spin/>}
        </div>
    )
}