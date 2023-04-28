import axios from "axios";
import {Agent} from "@/app/types/agent";
import Image from "next/image";
import Spin from "@/app/logos-icons/spin";
import {Suspense} from "react";
import {useAgentContext} from "@/app/agents/context/agentContext";
import {redirect} from 'next/navigation';

export default async function AgentComp() {

    const agent: Agent = await axios.get(`https://valorant-api.com/v1/agents/${useAgentContext().agentId}`)
        .then(res => {
            return res.data.data
        })
        .catch(err => {
            redirect('/agents')
        });

    return (
        <>
            {agent ? (<><Suspense fallback={<Spin/>}>
                <div className={"p-4 text-center flex flex-col justify-between items-center"}>
                    <h1 className={"text-3xl text-white"}>{agent.displayName}</h1>
                    <div className={"w-[20rem] h-[20rem] relative animate-agent-bounce"}>
                        <Image src={agent.background} className={"object-contain"} fill
                               alt={agent.displayName} sizes={"100vh"}/>
                        <Image src={agent.fullPortrait} className={"object-contain"} fill
                               alt={agent.displayName} sizes={"100vh"}/>
                    </div>
                </div>
            </Suspense>
                <div className={"dark:bg-palette-black dark:text-white text-center text-primary bg-white"}>
                    <div className={"p-4"}>
                        <Suspense fallback={<Spin/>}>
                            <h1 className={"text-2xl"}>Abilities</h1>
                            <br/>
                            <div className={"grid grid-cols-2 gap-4"}>
                                {agent.abilities.map((ability) => (
                                    <div key={ability.displayName}
                                         className={"flex flex-col justify-center items-center drop-shadow-2xl "}>
                                        <Image
                                            className={"dark:invert-0 invert drop-shadow-[0px_0px_15px_rgba(0,0,0,0.25)]"}
                                            src={ability.displayIcon} width={100} height={100}
                                            alt={ability.displayName} sizes={"100vh"}/>
                                        <h1 className={"text-xl"}>{ability.displayName}</h1>
                                    </div>
                                ))}
                            </div>
                        </Suspense>
                    </div>
                </div>
            </>) : <Spin/>}
        </>
    )
}