import { Organisation } from "./organisation.model"

export interface Session {
    id: number,
    personnes?:any,
    dateDebut: Date,
    dateFin: Date,
    organisation?: Organisation,
    dateCreated: Date,
    lastUpdated: Date
}