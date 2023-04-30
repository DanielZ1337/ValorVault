export default function WeaponPage({params}: { params: { id: string } }) {
    return (
        <>
            <h1>Normal WeaponPage</h1>
            <h1>{params.id}</h1>
        </>
    )
}