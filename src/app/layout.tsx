import './globals.css'
import {Inter} from 'next/font/google'
import {Providers} from "@/app/providers";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import React from "react";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'ValorVault',
    description: 'ValorVault - Valorant Stats, game information, match tracking, and more.',
};

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={inter.className + " transition-all ease-in-out delay-[25]"}>
        <Providers>
            <div
                className={"flex min-h-screen max-w-screen flex-col items-center justify-between break-words overflow-x-hidden dark:bg-palette-black"}>
                <Header/>
                {children}
                <Footer/>
            </div>
        </Providers>
        </body>
        </html>
    )
}
