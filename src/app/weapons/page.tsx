import React from "react";
import WeaponProvider from "@/app/weapons/context/weaponContext";
import WeaponPopUp from "@/app/weapons/@modal/(..)weapons/[id]/WeaponPopUp";
import WeaponList from "@/app/weapons/components/WeaponList";
import WeaponComp from "@/app/weapons/components/WeaponComp";

export default function WeaponsPage() {
    return (
        <WeaponProvider>
            <WeaponPopUp>
                {/*@ts-ignore*/}
                <WeaponComp/>
            </WeaponPopUp>
            {/*@ts-ignore*/}
            <WeaponList/>
        </WeaponProvider>
    )
}