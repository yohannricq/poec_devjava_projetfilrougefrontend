import { Formation } from "./formation.model";

export interface Ressource {
    id: number,
    nom: string,
    description: string,
    type: string,
    formation: Formation,
    organisation?: string,
    dateCreated: Date,
    lastUpdated: Date
}