'use client'

import axios from "axios";
import Image from "next/image";
import {useMemo} from "react";
import {redirect} from 'next/navigation';
import {useWeaponContext} from "@/app/weapons/context/weaponContext";
import {Weapon} from "@/app/types/weapon";

export default async function WeaponComp() {

    const weaponId = useWeaponContext().weaponId

    const weapon: Weapon = await useMemo(async () => (
        await axios.get(`https://valorant-api.com/v1/weapons/${weaponId}`)
            .then(res => res.data.data)
            .catch(() => {
                redirect('/agents')
            })
    ), [weaponId])

    return (
        <div className={"flex flex-col items-center justify-center bg-gray-800 rounded-lg p-4"}>
            <h1 className={"text-2xl text-center text-palette-white"}>{weapon.displayName}</h1>
            <Image className={"rounded-lg"} src={weapon.displayIcon} alt={weapon.displayName} width={100}
                   height={100}/>
            {weapon.shopData ? (
                <div className={"flex flex-col items-center justify-center bg-gray-800 rounded-lg p-4"}>
                    <h1 className={"text-2xl text-center text-palette-white"}>Shop Data</h1>
                    <div className={"flex flex-col items-center justify-center"}>
                        <h1 className={"text-xl text-center text-palette-white"}>Cost: {weapon.shopData.cost}</h1>
                        <h1 className={"text-xl text-center text-palette-white"}>Category: {weapon.shopData.category}</h1>
                        <h1 className={"text-xl text-center text-palette-white"}>Category
                            Text: {weapon.shopData.categoryText}</h1>
                    </div>
                </div>
            ) : null}
        </div>
    )
}