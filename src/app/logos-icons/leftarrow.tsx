export default function LeftArrow({stroke}: { stroke?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
             stroke={stroke ? stroke : "currentColor"} className="w-12 h-12 md:w-8 md:h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"/>
        </svg>
    )
}