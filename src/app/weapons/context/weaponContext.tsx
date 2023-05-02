'use client';

import React, {createContext, useContext, useState} from "react";

interface IWeaponContext {
    weaponId: string | null,
    setWeaponId: (weaponId: string | null) => void,
    weaponActive: boolean,
    setWeaponActive: (weaponActive: boolean) => void
}

const WeaponContext = createContext<IWeaponContext>({
    weaponId: null,
    setWeaponId: () => null,
    weaponActive: false,
    setWeaponActive: () => null
});

const WeaponProvider = ({children}: { children: React.ReactNode }) => {
    const [weaponId, setWeaponId] = useState<string | null>(null);
    const [weaponActive, setWeaponActive] = useState<boolean>(false);

    return (
        <WeaponContext.Provider value={{weaponId, setWeaponId, weaponActive, setWeaponActive}}>
            {children}
        </WeaponContext.Provider>
    )
}

export const useWeaponContext = () => useContext(WeaponContext); // useAgentContext is a custom hook

export default WeaponProvider;