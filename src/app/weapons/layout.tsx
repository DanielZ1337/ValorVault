import {Suspense} from "react";

export default function Layout({children, modal}: { children: React.ReactNode, modal: React.ReactNode }) {
    return (
        <>
            {children}
            <Suspense fallback={<></>}>
                {modal}
            </Suspense>
        </>
    )
}