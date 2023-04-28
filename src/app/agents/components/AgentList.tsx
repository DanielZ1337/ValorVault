import axios from "axios";
import {Agent as agentType} from "@/app/types/agent";
import Agent from "@/app/agents/components/agent";
import Spin from "@/app/logos-icons/spin";
import {Suspense} from "react";
import AgentWrapper from "@/app/agents/components/agent_wrapper";
import {redirect} from "next/navigation";

export function sleep(ms = 2000): Promise<void> {
    console.log('Kindly remember to remove `sleep`');
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function shuffle(array: any[]) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}


export default async function AgentList() {

    const agents: agentType[] = await axios.get('https://valorant-api.com/v1/agents?isPlayableCharacter=true')
        .then(res => {
            return sleep(1000).then(() => {
                return shuffle(res.data.data)
            })
        })
        .catch(err => {
            // console.log(err)
            redirect('/agents')
        });

    const componentType = typeof window === 'undefined' ? 'server' : 'client';
    console.log(componentType)

    return (
        <div className={"p-4 text-center"}>
            <h1 className={"text-4xl p-8"}>Agents</h1>
            <Suspense fallback={<div className={"flex items-center justify-center"}><Spin/></div>}>
                {agents ?
                    (<div
                        className={"grid xl:grid-cols-3 md:grid-cols-2 2xl:grid-cols-5 4xl:grid-cols-6 5xl:grid-cols-7 gap-6"}>
                        {agents.map(agent => (
                            <div className={"hover:scale-105 transition delay-300 duration-700"} key={agent.uuid}>
                            <AgentWrapper key={agent.uuid} agent_id={agent.uuid}>
                                {/*@ts-ignore*/}
                                <Agent agent={agent} key={agent.uuid}/>
                            </AgentWrapper></div>
                        ))}
                    </div>) : <div className={"flex items-center justify-center"}><Spin/></div>}
            </Suspense>
        </div>
    )
}