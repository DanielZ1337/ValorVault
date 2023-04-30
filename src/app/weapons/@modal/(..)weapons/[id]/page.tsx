import {Weapon as WeaponType} from "@/app/types/weapon";
import axios from "axios";
import WeaponPopUp from "@/app/weapons/@modal/(..)weapons/[id]/WeaponPopUp";
import Weapon from "@/app/weapons/@modal/(..)weapons/[id]/Weapon";
import {Suspense} from "react";
import Spin from "@/app/logos-icons/spin";

export default async function WeaponModal({params}: { params: { id: string } }) {
    const weapon: WeaponType = await axios.get(`https://valorant-api.com/v1/weapons/${params.id}`)
        .then(res => res.data.data)
        .catch((res) => {
            console.log(res)
        })

    return (
        <>
            <Suspense fallback={<Spin/>}>
                {/*@ts-ignore*/}
                <WeaponPopUp>
                    <Weapon weapon={weapon} key={weapon.uuid}/>
                </WeaponPopUp>
            </Suspense>
        </>
    )
}