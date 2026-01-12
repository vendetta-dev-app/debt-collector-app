import type { CityNode } from '@types'

export function makeCityLabel(cityNode: CityNode): string {
  if (!cityNode.region)
    throw new Error('makeCityLabel requires CityNode to have region info')

  return `${cityNode.name}, ${cityNode.region.name}`
}