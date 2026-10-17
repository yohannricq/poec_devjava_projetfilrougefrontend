import { Formation } from "./formation.model";


export interface Theme {
    id: number,
    idThemeParent?: any,
    nom: string,
    description?: string,
    formations?: Formation[],
    dateCreated?: Date,
    lastUpdated?: Date
}