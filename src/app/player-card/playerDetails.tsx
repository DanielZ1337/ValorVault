import {v1_mmr} from "@/app/types/v1_mmr";
import axios from "axios";
import ErrorAlert from "@/app/components/errorAlert";
import Image from "next/image";

export default async function PlayerDetails({region, puuid}: { region: string, puuid: string }) {

    let status: number

    const mmr: v1_mmr = (await axios.get(`https://api.henrikdev.xyz/valorant/v1/by-puuid/mmr/${region}/${puuid}`).then(res => {
        return res.data.data
    }).catch(err => {
        status = err.response.status
        console.clear()
    }))

    return (
        <>
            {mmr !== undefined && mmr !== null ? (
                <div className={"p-4 text-center flex flex-col justify-between items-center"}>
                    <h1 className={"flex items-center justify-center"}>Current rank: {mmr.currenttierpatched}
                        <Image src={mmr.images.large} alt={mmr.currenttierpatched}
                               height={20} width={20} className={"m-2 flex justify-center items-center"}/>
                    </h1>
                    <h1>Current MMR: {mmr.elo}</h1>
                </div>) : (
                <div className={"pt-8"}>
                    <ErrorAlert message={"Could not load player details!"}/>
                </div>
            )
            }
        </>
    )
}