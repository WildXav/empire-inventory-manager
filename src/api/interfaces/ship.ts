export interface Ship {
    id: number
    type: ShipType
    manufacturer: string
    model: string
    cost: string
    qty_left_pct: string
    pic_url: string
    tags: ShipTag[]
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

export enum ShipTag {
    Discontinued = 'DISCONTINUED',
    Compromised = 'COMPROMISED',
    NeedStockIncrease = 'STOCK_INCREASE_NEEDED',
    NeedImprovedVersion = 'NEED_IMPROVED_VERSION',
    ToDiscontinue = 'TO_DISCONTINUE'
}
