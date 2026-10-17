
import { Formation } from './../../app/entity/formation.model';

export const FORMATIONS:Formation[] =
[
  {
    id: 1,
    nom: "Introduction to Java22",
    description: "Learn the basics of Java programming language.",
    detail: "Beginner level",
    duree: 35,
    lieu: "Online",
    prixHt: 1150,
    sessions: [
      {
        id: 38,
        dateDebut: new Date("2023-09-13T12:04:15.445659Z"),
        dateFin: new Date("2023-09-13T12:04:15.445659Z"),
        personnes: [],
        dateCreated: new Date("2023-09-13T12:04:15.496606Z"),
        lastUpdated: new Date("2023-09-13T12:04:15.496606Z")
      },
      {
        id: 1,
        dateDebut: new Date("2023-01-08T09:00:00Z"),
        dateFin: new Date("2023-03-09T09:00:00Z"),
        personnes: [],
        dateCreated: new Date("2023-09-13T12:04:15.180916Z"),
        lastUpdated: new Date("2023-09-13T12:04:15.180916Z")
      },
      {
        id: 3,
        dateDebut: new Date("2023-01-10T09:00:00Z"),
        dateFin: new Date("2023-03-11T09:00:00Z"),
        personnes: [],
        dateCreated: new Date("2023-09-13T12:04:15.198156Z"),
        lastUpdated: new Date("2023-09-13T12:04:15.198156Z")
      },
      {
        id: 2,
        dateDebut: new Date("2023-01-09T09:00:00Z"),
        dateFin: new Date("2023-03-10T09:00:00Z"),
        personnes: [
          {
            id: 2,
            nom: "titi_nom",
            prenom: "titi_prenom",
            type: "stagiaire",
            organisation: null,
            session: 2,
            dateCreated: new Date("2023-09-13T12:04:15.523973Z"),
            lastUpdated: new Date("2023-09-13T12:04:15.523973Z")
          },
          {
            id: 1,
            nom: "toto_nom",
            prenom: "toto_prenom",
            type: "stagiaire",
            organisation: null,
            session: 2,
            dateCreated: new Date("2023-09-13T12:04:15.51465Z"),
            lastUpdated: new Date("2023-09-13T12:04:15.51465Z")
          }
        ],
        dateCreated: new Date("2023-09-13T12:04:15.191803Z"),
        lastUpdated: new Date("2023-09-13T12:04:15.191803Z")
      },
      {
        id: 39,
        dateDebut: new Date("2023-09-13T12:04:15.445659Z"),
        dateFin: new Date("2023-09-13T12:04:15.445659Z"),
        personnes: [],
        dateCreated: new Date("2023-09-13T12:04:15.503475Z"),
        lastUpdated: new Date("2023-09-13T12:04:15.503475Z")
      }
    ],
    ressources: [],
    theme: {
      id: 6,
      idThemeParent: 1,
      nom: "Intelligence Artificielle",
      description: "Explorez les concepts de l'intelligence artificielle.",
      dateCreated: new Date("2023-09-13T12:04:14.965457Z"),
      lastUpdated: new Date("2023-09-13T12:04:14.965457Z")
    },
    dateCreated: new Date("2023-09-13T12:04:15.122442Z"),
    lastUpdated: new Date("2023-09-13T12:04:15.122442Z")
  },
  {
    id: 2,
    nom: "Python for Data Science",
    description: "Explore data analysis with Python.",
    detail: "Intermediate level",
    duree: 56,
    lieu: "In-person",
    prixHt: 1200,
    sessions: [
      {
        id: 32,
        dateDebut: new Date("2023-09-13T12:04:15.445659Z"),
        dateFin: new Date("2023-09-13T12:04:15.445659Z"),
        personnes: [],
        dateCreated: new Date("2023-09-13T12:04:15.454659Z"),
        lastUpdated: new Date("2023-09-13T12:04:15.454659Z")
      },
      {
        id: 6,
        dateDebut: new Date("2023-01-13T09:00:00Z"),
        dateFin: new Date("2023-03-14T09:00:00Z"),
        personnes: [
          {
            id: 6,
            nom: "tete_nom",
            prenom: "tete_prenom",
            type: "stagiaire",
            organisation: null,
            session: 6,
            dateCreated: new Date("2023-09-13T12:04:15.544018Z"),
            lastUpdated: new Date("2023-09-13T12:04:15.544018Z")
          },
          {
            id: 5,
            nom: "tata_nom",
            prenom: "tata_prenom",
            type: "stagiaire",
            organisation: null,
            session: 6,
            dateCreated: new Date("2023-09-13T12:04:15.539033Z"),
            lastUpdated: new Date("2023-09-13T12:04:15.539033Z")
          }
        ],
        dateCreated: new Date("2023-09-13T12:04:15.21956Z"),
        lastUpdated: new Date("2023-09-13T12:04:15.21956Z")
      },
      {
        id: 4,
        dateDebut: new Date("2023-01-11T09:00:00Z"),
        dateFin: new Date("2023-03-12T09:00:00Z"),
        personnes: [
          {
            id: 4,
            nom: "bruno",
            prenom: "gregoire",
            type: "formateur",
            organisation: null,
            session: 4,
            dateCreated: new Date("2023-09-13T12:04:15.534064Z"),
            lastUpdated: new Date("2023-09-13T12:04:15.534064Z")
          },
          {
            id: 3,
            nom: "giovannangeli",
            prenom: "christophe",
            type: "formateur",
            organisation: null,
            session: 4,
            dateCreated: new Date("2023-09-13T12:04:15.528834Z"),
            lastUpdated: new Date("2023-09-13T12:04:15.528834Z")
          }
        ],
        dateCreated: new Date("2023-09-13T12:04:15.203177Z"),
        lastUpdated: new Date("2023-09-13T12:04:15.203177Z")
      },
      {
        id: 31,
        dateDebut: new Date("2023-09-13T12:04:15.445659Z"),
        dateFin: new Date("2023-09-13T12:04:15.445659Z"),
        personnes: [],
        dateCreated: new Date("2023-09-13T12:04:15.448658Z"),
        lastUpdated: new Date("2023-09-13T12:04:15.448658Z")
      },
      {
        id: 40,
        dateDebut: new Date("2023-09-13T12:04:15.445659Z"),
        dateFin: new Date("2023-09-13T12:04:15.445659Z"),
        personnes: [],
        dateCreated: new Date("2023-09-13T12:04:15.508752Z"),
        lastUpdated: new Date("2023-09-13T12:04:15.508752Z")
      },
      {
        id: 5,
        dateDebut: new Date("2023-01-12T09:00:00Z"),
        dateFin: new Date("2023-03-13T09:00:00Z"),
        personnes: [],
        dateCreated: new Date("2023-09-13T12:04:15.211383Z"),
        lastUpdated: new Date("2023-09-13T12:04:15.211383Z")
      }
    ],
    ressources: [],
    theme: {
      id: 7,
      idThemeParent: 1,
      nom: "Développement de Jeux",
      description: "Créez des jeux vidéo avec les outils de développement.",
      dateCreated: new Date("2023-09-13T12:04:14.969457Z"),
      lastUpdated: new Date("2023-09-13T12:04:14.969457Z")
    },
    dateCreated: new Date("2023-09-13T12:04:15.127442Z"),
    lastUpdated: new Date("2023-09-13T12:04:15.127442Z")
  },
  {
    id: 3,
    nom: "C++ Game Development",
    description: "Create games using C++ programming.",
    detail: "Advanced level",
    duree: 80,
    lieu: "Workshop",
    prixHt: 1250,
    sessions: [
      {
        id: 7,
        dateDebut: new Date("2023-01-14T09:00:00Z"),
        dateFin: new Date("2023-03-15T09:00:00Z"),
        personnes: [],
        dateCreated: new Date("2023-09-13T12:04:15.224732Z"),
        lastUpdated: new Date("2023-09-13T12:04:15.224732Z")
      },
      {
        id: 8,
        dateDebut: new Date("2023-01-15T09:00:00Z"),
        dateFin: new Date("2023-03-16T09:00:00Z"),
        personnes: [
          {
            id: 7,
            nom: "tutu_nom",
            prenom: "tutu_prenom",
            type: "stagiaire",
            organisation: null,
            session: 8,
            dateCreated: new Date("2023-09-13T12:04:15.549023Z"),
            lastUpdated: new Date("2023-09-13T12:04:15.549023Z")
          },
          {
            id: 8,
            nom: "meta",
            prenom: "stephane",
            type: "formateur",
            organisation: null,
            session: 8,
            dateCreated: new Date("2023-09-13T12:04:15.554196Z"),
            lastUpdated: new Date("2023-09-13T12:04:15.554196Z")
          }
        ],
        dateCreated: new Date("2023-09-13T12:04:15.232351Z"),
        lastUpdated: new Date("2023-09-13T12:04:15.232351Z")
      },
      {
        id: 9,
        dateDebut: new Date("2023-01-16T09:00:00Z"),
        dateFin: new Date("2023-03-17T09:00:00Z"),
        personnes: [],
        dateCreated: new Date("2023-09-13T12:04:15.241342Z"),
        lastUpdated: new Date("2023-09-13T12:04:15.241342Z")
      },
      {
        id: 37,
        dateDebut: new Date("2023-09-13T12:04:15.445659Z"),
        dateFin: new Date("2023-09-13T12:04:15.445659Z"),
        personnes: [],
        dateCreated: new Date("2023-09-13T12:04:15.489394Z"),
        lastUpdated: new Date("2023-09-13T12:04:15.489394Z")
      }
    ],
    ressources: [],
    theme: {
      id: 8,
      idThemeParent: 1,
      nom: "Sécurité Informatique",
      description: "Apprenez à protéger les systèmes informatiques.",
      dateCreated: new Date("2023-09-13T12:04:14.973457Z"),
      lastUpdated: new Date("2023-09-13T12:04:14.973457Z")
    },
    dateCreated: new Date("2023-09-13T12:04:15.131632Z"),
    lastUpdated: new Date("2023-09-13T12:04:15.131632Z")
  },
  {
    id: 4,
    nom: "Web Development with JavaScript",
    description: "Build interactive websites using JavaScript.",
    detail: "Intermediate level",
    duree: 399,
    lieu: "Online",
    prixHt: 1180,
    sessions: [
      {
        id: 10,
        dateDebut: new Date("2023-01-17T09:00:00Z"),
        dateFin: new Date("2023-03-18T09:00:00Z"),
        personnes: [
          {
            id: 9,
            nom: "tyty_nom",
            prenom: "tyty_prenom",
            type: "stagiaire",
            organisation: null,
            session: 10,
            dateCreated: new Date("2023-09-13T12:04:15.559209Z"),
            lastUpdated: new Date("2023-09-13T12:04:15.559209Z")
          },
          {
            id: 10,
            nom: "furioso",
            prenom: "kevin",
            type: "formateur",
            organisation: null,
            session: 10,
            dateCreated: new Date("2023-09-13T12:04:15.563974Z"),
            lastUpdated: new Date("2023-09-13T12:04:15.563974Z")
          }
        ],
        dateCreated: new Date("2023-09-13T12:04:15.246809Z"),
        lastUpdated: new Date("2023-09-13T12:04:15.246809Z")
      },
      {
        id: 11,
        dateDebut: new Date("2023-01-18T09:00:00Z"),
        dateFin: new Date("2023-03-19T09:00:00Z"),
        personnes: [],
        dateCreated: new Date("2023-09-13T12:04:15.254296Z"),
        lastUpdated: new Date("2023-09-13T12:04:15.254296Z")
      },
      {
        id: 12,
        dateDebut: new Date("2023-01-19T09:00:00Z"),
        dateFin: new Date("2023-03-20T09:00:00Z"),
        personnes: [],
        dateCreated: new Date("2023-09-13T12:04:15.261718Z"),
        lastUpdated: new Date("2023-09-13T12:04:15.261718Z")
      },
      {
        id: 33,
        dateDebut: new Date("2023-09-13T12:04:15.445659Z"),
        dateFin: new Date("2023-09-13T12:04:15.445659Z"),
        personnes: [],
        dateCreated: new Date("2023-09-13T12:04:15.460377Z"),
        lastUpdated: new Date("2023-09-13T12:04:15.460377Z")
      }
    ],
    ressources: [],
    theme: {
      id: 9,
      idThemeParent: 1,
      nom: "DevOps",
      description: "Intégrez le développement et les opérations informatiques.",
      dateCreated: new Date("2023-09-13T12:04:14.977456Z"),
      lastUpdated: new Date("2023-09-13T12:04:14.977456Z")
    },
    dateCreated: new Date("2023-09-13T12:04:15.135645Z"),
    lastUpdated: new Date("2023-09-13T12:04:15.135645Z")
  },
  {
    id: 5,
    nom: "C# for Windows Apps",
    description: "Develop applications for Windows using C#.",
    detail: "Intermediate level",
    duree: 48,
    lieu: "In-person",
    prixHt: 1220,
    sessions: [
      {
        id: 15,
        dateDebut: new Date("2023-01-22T09:00:00Z"),
        dateFin: new Date("2023-03-23T09:00:00Z"),
        personnes: [],
        dateCreated: new Date("2023-09-13T12:04:15.288201Z"),
        lastUpdated: new Date("2023-09-13T12:04:15.288201Z")
      },
      {
        id: 35,
        dateDebut: new Date("2023-09-13T12:04:15.445659Z"),
        dateFin: new Date("2023-09-13T12:04:15.445659Z"),
        personnes: [],
        dateCreated: new Date("2023-09-13T12:04:15.473021Z"),
        lastUpdated: new Date("2023-09-13T12:04:15.473021Z")
      },
      {
        id: 14,
        dateDebut: new Date("2023-01-21T09:00:00Z"),
        dateFin: new Date("2023-03-22T09:00:00Z"),
        personnes: [],
        dateCreated: new Date("2023-09-13T12:04:15.278201Z"),
        lastUpdated: new Date("2023-09-13T12:04:15.278201Z")
      },
      {
        id: 13,
        dateDebut: new Date("2023-01-20T09:00:00Z"),
        dateFin: new Date("2023-03-21T09:00:00Z"),
        personnes: [],
        dateCreated: new Date("2023-09-13T12:04:15.267202Z"),
        lastUpdated: new Date("2023-09-13T12:04:15.267202Z")
      }
    ],
    ressources: [],
    theme: {
      id: 10,
      idThemeParent: 2,
      nom: "Cloud Computing",
      description: "Découvrez la mise en réseau et le stockage basés sur le cloud.",
      dateCreated: new Date("2023-09-13T12:04:14.981471Z"),
      lastUpdated: new Date("2023-09-13T12:04:14.981471Z")
    },
    dateCreated: new Date("2023-09-13T12:04:15.13917Z"),
    lastUpdated: new Date("2023-09-13T12:04:15.13917Z")
  },
  {
    id: 6,
    nom: "Ruby on Rails Workshop",
    description: "Learn to build web applications with Ruby on Rails.",
    detail: "Intermediate level",
    duree: 48,
    lieu: "Workshop",
    prixHt: 1190,
    sessions: [
      {
        id: 16,
        dateDebut: new Date("2023-01-23T09:00:00Z"),
        dateFin: new Date("2023-03-24T09:00:00Z"),
        personnes: [],
        dateCreated: new Date("2023-09-13T12:04:15.293202Z"),
        lastUpdated: new Date("2023-09-13T12:04:15.293202Z")
      },
      {
        id: 18,
        dateDebut: new Date("2023-01-25T09:00:00Z"),
        dateFin: new Date("2023-03-26T09:00:00Z"),
        personnes: [],
        dateCreated: new Date("2023-09-13T12:04:15.309202Z"),
        lastUpdated: new Date("2023-09-13T12:04:15.309202Z")
      },
      {
        id: 34,
        dateDebut: new Date("2023-09-13T12:04:15.445659Z"),
        dateFin: new Date("2023-09-13T12:04:15.445659Z"),
        personnes: [],
        dateCreated: new Date("2023-09-13T12:04:15.468017Z"),
        lastUpdated: new Date("2023-09-13T12:04:15.468017Z")
      },
      {
        id: 17,
        dateDebut: new Date("2023-01-24T09:00:00Z"),
        dateFin: new Date("2023-03-25T09:00:00Z"),
        personnes: [],
        dateCreated: new Date("2023-09-13T12:04:15.301201Z"),
        lastUpdated: new Date("2023-09-13T12:04:15.301201Z")
      }
    ],
    ressources: [],
    theme: {
      id: 11,
      idThemeParent: 2,
      nom: "Automatisation des Tâches",
      description: "Automatisez les tâches répétitives avec la programmation.",
      dateCreated: new Date("2023-09-13T12:04:14.986479Z"),
      lastUpdated: new Date("2023-09-13T12:04:14.986479Z")
    },
    dateCreated: new Date("2023-09-13T12:04:15.143205Z"),
    lastUpdated: new Date("2023-09-13T12:04:15.143205Z")
  },
  {
    id: 7,
    nom: "iOS App Development with Swift",
    description: "Create mobile apps for iOS using Swift.",
    detail: "Beginner level",
    duree: 399,
    lieu: "Online",
    prixHt: 1230,
    sessions: [
      {
        id: 21,
        dateDebut: new Date("2023-01-28T09:00:00Z"),
        dateFin: new Date("2023-03-29T09:00:00Z"),
        personnes: [],
        dateCreated: new Date("2023-09-13T12:04:15.327202Z"),
        lastUpdated: new Date("2023-09-13T12:04:15.327202Z")
      },
      {
        id: 36,
        dateDebut: new Date("2023-09-13T12:04:15.445659Z"),
        dateFin: new Date("2023-09-13T12:04:15.445659Z"),
        personnes: [],
        dateCreated: new Date("2023-09-13T12:04:15.478412Z"),
        lastUpdated: new Date("2023-09-13T12:04:15.478412Z")
      },
      {
        id: 19,
        dateDebut: new Date("2023-01-26T09:00:00Z"),
        dateFin: new Date("2023-03-27T09:00:00Z"),
        personnes: [],
        dateCreated: new Date("2023-09-13T12:04:15.313201Z"),
        lastUpdated: new Date("2023-09-13T12:04:15.313201Z")
      },
      {
        id: 20,
        dateDebut: new Date("2023-01-27T09:00:00Z"),
        dateFin: new Date("2023-03-28T09:00:00Z"),
        personnes: [],
        dateCreated: new Date("2023-09-13T12:04:15.320201Z"),
        lastUpdated: new Date("2023-09-13T12:04:15.320201Z")
      }
    ],
    ressources: [],
    theme: {
      id: 12,
      idThemeParent: 2,
      nom: "IoT (Internet of Things)",
      description: "Explorez la programmation pour les objets connectés.",
      dateCreated: new Date("2023-09-13T12:04:14.990472Z"),
      lastUpdated: new Date("2023-09-13T12:04:14.990472Z")
    },
    dateCreated: new Date("2023-09-13T12:04:15.146205Z"),
    lastUpdated: new Date("2023-09-13T12:04:15.146205Z")
  },
  {
    id: 8,
    nom: "Android App Development with Kotlin",
    description: "Develop Android apps using Kotlin.",
    detail: "Intermediate level",
    duree: 48,
    lieu: "In-person",
    prixHt: 2210,
    sessions: [
      {
        id: 23,
        dateDebut: new Date("2023-01-30T09:00:00Z"),
        dateFin: new Date("2023-03-31T09:00:00Z"),
        personnes: [],
        dateCreated: new Date("2023-09-13T12:04:15.341201Z"),
        lastUpdated: new Date("2023-09-13T12:04:15.341201Z")
      },
      {
        id: 24,
        dateDebut: new Date("2023-01-31T09:00:00Z"),
        dateFin: new Date("2023-04-01T09:00:00Z"),
        personnes: [],
        dateCreated: new Date("2023-09-13T12:04:15.349201Z"),
        lastUpdated: new Date("2023-09-13T12:04:15.349201Z")
      },
      {
        id: 22,
        dateDebut: new Date("2023-01-29T09:00:00Z"),
        dateFin: new Date("2023-03-30T09:00:00Z"),
        personnes: [],
        dateCreated: new Date("2023-09-13T12:04:15.333201Z"),
        lastUpdated: new Date("2023-09-13T12:04:15.333201Z")
      }
    ],
    ressources: [],
    theme: {
      id: 13,
      idThemeParent: 2,
      nom: "Blockchain et Cryptomonnaies",
      description: "Apprenez les bases de la technologie blockchain et des cryptomonnaies.",
      dateCreated: new Date("2023-09-13T12:04:14.994471Z"),
      lastUpdated: new Date("2023-09-13T12:04:14.994471Z")
    },
    dateCreated: new Date("2023-09-13T12:04:15.150204Z"),
    lastUpdated: new Date("2023-09-13T12:04:15.150204Z")
  },
  {
    id: 9,
    nom: "PHP Web Programming",
    description: "Build dynamic web applications with PHP.",
    detail: "Beginner level",
    duree: 48,
    lieu: "Online",
    prixHt: 2160,
    sessions: [
      {
        id: 26,
        dateDebut: new Date("2023-02-02T09:00:00Z"),
        dateFin: new Date("2023-04-03T09:00:00Z"),
        personnes: [],
        dateCreated: new Date("2023-09-13T12:04:15.363202Z"),
        lastUpdated: new Date("2023-09-13T12:04:15.363202Z")
      },
      {
        id: 27,
        dateDebut: new Date("2023-02-03T09:00:00Z"),
        dateFin: new Date("2023-04-04T09:00:00Z"),
        personnes: [],
        dateCreated: new Date("2023-09-13T12:04:15.370202Z"),
        lastUpdated: new Date("2023-09-13T12:04:15.370202Z")
      },
      {
        id: 25,
        dateDebut: new Date("2023-02-01T09:00:00Z"),
        dateFin: new Date("2023-04-02T09:00:00Z"),
        personnes: [],
        dateCreated: new Date("2023-09-13T12:04:15.356202Z"),
        lastUpdated: new Date("2023-09-13T12:04:15.356202Z")
      }
    ],
    ressources: [],
    theme: {
      id: 14,
      idThemeParent: 3,
      nom: "Architecture Logicielle",
      description: "Comprenez la conception d'architectures logicielles robustes.",
      dateCreated: new Date("2023-09-13T12:04:14.999459Z"),
      lastUpdated: new Date("2023-09-13T12:04:14.999459Z")
    },
    dateCreated: new Date("2023-09-13T12:04:15.153188Z"),
    lastUpdated: new Date("2023-09-13T12:04:15.153188Z")
  },
  {
    id: 10,
    nom: "Rust for System Programming",
    description: "Learn systems programming with Rust.",
    detail: "Advanced level",
    duree: 399,
    lieu: "Workshop",
    prixHt: 2240,
    sessions: [
      {
        id: 29,
        dateDebut: new Date("2023-02-05T09:00:00Z"),
        dateFin: new Date("2023-04-06T09:00:00Z"),
        personnes: [],
        dateCreated: new Date("2023-09-13T12:04:15.383774Z"),
        lastUpdated: new Date("2023-09-13T12:04:15.383774Z")
      },
      {
        id: 30,
        dateDebut: new Date("2023-02-06T09:00:00Z"),
        dateFin: new Date("2023-04-07T09:00:00Z"),
        personnes: [],
        dateCreated: new Date("2023-09-13T12:04:15.391772Z"),
        lastUpdated: new Date("2023-09-13T12:04:15.391772Z")
      },
      {
        id: 28,
        dateDebut: new Date("2023-02-04T09:00:00Z"),
        dateFin: new Date("2023-04-05T09:00:00Z"),
        personnes: [],
        dateCreated: new Date("2023-09-13T12:04:15.375201Z"),
        lastUpdated: new Date("2023-09-13T12:04:15.375201Z")
      }
    ],
    ressources: [],
    theme: {
      id: 15,
      idThemeParent: 3,
      nom: "Interfaces Utilisateur",
      description: "Créez des interfaces conviviales pour les utilisateurs.",
      dateCreated: new Date("2023-09-13T12:04:15.003457Z"),
      lastUpdated: new Date("2023-09-13T12:04:15.003457Z")
    },
    dateCreated: new Date("2023-09-13T12:04:15.156367Z"),
    lastUpdated: new Date("2023-09-13T12:04:15.156367Z")
  },
  {
    id: 11,
    nom: "Introduction to Go Programming",
    description: "Get started with programming in Go.",
    detail: "Beginner level",
    duree: 48,
    lieu: "Online",
    prixHt: 2140,
    sessions: [],
    ressources: [],
    theme: {
      id: 16,
      idThemeParent: 3,
      nom: "Programmation Fonctionnelle",
      description: "Explorez le paradigme de la programmation fonctionnelle.",
      dateCreated: new Date("2023-09-13T12:04:15.007457Z"),
      lastUpdated: new Date("2023-09-13T12:04:15.007457Z")
    },
    dateCreated: new Date("2023-09-13T12:04:15.160108Z"),
    lastUpdated: new Date("2023-09-13T12:04:15.160108Z")
  },
  {
    id: 12,
    nom: "Functional Programming with Scala",
    description: "Explore functional programming using Scala.",
    detail: "Intermediate level",
    duree: 48,
    lieu: "In-person",
    prixHt: 1200,
    sessions: [],
    ressources: [],
    theme: {
      id: 17,
      idThemeParent: 4,
      nom: "Sécurité Informatique",
      description: "Apprenez à protéger les systèmes informatiques.",
      dateCreated: new Date("2023-09-13T12:04:15.011456Z"),
      lastUpdated: new Date("2023-09-13T12:04:15.011456Z")
    },
    dateCreated: new Date("2023-09-13T12:04:15.163527Z"),
    lastUpdated: new Date("2023-09-13T12:04:15.163527Z")
  },
  {
    id: 13,
    nom: "Perl Scripting for Automation",
    description: "Automate tasks using Perl scripting.",
    detail: "Intermediate level",
    duree: 399,
    lieu: "Online",
    prixHt: 1170,
    sessions: [],
    ressources: [],
    theme: {
      id: 18,
      idThemeParent: 4,
      nom: "DevOps",
      description: "Intégrez le développement et les opérations informatiques.",
      dateCreated: new Date("2023-09-13T12:04:15.016457Z"),
      lastUpdated: new Date("2023-09-13T12:04:15.016457Z")
    },
    dateCreated: new Date("2023-09-13T12:04:15.167918Z"),
    lastUpdated: new Date("2023-09-13T12:04:15.167918Z")
  },
  {
    id: 14,
    nom: "Machine Learning with Python",
    description: "Learn machine learning using Python.",
    detail: "Advanced level",
    duree: 399,
    lieu: "Online",
    prixHt: 2260,
    sessions: [],
    ressources: [],
    theme: {
      id: 19,
      idThemeParent: 5,
      nom: "Cloud Computing",
      description: "Découvrez la mise en réseau et le stockage basés sur le cloud.",
      dateCreated: new Date("2023-09-13T12:04:15.021457Z"),
      lastUpdated: new Date("2023-09-13T12:04:15.021457Z")
    },
    dateCreated: new Date("2023-09-13T12:04:15.170932Z"),
    lastUpdated: new Date("2023-09-13T12:04:15.170932Z")
  },
  {
    id: 15,
    nom: "Blockchain Development",
    description: "Build applications using blockchain technology.",
    detail: "Advanced level",
    duree: 399,
    lieu: "Workshop",
    prixHt: 2280,
    sessions: [],
    ressources: [],
    theme: {
      id: 20,
      idThemeParent: 6,
      nom: "Automatisation des Tâches",
      description: "Automatisez les tâches répétitives avec la programmation.",
      dateCreated: new Date("2023-09-13T12:04:15.025472Z"),
      lastUpdated: new Date("2023-09-13T12:04:15.025472Z")
    },
    dateCreated: new Date("2023-09-13T12:04:15.174917Z"),
    lastUpdated: new Date("2023-09-13T12:04:15.174917Z")
  }
]