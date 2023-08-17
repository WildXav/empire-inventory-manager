export interface Ship {
    id: number
    type: ShipType
    manufacturer: number
    model: string
    cost: number
    qty_left_pct: number
    pic_url: string
}

export enum ShipType {
    StarFighter = 'STAR_FIGHTER',
    StarDestroyer = 'STAR_DESTROYER',
    LandingCraft = 'LANDING_CRAFT',
    MediumTransport = 'MEDIUM_TRANSPORT',
    LightCruiser = 'LIGHT_CRUISER',
    Corvette = 'CORVETTE',
    Shuttle = 'SHUTTLE',
    LightFreighter = 'LIGHT_FREIGHTER',
    Battlecruiser = 'BATTLECRUISER',
    HeavyStarCruiser = 'HEAVY_STAR_CRUISER',
    Gunship = 'GUNSHIP',
}
