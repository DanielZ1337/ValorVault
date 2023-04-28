import Image from "next/image";
import {Agent} from "@/app/types/agent";
import {Suspense} from "react";
import Spin from "@/app/logos-icons/spin";

export default async function Agent({agent}: { agent: Agent }) {
    return (
        <Suspense fallback={<Spin/>}>
            <div key={agent.uuid} className={"p-4 shadow-xl border-primary border hover:animate-wiggle"}>
                <h1 className={"text-2xl"}>{agent.displayName}</h1>
                <div className={"flex justify-center items-center"}>
                    <Suspense fallback={<Spin/>}>
                        <Image src={agent.displayIcon} alt={agent.displayName} width={200} height={200}/>
                    </Suspense>
                </div>
            </div>
        </Suspense>
    )
}