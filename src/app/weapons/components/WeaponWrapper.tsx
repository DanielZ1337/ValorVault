'use client';

import React from "react";
import {useWeaponContext} from "@/app/weapons/context/weaponContext";

export default function WeaponWrapper({weapon_id, children}: { weapon_id: string, children: React.ReactNode }) {

    const {setWeaponId, setWeaponActive} = useWeaponContext();

    return (
        <button onClick={() => {
            console.log('weapon_id: ', weapon_id);
            setWeaponId(weapon_id);
            setWeaponActive(true);
        }}>
            {children}
        </button>
    )
}