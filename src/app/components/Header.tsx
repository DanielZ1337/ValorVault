import Image from "next/image";
import ThemeSwitcher from "@/app/components/ThemeSwitcher";

export default function Header() {
    return (
        <header
            className="bg-gray-200 text-gray-600 text-center text-xs p-4 top-0 inset-x-0 w-full flex border-b border-black items-center justify-between">
            <div>
                <span>ValorVault</span>
            </div>
            <ThemeSwitcher/>
        </header>
    )
}