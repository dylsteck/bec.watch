export interface SandwichItem {
    id: string
    imageUrl: string
    description: string
}

export interface RatingItem {
    rating: number // 1-5
    description: string
}

export interface LocationItem {
    name: string
    url: string
}

export interface DayContent {
    date: Date
    sandwich?: SandwichItem[]
    rating?: RatingItem[]
    location?: LocationItem[]
}