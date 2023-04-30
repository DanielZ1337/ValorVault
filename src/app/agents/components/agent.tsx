import Image from "next/image";
import {Agent} from "@/app/types/agent";
import {Suspense} from "react";
import Spin from "@/app/logos-icons/spin";

export default async function Agent({agent}: { agent: Agent }) {
    return (
        <Suspense fallback={<Spin/>}>
            <div key={agent.uuid}
                 className={"group p-4 rounded-lg shadow-xl dark:shadow-palette-pink/50 dark:shadow-md border-primary border hover:animate-wiggle"}>
                <h1 className={"text-2xl drop-shadow-xl pb-2 group-hover:text-palette group-hover:drop-shadow-[0px_0px_5px_rgba(255,63,63,1)]"}>{agent.displayName}</h1>
                <div className={"flex justify-center items-center"}>
                    <Suspense fallback={<Spin/>}>
                        <Image className={"drop-shadow-2xl rounded"} src={agent.displayIcon} alt={agent.displayName}
                               width={200} height={200}/>
                    </Suspense>
                </div>
            </div>
        </Suspense>
    )
}