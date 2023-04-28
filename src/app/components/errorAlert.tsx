import ErrorSymbol from "@/app/logos-icons/error-symbol";

export default function ErrorAlert({message}:{message:string}){
    return(
        <div
            className={"bg-primary-100 outline outline-1 text-primary-600 px-4 py-3 rounded relative-md flex justify-center items-center"}>
            <ErrorSymbol/>
            <span className={"ml-3 font-bold"}>Error!
                        <span
                            className={"block sm:inline font-normal"}>{" "}{message}</span>
                        </span>
        </div>
    )
}