// Configuration of available 3D models
const GITHUB_BASE = 'https://raw.githubusercontent.com/Eslamsamyx/3d-model-viewer/master/public'

export const models = [
  {
    id: 'airport',
    name: 'Airport Terminal',
    variants: [
      { type: 'base', path: `${GITHUB_BASE}/models/Airport/airport-terminal.glb` }
    ],
    images: []
  },
  {
    id: 'bank',
    name: 'Saudi Central Bank',
    variants: [
      { type: 'base', path: `${GITHUB_BASE}/models/Bank/saudi-central-bank-base.glb` },
      { type: 'textured', path: `${GITHUB_BASE}/models/Bank/saudi-central-bank-textured.glb` }
    ],
    images: [`${GITHUB_BASE}/models/Bank/central-bank-of-saudi-arabia.jpg`]
  },
  {
    id: 'electric',
    name: 'Electric Smart Grid',
    variants: [
      { type: 'base', path: `${GITHUB_BASE}/models/Electric:Smart grid/Smart_electric_grid.glb` },
      { type: 'textured', path: `${GITHUB_BASE}/models/Electric:Smart grid/Smart_electric_grid_textured.glb` }
    ],
    images: []
  },
  {
    id: 'hospital',
    name: 'Hospital',
    variants: [
      { type: 'base', path: `${GITHUB_BASE}/models/Hospital/hospital_model.glb` },
      { type: 'textured', path: `${GITHUB_BASE}/models/Hospital/hospital_textured.glb` }
    ],
    images: []
  },
  {
    id: 'ambulance',
    name: 'Ambulance',
    variants: [
      { type: 'base', path: `${GITHUB_BASE}/models/Hospital/ambulance_model.glb` },
      { type: 'textured', path: `${GITHUB_BASE}/models/Hospital/ambulance_textured.glb` }
    ],
    images: []
  },
  {
    id: 'murabaa',
    name: 'Murabaa',
    variants: [
      { type: 'base', path: `${GITHUB_BASE}/models/Murabaa/Murabaa.glb` },
      { type: 'textured', path: `${GITHUB_BASE}/models/Murabaa/Murabaa_textured.glb` }
    ],
    images: []
  },
  {
    id: 'police-hq',
    name: 'Police HQ Building',
    variants: [
      { type: 'base', path: `${GITHUB_BASE}/models/Police_Station/Police_HQ_Building.glb` },
      { type: 'textured', path: `${GITHUB_BASE}/models/Police_Station/Police_HQ_Building_textured.glb` }
    ],
    images: []
  },
  {
    id: 'police-car',
    name: 'Police Car',
    variants: [
      { type: 'base', path: `${GITHUB_BASE}/models/Police_Station/Police_car.glb` }
    ],
    images: []
  },
  {
    id: 'mall',
    name: 'Shopping Mall',
    variants: [
      { type: 'base', path: `${GITHUB_BASE}/models/Shopping_Mall/shopping_mall.glb` },
      { type: 'textured', path: `${GITHUB_BASE}/models/Shopping_Mall/shopping_mall_textured.glb` }
    ],
    images: []
  },
  {
    id: 'mobility',
    name: 'Smart Mobility (Traffic Light & CCTV)',
    variants: [
      { type: 'base', path: `${GITHUB_BASE}/models/Smart mobility with cctv and Traffic Signals and streets/traffic-light-with-cctv-model.glb` },
      { type: 'textured', path: `${GITHUB_BASE}/models/Smart mobility with cctv and Traffic Signals and streets/traffic-light-with-cctv-model-textured.glb` }
    ],
    images: []
  },
  {
    id: 'stadium',
    name: 'Stadium',
    variants: [
      { type: 'base', path: `${GITHUB_BASE}/models/Stadium/Stadium.glb` },
      { type: 'textured', path: `${GITHUB_BASE}/models/Stadium/Stadium-textured.glb` }
    ],
    images: []
  },
  {
    id: 'factory',
    name: 'Factory',
    variants: [
      { type: 'base', path: `${GITHUB_BASE}/models/factory/factory.glb` },
      { type: 'textured', path: `${GITHUB_BASE}/models/factory/factory-textured.glb` }
    ],
    images: []
  },
  {
    id: 'heritage',
    name: 'Heritage Building',
    variants: [
      { type: 'base', path: `${GITHUB_BASE}/models/heritage-building/heritage-building.glb` },
      { type: 'textured', path: `${GITHUB_BASE}/models/heritage-building/heritage_textured.glb` }
    ],
    images: []
  },
  {
    id: 'university',
    name: 'King Saud University',
    variants: [
      { type: 'base', path: `${GITHUB_BASE}/models/university/king_saud_university.glb` },
      { type: 'textured', path: `${GITHUB_BASE}/models/university/king_saud_university_textured.glb` }
    ],
    images: [`${GITHUB_BASE}/models/university/reference.jpg`]
  }
]
