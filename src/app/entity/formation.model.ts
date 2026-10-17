import { Ressource } from "./ressource.model";
import { Session } from "./session.model";

export interface Formation {
    id: number,
    nom: string,
    description?: string,
    detail?: string,
    duree: number,
    lieu: string,
    prixHt: number,
    sessions?: Session[],
    ressources?: Ressource[],
    theme?:any,
    dateCreated: Date,
    lastUpdated: Date
}
