import axios from "axios";
import Image from "next/image";
import {Accountdetails} from "@/app/types/accountdetails";
import PlayerDetails from "@/app/player-card/playerDetails";
import {Suspense} from "react";
import Spin from "@/app/logos-icons/spin";
import ErrorAlert from "@/app/components/errorAlert";

export default async function AccountDetails({username, tag}: { username: string, tag: string }) {

    let status: number

    const accountDetails: Accountdetails = (await axios.get(`https://api.henrikdev.xyz/valorant/v1/account/${username}/${tag}?force=true`).then(res => {
        return res.data.data
    }).catch(err => {
        status = err.response.status
        console.clear()
    }))

    const errorMessages: { statusCode: number, errorMessage: string }[] = [
        {statusCode: 429, errorMessage: 'API rate limit'},
        {statusCode: 404, errorMessage: 'Could not load account details!'}
    ]

    const errorMessageFromStatusCode = (): string => errorMessages.find(({statusCode}) => statusCode === status)?.errorMessage as string

    return (
        <>
            {accountDetails !== undefined && accountDetails !== null ? (
                <div className={"p-4 text-center flex flex-col justify-between items-center"}>
                    <h1 className={"text-3xl dark:text-white text-black p-8"}>{accountDetails.name + "#" + accountDetails.tag}</h1>
                    <div className={"w-[20rem] h-[20rem] relative animate-agent-bounce"}>
                        <Image src={accountDetails.card.large} className={"object-contain"} fill
                               alt={accountDetails.name}/>
                    </div>
                    <Suspense fallback={<Spin/>}>
                        {/*@ts-ignore*/}
                        <PlayerDetails region={accountDetails.region} puuid={accountDetails.puuid}/>
                    </Suspense>
                </div>) : (
                <>
                    <ErrorAlert message={errorMessageFromStatusCode()}/>
                </>
            )}
        </>
    )
}
