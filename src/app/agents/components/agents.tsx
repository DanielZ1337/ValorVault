import axios from 'axios';

export const agents = async (id: number) => {
    return (await axios.get(`/agents/${id}`)).data
}

export default async function AgentPage(props: { id: number }) {

    const agent = JSON.stringify(await agents(props.id))

    let isOpen = false

    console.log(isOpen)

    return (
        <>
            <h1>{agent}</h1>
        </>
    )
}