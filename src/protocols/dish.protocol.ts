export type dishEntity = {
    id: number,
    name: string,
    wine_id: number,
    createdAt: string | Date
}

export type dish = Omit<dishEntity, "id" | "createdAt">

export type dishHamonized = {
    name: string,
    type: string,
    body: string,
}