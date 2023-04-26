'use client'

import {useEffect, useState} from "react";
import {useToggleTheme} from "@/app/hooks/useToggleTheme";
import Moon from "@/app/logos-icons/moon";
import Sun from "@/app/logos-icons/sun";

export default function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false);
    const {theme, themes, setTheme} = useToggleTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }
    return (
        <>
            <button className={"p-4 dark:bg-black shadow-xl rounded-lg m-4 dark:text-white dark:hover:bg-[#00001f] hover:bg-[#fffff0] text-black bg-white"} onClick={() => {
                theme === 'light' ? setTheme('dark') : setTheme('light')
            }}>{theme === 'light' ? <Sun/> : <Moon/>}</button>
        </>
    )
}