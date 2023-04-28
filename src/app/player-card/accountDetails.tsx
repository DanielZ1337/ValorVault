import axios from "axios";
import Image from "next/image";
import {Accountdetails} from "@/app/types/accountdetails";
import ErrorSymbol from "@/app/logos-icons/error-symbol";

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

    const errorMessageFromStatusCode = () => errorMessages.find(({statusCode}) => statusCode === status)

    return (
        <>
            {accountDetails !== undefined && accountDetails !== null ? (
                <div className={"p-4 text-center flex flex-col justify-between items-center"}>
                    <h1 className={"text-3xl dark:text-white text-black p-8"}>{accountDetails.name}</h1>
                    <div className={"w-[20rem] h-[20rem] relative animate-agent-bounce"}>
                        <Image src={accountDetails.card.large} className={"object-contain"} fill
                               alt={accountDetails.name}/>
                    </div>
                </div>) : (
                <>
                    <div
                        className={"bg-primary-100 outline outline-1 text-primary-600 px-4 py-3 rounded relative-md flex justify-center items-center"}>
                        <ErrorSymbol/>
                        <span className={"ml-3 font-bold"}>Error!
                        <span className={"block sm:inline font-normal"}>{" "}{errorMessageFromStatusCode()?.errorMessage}</span>
                        </span>
                    </div>
                </>
            )}
        </>
    )
}
