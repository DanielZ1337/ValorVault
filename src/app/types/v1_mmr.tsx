export type v1_mmr = {
    currenttier: number
    currenttierpatched: string
    images: {
        small: string
        large: string
        triangle_down: string
        triangle_up: string
    }
    ranking_in_tier: number
    mmr_change_to_last_game: number
    elo: number
    name: string
    tag: string
    old: boolean
}