import {Weapon as WeaponType} from "@/app/types/weapon";
import Image from "next/image";

export default function Weapon({weapon}: { weapon: WeaponType }) {

    return (
        <>
            <div className={"flex flex-col items-center justify-center bg-gray-800 rounded-lg p-4"}>
                <h1 className={"text-2xl text-center text-palette-white"}>{weapon.displayName}</h1>
                <Image className={"rounded-lg"} src={weapon.displayIcon} alt={weapon.displayName} width={100}
                       height={100}/>
            </div>
        </>
    )
}