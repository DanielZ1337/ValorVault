export type Agent = {
    uuid: string
    displayName: string
    description: string
    developerName: string
    characterTags: Array<string>
    displayIcon: string
    displayIconSmall: string
    bustPortrait: string
    fullPortrait: string
    fullPortraitV2: string
    killfeedPortrait: string
    background: string
    backgroundGradientColors: Array<string>
    assetPath: string
    isFullPortraitRightFacing: boolean
    isPlayableCharacter: boolean
    isAvailableForTest: boolean
    isBaseContent: boolean
    role: {
        uuid: string
        displayName: string
        description: string
        displayIcon: string
        assetPath: string
    }
    abilities: Array<{
        slot: string
        displayName: string
        description: string
        displayIcon: string
    }>
    voiceLine: {
        minDuration: number
        maxDuration: number
        mediaList: Array<{
            id: number
            wwise: string
            wave: string
        }>
    }
}
