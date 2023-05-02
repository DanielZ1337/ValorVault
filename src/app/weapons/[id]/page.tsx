import {Weapon as WeaponType} from "@/app/types/weapon";
import axios from "axios";

export const revalidate = 60

export async function generateStaticParams() {
    const weapons: WeaponType[] = await axios.get("https://valorant-api.com/v1/weapons").then(res => res.data.data)
    return weapons.map((weapon) => ({
        params: {
            id: weapon.uuid
        }
    }))
}

export default function WeaponPage({params}: { params: { id: string } }) {
    return (
        <>
            <h1>Normal WeaponPage</h1>
            <h1>{params.id}</h1>
        </>
    )
}