'use client';

export default function Client() {
    const componentType = typeof window === 'undefined' ? 'server' : 'client';
    return (
        <>
            {componentType}
        </>
    )
}