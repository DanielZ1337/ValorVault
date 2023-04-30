import {Weapon as WeaponType} from "@/app/types/weapon";
import Weapon from "@/app/weapons/components/Weapon";
import axios from "axios";
import {Suspense} from "react";
import Spin from "@/app/logos-icons/spin";

export default async function WeaponsPage() {

    const weapons: WeaponType[] = await axios.get("https://valorant-api.com/v1/weapons")
        .then(res => res.data.data)
        .catch((res) => {
            console.log(res)
        })

    return (
        <>
            <div className={"p-4 text-center"}>
                <h1 className={"text-4xl p-8"}>Weapons</h1>
                <Suspense fallback={<div className={"flex items-center justify-center"}><Spin/></div>}>
                    {weapons ?
                        (<div
                            className={"grid xl:grid-cols-3 md:grid-cols-2 2xl:grid-cols-5 4xl:grid-cols-6 5xl:grid-cols-7 gap-6"}>
                            {weapons.map((weapon) => (
                                <Suspense key={weapon.uuid} fallback={<Spin/>}>
                                    <Weapon weapon={weapon} key={weapon.uuid}/>
                                </Suspense>
                            ))}
                        </div>) : <div className={"flex items-center justify-center"}><Spin/></div>}
                </Suspense>
            </div>
        </>
    )
}