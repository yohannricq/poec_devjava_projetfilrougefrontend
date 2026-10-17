/*
"organisation": {
                "id": 2,
                "type": "centre_formation",
                "nom": "TechLearn",
                "description": "Formation en technologies de l'information.",
                "addresse": "123 Rue de la Formation",
                "ville": "Paris",
                "cpostal": 75001,
                "dateCreated": "2023-09-20T09:27:43.519385Z",
                "lastUpdated": "2023-09-20T09:27:43.519385Z"*/

export interface Organisation {
    id: number,
    type: string,
    nom: string,
    description?: string,
    addresse?: string,
    ville?: string,
    cpostal?: number,
    dateCreated: Date,
    lastUpdated: Date
}