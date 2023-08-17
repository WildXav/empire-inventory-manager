const ships = [
  {
    id: 1,
    type: "STAR_FIGHTER",
    manufacturer: "Sienar Fleet Systems",
    model: "TIE/Ln Starfighter",
    cost: "60000",
    qty_left_pct: "20",
    pic_url: "https://static.wikia.nocookie.net/starwars/images/9/92/TIEfighter2-Fathead.png"
  },
  {
    id: 2,
    type: "STAR_DESTROYER",
    manufacturer: "Kuat Drive Yards",
    model: "Imperial I-class",
    cost: "150000000",
    qty_left_pct: "60",
    pic_url: "https://static.wikia.nocookie.net/starwars/images/9/9b/StarDestroyer_negvv.png"
  },
  {
    id: 3,
    type: "STAR_DESTROYER",
    manufacturer: "Kuat Drive Yards",
    model: "Interdictor-class",
    cost: "200000000",
    qty_left_pct: "80",
    pic_url: "https://static.wikia.nocookie.net/starwars/images/e/e2/InterdictorClassSD-EGTW.png"
  },
  {
    id: 4,
    type: "LANDING_CRAFT",
    manufacturer: "Sienar Fleet Systems",
    model: "Delta-class T-3c",
    cost: "160000",
    qty_left_pct: "40",
    pic_url: "https://static.wikia.nocookie.net/starwars/images/f/fd/Krennics-Shuttle-SWCT.png"
  },
  {
    id: 5,
    type: "LANDING_CRAFT",
    manufacturer: "Republic Sienar Systems",
    model: "Kappa-class",
    cost: "100000",
    qty_left_pct: "40",
    pic_url: "https://static.wikia.nocookie.net/starwars/images/f/f4/KappaClassShuttle-DA.png"
  },
  {
    id: 6,
    type: "MEDIUM_TRANSPORT",
    manufacturer: "Gallofree Yards, Inc.",
    model: "GR-75",
    cost: "350000",
    qty_left_pct: "25",
    pic_url: "https://static.wikia.nocookie.net/starwars/images/4/44/GR-75MediumTransport-100Scenes.png"
  },
  {
    id: 7,
    type: "LIGHT_CRUISER",
    manufacturer: "Kuat Drive Yards",
    model: "Arquitens-class",
    cost: "5000000",
    qty_left_pct: "80",
    pic_url: "https://static.wikia.nocookie.net/starwars/images/c/ca/SWBII-ImperialCruiser.png"
  },
  {
    id: 8,
    type: "LANDING_CRAFT",
    manufacturer: "Cygnus Spaceworks",
    model: "Sentinel-class",
    cost: "240000",
    qty_left_pct: "5",
    pic_url: "https://static.wikia.nocookie.net/starwars/images/6/6e/Sentinel_negvv.png"
  },
  {
    id: 9,
    type: "LANDING_CRAFT",
    manufacturer: "Cygnus Spaceworks",
    model: "Lambda-class T-4a",
    cost: "140000",
    qty_left_pct: "55",
    pic_url: "https://static.wikia.nocookie.net/starwars/images/6/6d/LambdaShuttle-Fathead.png"
  },
  {
    id: 10,
    type: "CORVETTE",
    manufacturer: "Republic Sienar Systems",
    model: "Marauder-class",
    cost: "1000000",
    qty_left_pct: "13",
    pic_url: "https://static.wikia.nocookie.net/starwars/images/f/fa/MarauderclassCorvette-SofG2007.png"
  },
  {
    id: 11,
    type: "SHUTTLE",
    manufacturer: "Sienar Fleet Systems",
    model: "T-5 Deliverance",
    cost: "150000",
    qty_left_pct: "70",
    pic_url: "https://static.wikia.nocookie.net/starwars/images/8/89/T-5_Deliverance-SWC.png"
  },
  {
    id: 12,
    type: "SHUTTLE",
    manufacturer: "Sienar Fleet Systems",
    model: "TIE Boarding Craft",
    cost: "150000",
    qty_left_pct: "64",
    pic_url: "https://static.wikia.nocookie.net/starwars/images/9/9b/TIEBoardingCraft-Fathead.png"
  },
  {
    id: 13,
    type: "SHUTTLE",
    manufacturer: "Sienar Fleet Systems",
    model: "TIE/sh",
    cost: "150000",
    qty_left_pct: "85",
    pic_url: "https://static.wikia.nocookie.net/starwars/images/f/fe/TIECommandShuttle-TFOWM.png"
  },
  {
    id: 14,
    type: "CORVETTE",
    manufacturer: "Kuat Drive Yards",
    model: "Raider-class",
    cost: "3000000",
    qty_left_pct: "78",
    pic_url: "https://static.wikia.nocookie.net/starwars/images/e/e0/Raider-class_corvette_XWM.png"
  },
  {
    id: 15,
    type: "SHUTTLE",
    manufacturer: "Telgorn Corporation",
    model: "Zeta-class",
    cost: "95000",
    qty_left_pct: "20",
    pic_url: "https://static.wikia.nocookie.net/starwars/images/8/82/Zeta-class_shuttle_ROUVG.png"
  },
  {
    id: 16,
    type: "LIGHT_FREIGHTER",
    manufacturer: "Corellian Engineering Corporation",
    model: "YT-2400",
    cost: "130000",
    qty_left_pct: "58",
    pic_url: "https://static.wikia.nocookie.net/starwars/images/0/08/YT-2400-SWESV.png"
  },
  {
    id: 17,
    type: "BATTLECRUISER",
    manufacturer: "Kuat Drive Yards",
    model: "Praetor Mark II-class",
    cost: "700000000",
    qty_left_pct: "73",
    pic_url: "https://static.wikia.nocookie.net/starwars/images/a/aa/PraetorMarkIIclassBattlecruiser-EGTW.png"
  },
  {
    id: 18,
    type: "HEAVY_STAR_CRUISER",
    manufacturer: "Mon Calamari Shipyards",
    model: "MC80A Home One Type",
    cost: "112000000",
    qty_left_pct: "84",
    pic_url: "https://static.wikia.nocookie.net/starwars/images/7/73/MonCalamariCruiser-TSWB.png"
  },
  {
    id: 19,
    type: "GUNSHIP",
    manufacturer: "Rothana Heavy Engineering",
    model: "LAAT",
    cost: "62000",
    qty_left_pct: "38",
    pic_url: "https://static.wikia.nocookie.net/starwars/images/1/16/Republic-police-gunship_detail.png"
  }
]

export default ships