

import { Theme } from 'src/app/entity/theme.model';
import { Formation } from './../../app/entity/formation.model';

export const THEMES:Theme[] = []
/*
  {
    id: 1,
    idThemeParent: null,
    nom: "Langages de Programmation",
    description: "Découvrez les langages utilisés pour développer des logiciels.",
    formations: [],
    dateCreated: new Date("2023-09-13T13:49:56.15777Z"),
    lastUpdated: new Date("2023-09-13T13:49:56.15777Z")
  },
  {
    id: 2,
    idThemeParent: null,
    nom: "Développement Web",
    description: "Explorez la création de sites et d'applications web.",
    formations: [],
    dateCreated: new Date("2023-09-13T13:49:56.164768Z"),
    lastUpdated: new Date("2023-09-13T13:49:56.164768Z")
  },
  {
    id: 3,
    idThemeParent: null,
    nom: "Développement Mobile",
    description: "Apprenez à créer des applications pour les appareils mobiles.",
    formations: [],
    dateCreated: new Date("2023-09-13T13:49:56.1703Z"),
    lastUpdated: new Date("2023-09-13T13:49:56.1703Z")
  },
  {
    id: 4,
    idThemeParent: null,
    nom: "Programmation Orientée Objet",
    description: "Comprenez le paradigme de la programmation orientée objet.",
    formations: [],
    dateCreated: new Date("2023-09-13T13:49:56.17536Z"),
    lastUpdated: new Date("2023-09-13T13:49:56.17536Z")
  },
  {
    id: 5,
    idThemeParent: null,
    nom: "Data Science",
    description: "Plongez dans l'analyse et la visualisation des données.",
    formations: [],
    dateCreated: new Date("2023-09-13T13:49:56.180351Z"),
    lastUpdated: new Date("2023-09-13T13:49:56.180351Z")
  },
  {
    id: 6,
    idThemeParent: 1,
    nom: "Intelligence Artificielle",
    description: "Explorez les concepts de l'intelligence artificielle.",
    formations: [
      {
        id: 1,
        nom: "Introduction to Java",
        description: "Learn the basics of Java programming language.",
        detail: "Beginner level",
        duree: 35,
        lieu: "Online",
        prixHt: 1150,
        sessions: [
          {
            id: 38,
            dateDebut: new Date("2023-09-13T13:49:56.793743Z"),
            dateFin: new Date("2023-09-13T13:49:56.793743Z"),
            formation: 1,
            organisation: null,
            personnes: [],
            dateCreated: new Date("2023-09-13T13:49:56.836175Z"),
            lastUpdated: new Date("2023-09-13T13:49:56.836175Z")
          },
          {
            id: 39,
            dateDebut: new Date("2023-09-13T13:49:56.793743Z"),
            dateFin: new Date("2023-09-13T13:49:56.793743Z"),
            formation: 1,
            organisation: null,
            personnes: [],
            dateCreated: new Date("2023-09-13T13:49:56.841219Z"),
            lastUpdated: new Date("2023-09-13T13:49:56.841219Z")
          },
          {
            id: 2,
            dateDebut: new Date("2023-01-09T09:00:00Z"),
            dateFin: new Date("2023-03-10T09:00:00Z"),
            formation: 1,
            organisation: {
              id: 1,
              type: "centre_formation",
              nom: "Distance",
              description: "Formation à distance",
              addresse: "Formation à distance",
              ville: "Paris",
              cpostal: 75001,
              dateCreated: new Date("2023-09-13T13:49:56.284949Z"),
              lastUpdated: new Date("2023-09-13T13:49:56.284949Z")
            },
            personnes: [
              {
                id: 2,
                nom: "titi_nom",
                prenom: "titi_prenom",
                type: "stagiaire",
                organisation: null,
                session: 2,
                dateCreated: new Date("2023-09-13T13:49:56.857946Z"),
                lastUpdated: new Date("2023-09-13T13:49:56.857946Z")
              },
              {
                id: 1,
                nom: "toto_nom",
                prenom: "toto_prenom",
                type: "stagiaire",
                organisation: null,
                session: 2,
                dateCreated: new Date("2023-09-13T13:49:56.852564Z"),
                lastUpdated: new Date("2023-09-13T13:49:56.852564Z")
              }
            ],
            dateCreated: new Date("2023-09-13T13:49:56.467821Z"),
            lastUpdated: new Date("2023-09-13T13:49:56.467821Z")
          },
          {
            id: 1,
            dateDebut: new Date("2023-01-08T09:00:00Z"),
            dateFin: new Date("2023-03-09T09:00:00Z"),
            formation: 1,
            organisation: 1,
            personnes: [],
            dateCreated: new Date("2023-09-13T13:49:56.452811Z"),
            lastUpdated: new Date("2023-09-13T13:49:56.452811Z")
          },
          {
            id: 3,
            dateDebut: new Date("2023-01-10T09:00:00Z"),
            dateFin: new Date("2023-03-11T09:00:00Z"),
            formation: 1,
            organisation: 1,
            personnes: [],
            dateCreated: new Date("2023-09-13T13:49:56.479112Z"),
            lastUpdated: new Date("2023-09-13T13:49:56.479112Z")
          }
        ],
        ressources: [],
        theme: 6,
        dateCreated: new Date("2023-09-13T13:49:56.340184Z"),
        lastUpdated: new Date("2023-09-13T13:49:56.340184Z")
      }
    ],
    dateCreated: new Date("2023-09-13T13:49:56.183285Z"),
    lastUpdated: new Date("2023-09-13T13:49:56.183285Z")
  },
  {
    id: 7,
    idThemeParent: 1,
    nom: "Développement de Jeux",
    description: "Créez des jeux vidéo avec les outils de développement.",
    formations: [
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
            dateDebut: new Date("2023-09-13T13:49:56.793743Z"),
            dateFin: new Date("2023-09-13T13:49:56.793743Z"),
            formation: 2,
            organisation: null,
            personnes: [],
            dateCreated: new Date("2023-09-13T13:49:56.801744Z"),
            lastUpdated: new Date("2023-09-13T13:49:56.801744Z")
          },
          {
            id: 6,
            dateDebut: new Date("2023-01-13T09:00:00Z"),
            dateFin: new Date("2023-03-14T09:00:00Z"),
            formation: 2,
            organisation: {
              id: 2,
              type: "centre_formation",
              nom: "TechLearn",
              description: "Formation en technologies de l'information.",
              addresse: "123 Rue de la Formation",
              ville: "Paris",
              cpostal: 75001,
              dateCreated: new Date("2023-09-13T13:49:56.289005Z"),
              lastUpdated: new Date("2023-09-13T13:49:56.289005Z")
            },
            personnes: [
              {
                id: 5,
                nom: "tata_nom",
                prenom: "tata_prenom",
                type: "stagiaire",
                organisation: null,
                session: 6,
                dateCreated: new Date("2023-09-13T13:49:56.875556Z"),
                lastUpdated: new Date("2023-09-13T13:49:56.875556Z")
              },
              {
                id: 6,
                nom: "tete_nom",
                prenom: "tete_prenom",
                type: "stagiaire",
                organisation: null,
                session: 6,
                dateCreated: new Date("2023-09-13T13:49:56.880916Z"),
                lastUpdated: new Date("2023-09-13T13:49:56.880916Z")
              }
            ],
            dateCreated: new Date("2023-09-13T13:49:56.510904Z"),
            lastUpdated: new Date("2023-09-13T13:49:56.510904Z")
          },
          {
            id: 31,
            dateDebut: new Date("2023-09-13T13:49:56.793743Z"),
            dateFin: new Date("2023-09-13T13:49:56.793743Z"),
            formation: 2,
            organisation: null,
            personnes: [],
            dateCreated: new Date("2023-09-13T13:49:56.796743Z"),
            lastUpdated: new Date("2023-09-13T13:49:56.796743Z")
          },
          {
            id: 5,
            dateDebut: new Date("2023-01-12T09:00:00Z"),
            dateFin: new Date("2023-03-13T09:00:00Z"),
            formation: 2,
            organisation: 2,
            personnes: [],
            dateCreated: new Date("2023-09-13T13:49:56.501646Z"),
            lastUpdated: new Date("2023-09-13T13:49:56.501646Z")
          },
          {
            id: 4,
            dateDebut: new Date("2023-01-11T09:00:00Z"),
            dateFin: new Date("2023-03-12T09:00:00Z"),
            formation: 2,
            organisation: 2,
            personnes: [
              {
                id: 4,
                nom: "bruno",
                prenom: "gregoire",
                type: "formateur",
                organisation: null,
                session: 4,
                dateCreated: new Date("2023-09-13T13:49:56.870556Z"),
                lastUpdated: new Date("2023-09-13T13:49:56.870556Z")
              },
              {
                id: 3,
                nom: "giovannangeli",
                prenom: "christophe",
                type: "formateur",
                organisation: null,
                session: 4,
                dateCreated: new Date("2023-09-13T13:49:56.864555Z"),
                lastUpdated: new Date("2023-09-13T13:49:56.864555Z")
              }
            ],
            dateCreated: new Date("2023-09-13T13:49:56.493656Z"),
            lastUpdated: new Date("2023-09-13T13:49:56.493656Z")
          },
          {
            id: 40,
            dateDebut: new Date("2023-09-13T13:49:56.793743Z"),
            dateFin: new Date("2023-09-13T13:49:56.793743Z"),
            formation: 2,
            organisation: null,
            personnes: [],
            dateCreated: new Date("2023-09-13T13:49:56.846131Z"),
            lastUpdated: new Date("2023-09-13T13:49:56.846131Z")
          }
        ],
        ressources: [],
        theme: 7,
        dateCreated: new Date("2023-09-13T13:49:56.349559Z"),
        lastUpdated: new Date("2023-09-13T13:49:56.349559Z")
      }
    ],
    dateCreated: new Date("2023-09-13T13:49:56.186348Z"),
    lastUpdated: new Date("2023-09-13T13:49:56.186348Z")
  },
  {
    id: 8,
    idThemeParent: 1,
    nom: "Sécurité Informatique",
    description: "Apprenez à protéger les systèmes informatiques.",
    formations: [
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
            id: 8,
            dateDebut: new Date("2023-01-15T09:00:00Z"),
            dateFin: new Date("2023-03-16T09:00:00Z"),
            formation: 3,
            organisation: {
              id: 3,
              type: "centre_formation",
              nom: "TechLearn",
              description: "Formation en technologies de l'information.",
              addresse: "123 Rue de la Formation",
              ville: "Paris",
              cpostal: 75001,
              dateCreated: new Date("2023-09-13T13:49:56.292903Z"),
              lastUpdated: new Date("2023-09-13T13:49:56.292903Z")
            },
            personnes: [
              {
                id: 8,
                nom: "meta",
                prenom: "stephane",
                type: "formateur",
                organisation: null,
                session: 8,
                dateCreated: new Date("2023-09-13T13:49:56.892897Z"),
                lastUpdated: new Date("2023-09-13T13:49:56.892897Z")
              },
              {
                id: 7,
                nom: "tutu_nom",
                prenom: "tutu_prenom",
                type: "stagiaire",
                organisation: null,
                session: 8,
                dateCreated: new Date("2023-09-13T13:49:56.885887Z"),
                lastUpdated: new Date("2023-09-13T13:49:56.885887Z")
              }
            ],
            dateCreated: new Date("2023-09-13T13:49:56.529448Z"),
            lastUpdated: new Date("2023-09-13T13:49:56.529448Z")
          },
          {
            id: 7,
            dateDebut: new Date("2023-01-14T09:00:00Z"),
            dateFin: new Date("2023-03-15T09:00:00Z"),
            formation: 3,
            organisation: 3,
            personnes: [],
            dateCreated: new Date("2023-09-13T13:49:56.516448Z"),
            lastUpdated: new Date("2023-09-13T13:49:56.516448Z")
          },
          {
            id: 9,
            dateDebut: new Date("2023-01-16T09:00:00Z"),
            dateFin: new Date("2023-03-17T09:00:00Z"),
            formation: 3,
            organisation: 3,
            personnes: [],
            dateCreated: new Date("2023-09-13T13:49:56.538871Z"),
            lastUpdated: new Date("2023-09-13T13:49:56.538871Z")
          },
          {
            id: 37,
            dateDebut: new Date("2023-09-13T13:49:56.793743Z"),
            dateFin: new Date("2023-09-13T13:49:56.793743Z"),
            formation: 3,
            organisation: null,
            personnes: [],
            dateCreated: new Date("2023-09-13T13:49:56.830025Z"),
            lastUpdated: new Date("2023-09-13T13:49:56.830025Z")
          }
        ],
        ressources: [],
        theme: 8,
        dateCreated: new Date("2023-09-13T13:49:56.35517Z"),
        lastUpdated: new Date("2023-09-13T13:49:56.35517Z")
      }
    ],
    dateCreated: new Date("2023-09-13T13:49:56.190279Z"),
    lastUpdated: new Date("2023-09-13T13:49:56.190279Z")
  },
  {
    id: 9,
    idThemeParent: 1,
    nom: "DevOps",
    description: "Intégrez le développement et les opérations informatiques.",
    formations: [
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
            formation: 4,
            organisation: {
              id: 4,
              type: "centre_formation",
              nom: "CodeMaster",
              description: "Apprenez à coder avec les meilleurs instructeurs.",
              addresse: "456 Avenue du Savoir",
              ville: "Lyon",
              cpostal: 69001,
              dateCreated: new Date("2023-09-13T13:49:56.295903Z"),
              lastUpdated: new Date("2023-09-13T13:49:56.295903Z")
            },
            personnes: [
              {
                id: 10,
                nom: "furioso",
                prenom: "kevin",
                type: "formateur",
                organisation: null,
                session: 10,
                dateCreated: new Date("2023-09-13T13:49:56.902679Z"),
                lastUpdated: new Date("2023-09-13T13:49:56.902679Z")
              },
              {
                id: 9,
                nom: "tyty_nom",
                prenom: "tyty_prenom",
                type: "stagiaire",
                organisation: null,
                session: 10,
                dateCreated: new Date("2023-09-13T13:49:56.897937Z"),
                lastUpdated: new Date("2023-09-13T13:49:56.897937Z")
              }
            ],
            dateCreated: new Date("2023-09-13T13:49:56.545769Z"),
            lastUpdated: new Date("2023-09-13T13:49:56.545769Z")
          },
          {
            id: 12,
            dateDebut: new Date("2023-01-19T09:00:00Z"),
            dateFin: new Date("2023-03-20T09:00:00Z"),
            formation: 4,
            organisation: 4,
            personnes: [],
            dateCreated: new Date("2023-09-13T13:49:56.567783Z"),
            lastUpdated: new Date("2023-09-13T13:49:56.567783Z")
          },
          {
            id: 33,
            dateDebut: new Date("2023-09-13T13:49:56.793743Z"),
            dateFin: new Date("2023-09-13T13:49:56.793743Z"),
            formation: 4,
            organisation: null,
            personnes: [],
            dateCreated: new Date("2023-09-13T13:49:56.806744Z"),
            lastUpdated: new Date("2023-09-13T13:49:56.806744Z")
          },
          {
            id: 11,
            dateDebut: new Date("2023-01-18T09:00:00Z"),
            dateFin: new Date("2023-03-19T09:00:00Z"),
            formation: 4,
            organisation: 4,
            personnes: [],
            dateCreated: new Date("2023-09-13T13:49:56.552787Z"),
            lastUpdated: new Date("2023-09-13T13:49:56.552787Z")
          }
        ],
        ressources: [],
        theme: 9,
        dateCreated: new Date("2023-09-13T13:49:56.361185Z"),
        lastUpdated: new Date("2023-09-13T13:49:56.361185Z")
      }
    ],
    dateCreated: new Date("2023-09-13T13:49:56.193348Z"),
    lastUpdated: new Date("2023-09-13T13:49:56.193348Z")
  },
  {
    id: 10,
    idThemeParent: 2,
    nom: "Cloud Computing",
    description: "Découvrez la mise en réseau et le stockage basés sur le cloud.",
    formations: [
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
            id: 13,
            dateDebut: new Date("2023-01-20T09:00:00Z"),
            dateFin: new Date("2023-03-21T09:00:00Z"),
            formation: 5,
            organisation: {
              id: 5,
              type: "centre_formation",
              nom: "WebPro",
              description: "Formation complète en développement web.",
              addresse: "789 Boulevard des Webmasters",
              ville: "Marseille",
              cpostal: 13001,
              dateCreated: new Date("2023-09-13T13:49:56.298902Z"),
              lastUpdated: new Date("2023-09-13T13:49:56.298902Z")
            },
            personnes: [],
            dateCreated: new Date("2023-09-13T13:49:56.574401Z"),
            lastUpdated: new Date("2023-09-13T13:49:56.574401Z")
          },
          {
            id: 14,
            dateDebut: new Date("2023-01-21T09:00:00Z"),
            dateFin: new Date("2023-03-22T09:00:00Z"),
            formation: 5,
            organisation: 5,
            personnes: [],
            dateCreated: new Date("2023-09-13T13:49:56.582369Z"),
            lastUpdated: new Date("2023-09-13T13:49:56.582369Z")
          },
          {
            id: 15,
            dateDebut: new Date("2023-01-22T09:00:00Z"),
            dateFin: new Date("2023-03-23T09:00:00Z"),
            formation: 5,
            organisation: 5,
            personnes: [],
            dateCreated: new Date("2023-09-13T13:49:56.594759Z"),
            lastUpdated: new Date("2023-09-13T13:49:56.594759Z")
          },
          {
            id: 35,
            dateDebut: new Date("2023-09-13T13:49:56.793743Z"),
            dateFin: new Date("2023-09-13T13:49:56.793743Z"),
            formation: 5,
            organisation: null,
            personnes: [],
            dateCreated: new Date("2023-09-13T13:49:56.817405Z"),
            lastUpdated: new Date("2023-09-13T13:49:56.817405Z")
          }
        ],
        ressources: [],
        theme: 10,
        dateCreated: new Date("2023-09-13T13:49:56.36533Z"),
        lastUpdated: new Date("2023-09-13T13:49:56.36533Z")
      }
    ],
    dateCreated: new Date("2023-09-13T13:49:56.197281Z"),
    lastUpdated: new Date("2023-09-13T13:49:56.197281Z")
  },
  {
    id: 11,
    idThemeParent: 2,
    nom: "Automatisation des Tâches",
    description: "Automatisez les tâches répétitives avec la programmation.",
    formations: [
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
            id: 34,
            dateDebut: new Date("2023-09-13T13:49:56.793743Z"),
            dateFin: new Date("2023-09-13T13:49:56.793743Z"),
            formation: 6,
            organisation: null,
            personnes: [],
            dateCreated: new Date("2023-09-13T13:49:56.812406Z"),
            lastUpdated: new Date("2023-09-13T13:49:56.812406Z")
          },
          {
            id: 18,
            dateDebut: new Date("2023-01-25T09:00:00Z"),
            dateFin: new Date("2023-03-26T09:00:00Z"),
            formation: 6,
            organisation: {
              id: 6,
              type: "centre_formation",
              nom: "DataTech",
              description: "Spécialisation en science des données.",
              addresse: "1010 Rue des Données",
              ville: "Lille",
              cpostal: 59000,
              dateCreated: new Date("2023-09-13T13:49:56.301893Z"),
              lastUpdated: new Date("2023-09-13T13:49:56.301893Z")
            },
            personnes: [],
            dateCreated: new Date("2023-09-13T13:49:56.619251Z"),
            lastUpdated: new Date("2023-09-13T13:49:56.619251Z")
          },
          {
            id: 16,
            dateDebut: new Date("2023-01-23T09:00:00Z"),
            dateFin: new Date("2023-03-24T09:00:00Z"),
            formation: 6,
            organisation: 6,
            personnes: [],
            dateCreated: new Date("2023-09-13T13:49:56.603043Z"),
            lastUpdated: new Date("2023-09-13T13:49:56.603043Z")
          },
          {
            id: 17,
            dateDebut: new Date("2023-01-24T09:00:00Z"),
            dateFin: new Date("2023-03-25T09:00:00Z"),
            formation: 6,
            organisation: 6,
            personnes: [],
            dateCreated: new Date("2023-09-13T13:49:56.61196Z"),
            lastUpdated: new Date("2023-09-13T13:49:56.61196Z")
          }
        ],
        ressources: [],
        theme: 11,
        dateCreated: new Date("2023-09-13T13:49:56.37085Z"),
        lastUpdated: new Date("2023-09-13T13:49:56.37085Z")
      }
    ],
    dateCreated: new Date("2023-09-13T13:49:56.205283Z"),
    lastUpdated: new Date("2023-09-13T13:49:56.205283Z")
  },
  {
    id: 12,
    idThemeParent: 2,
    nom: "IoT (Internet of Things)",
    description: "Explorez la programmation pour les objets connectés.",
    formations: [
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
            id: 19,
            dateDebut: new Date("2023-01-26T09:00:00Z"),
            dateFin: new Date("2023-03-27T09:00:00Z"),
            formation: 7,
            organisation: {
              id: 7,
              type: "centre_formation",
              nom: "MobileDev",
              description: "Devenez un expert en développement mobile.",
              addresse: "222 Rue des Applications",
              ville: "Toulouse",
              cpostal: 31000,
              dateCreated: new Date("2023-09-13T13:49:56.308289Z"),
              lastUpdated: new Date("2023-09-13T13:49:56.308289Z")
            },
            personnes: [],
            dateCreated: new Date("2023-09-13T13:49:56.632757Z"),
            lastUpdated: new Date("2023-09-13T13:49:56.632757Z")
          },
          {
            id: 20,
            dateDebut: new Date("2023-01-27T09:00:00Z"),
            dateFin: new Date("2023-03-28T09:00:00Z"),
            formation: 7,
            organisation: 7,
            personnes: [],
            dateCreated: new Date("2023-09-13T13:49:56.641836Z"),
            lastUpdated: new Date("2023-09-13T13:49:56.641836Z")
          },
          {
            id: 36,
            dateDebut: new Date("2023-09-13T13:49:56.793743Z"),
            dateFin: new Date("2023-09-13T13:49:56.793743Z"),
            formation: 7,
            organisation: null,
            personnes: [],
            dateCreated: new Date("2023-09-13T13:49:56.822406Z"),
            lastUpdated: new Date("2023-09-13T13:49:56.822406Z")
          },
          {
            id: 21,
            dateDebut: new Date("2023-01-28T09:00:00Z"),
            dateFin: new Date("2023-03-29T09:00:00Z"),
            formation: 7,
            organisation: 7,
            personnes: [],
            dateCreated: new Date("2023-09-13T13:49:56.650828Z"),
            lastUpdated: new Date("2023-09-13T13:49:56.650828Z")
          }
        ],
        ressources: [],
        theme: 12,
        dateCreated: new Date("2023-09-13T13:49:56.378851Z"),
        lastUpdated: new Date("2023-09-13T13:49:56.378851Z")
      }
    ],
    dateCreated: new Date("2023-09-13T13:49:56.210287Z"),
    lastUpdated: new Date("2023-09-13T13:49:56.210287Z")
  },
  {
    id: 13,
    idThemeParent: 2,
    nom: "Blockchain et Cryptomonnaies",
    description: "Apprenez les bases de la technologie blockchain et des cryptomonnaies.",
    formations: [
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
            formation: 8,
            organisation: {
              id: 8,
              type: "centre_formation",
              nom: "CloudAcademy",
              description: "Formation sur les technologies de cloud computing.",
              addresse: "333 Avenue du Cloud",
              ville: "Bordeaux",
              cpostal: 33000,
              dateCreated: new Date("2023-09-13T13:49:56.314328Z"),
              lastUpdated: new Date("2023-09-13T13:49:56.314328Z")
            },
            personnes: [],
            dateCreated: new Date("2023-09-13T13:49:56.668689Z"),
            lastUpdated: new Date("2023-09-13T13:49:56.668689Z")
          },
          {
            id: 22,
            dateDebut: new Date("2023-01-29T09:00:00Z"),
            dateFin: new Date("2023-03-30T09:00:00Z"),
            formation: 8,
            organisation: 8,
            personnes: [],
            dateCreated: new Date("2023-09-13T13:49:56.660711Z"),
            lastUpdated: new Date("2023-09-13T13:49:56.660711Z")
          },
          {
            id: 24,
            dateDebut: new Date("2023-01-31T09:00:00Z"),
            dateFin: new Date("2023-04-01T09:00:00Z"),
            formation: 8,
            organisation: 8,
            personnes: [],
            dateCreated: new Date("2023-09-13T13:49:56.675943Z"),
            lastUpdated: new Date("2023-09-13T13:49:56.675943Z")
          }
        ],
        ressources: [],
        theme: 13,
        dateCreated: new Date("2023-09-13T13:49:56.384851Z"),
        lastUpdated: new Date("2023-09-13T13:49:56.384851Z")
      }
    ],
    dateCreated: new Date("2023-09-13T13:49:56.215281Z"),
    lastUpdated: new Date("2023-09-13T13:49:56.215281Z")
  },
  {
    id: 14,
    idThemeParent: 3,
    nom: "Architecture Logicielle",
    description: "Comprenez la conception d'architectures logicielles robustes.",
    formations: [
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
            formation: 9,
            organisation: {
              id: 9,
              type: "centre_formation",
              nom: "SecurNet",
              description: "Sécurité informatique et hacking éthique.",
              addresse: "444 Rue de la Sécurité",
              ville: "Nice",
              cpostal: 3072,
              dateCreated: new Date("2023-09-13T13:49:56.319297Z"),
              lastUpdated: new Date("2023-09-13T13:49:56.319297Z")
            },
            personnes: [],
            dateCreated: new Date("2023-09-13T13:49:56.691021Z"),
            lastUpdated: new Date("2023-09-13T13:49:56.691021Z")
          },
          {
            id: 25,
            dateDebut: new Date("2023-02-01T09:00:00Z"),
            dateFin: new Date("2023-04-02T09:00:00Z"),
            formation: 9,
            organisation: 9,
            personnes: [],
            dateCreated: new Date("2023-09-13T13:49:56.682019Z"),
            lastUpdated: new Date("2023-09-13T13:49:56.682019Z")
          },
          {
            id: 27,
            dateDebut: new Date("2023-02-03T09:00:00Z"),
            dateFin: new Date("2023-04-04T09:00:00Z"),
            formation: 9,
            organisation: 9,
            personnes: [],
            dateCreated: new Date("2023-09-13T13:49:56.699173Z"),
            lastUpdated: new Date("2023-09-13T13:49:56.699173Z")
          }
        ],
        ressources: [],
        theme: 14,
        dateCreated: new Date("2023-09-13T13:49:56.391849Z"),
        lastUpdated: new Date("2023-09-13T13:49:56.391849Z")
      }
    ],
    dateCreated: new Date("2023-09-13T13:49:56.218444Z"),
    lastUpdated: new Date("2023-09-13T13:49:56.218444Z")
  },
  {
    id: 15,
    idThemeParent: 3,
    nom: "Interfaces Utilisateur",
    description: "Créez des interfaces conviviales pour les utilisateurs.",
    formations: [
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
            formation: 10,
            organisation: {
              id: 10,
              type: "centre_formation",
              nom: "AIInstitute",
              description: "Plongez dans l'intelligence artificielle.",
              addresse: "555 Boulevard de l'IA",
              ville: "Nantes",
              cpostal: 44000,
              dateCreated: new Date("2023-09-13T13:49:56.323297Z"),
              lastUpdated: new Date("2023-09-13T13:49:56.323297Z")
            },
            personnes: [],
            dateCreated: new Date("2023-09-13T13:49:56.713084Z"),
            lastUpdated: new Date("2023-09-13T13:49:56.713084Z")
          },
          {
            id: 30,
            dateDebut: new Date("2023-02-06T09:00:00Z"),
            dateFin: new Date("2023-04-07T09:00:00Z"),
            formation: 10,
            organisation: 10,
            personnes: [],
            dateCreated: new Date("2023-09-13T13:49:56.719083Z"),
            lastUpdated: new Date("2023-09-13T13:49:56.719083Z")
          },
          {
            id: 28,
            dateDebut: new Date("2023-02-04T09:00:00Z"),
            dateFin: new Date("2023-04-05T09:00:00Z"),
            formation: 10,
            organisation: 10,
            personnes: [],
            dateCreated: new Date("2023-09-13T13:49:56.707225Z"),
            lastUpdated: new Date("2023-09-13T13:49:56.707225Z")
          }
        ],
        ressources: [],
        theme: 15,
        dateCreated: new Date("2023-09-13T13:49:56.39785Z"),
        lastUpdated: new Date("2023-09-13T13:49:56.39785Z")
      }
    ],
    dateCreated: new Date("2023-09-13T13:49:56.221472Z"),
    lastUpdated: new Date("2023-09-13T13:49:56.221472Z")
  },
  {
    id: 16,
    idThemeParent: 3,
    nom: "Programmation Fonctionnelle",
    description: "Explorez le paradigme de la programmation fonctionnelle.",
    formations: [
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
        theme: 16,
        dateCreated: new Date("2023-09-13T13:49:56.404862Z"),
        lastUpdated: new Date("2023-09-13T13:49:56.404862Z")
      }
    ],
    dateCreated: new Date("2023-09-13T13:49:56.225381Z"),
    lastUpdated: new Date("2023-09-13T13:49:56.225381Z")
  },
  {
    id: 17,
    idThemeParent: 4,
    nom: "Sécurité Informatique",
    description: "Apprenez à protéger les systèmes informatiques.",
    formations: [
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
        theme: 17,
        dateCreated: new Date("2023-09-13T13:49:56.414831Z"),
        lastUpdated: new Date("2023-09-13T13:49:56.414831Z")
      }
    ],
    dateCreated: new Date("2023-09-13T13:49:56.228898Z"),
    lastUpdated: new Date("2023-09-13T13:49:56.228898Z")
  },
  {
    id: 18,
    idThemeParent: 4,
    nom: "DevOps",
    description: "Intégrez le développement et les opérations informatiques.",
    formations: [
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
        theme: 18,
        dateCreated: new Date("2023-09-13T13:49:56.42605Z"),
        lastUpdated: new Date("2023-09-13T13:49:56.42605Z")
      }
    ],
    dateCreated: new Date("2023-09-13T13:49:56.232954Z"),
    lastUpdated: new Date("2023-09-13T13:49:56.232954Z")
  },
  {
    id: 19,
    idThemeParent: 5,
    nom: "Cloud Computing",
    description: "Découvrez la mise en réseau et le stockage basés sur le cloud.",
    formations: [
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
        theme: 19,
        dateCreated: new Date("2023-09-13T13:49:56.433692Z"),
        lastUpdated: new Date("2023-09-13T13:49:56.433692Z")
      }
    ],
    dateCreated: new Date("2023-09-13T13:49:56.239098Z"),
    lastUpdated: new Date("2023-09-13T13:49:56.239098Z")
  },
  {
    id: 20,
    idThemeParent: 6,
    nom: "Automatisation des Tâches",
    description: "Automatisez les tâches répétitives avec la programmation.",
    formations: [
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
        theme: 20,
        dateCreated: new Date("2023-09-13T13:49:56.44074Z"),
        lastUpdated: new Date("2023-09-13T13:49:56.44074Z")
      }
    ],
    dateCreated: new Date("2023-09-13T13:49:56.244942Z"),
    lastUpdated: new Date("2023-09-13T13:49:56.244942Z")
  },
  {
    id: 21,
    idThemeParent: 7,
    nom: "IoT (Internet of Things)",
    description: "Explorez la programmation pour les objets connectés.",
    formations: [],
    dateCreated: new Date("2023-09-13T13:49:56.249941Z"),
    lastUpdated: new Date("2023-09-13T13:49:56.249941Z")
  },
  {
    id: 22,
    idThemeParent: 7,
    nom: "Interfaces Utilisateur",
    description: "Créez des interfaces conviviales pour les utilisateurs.",
    formations: [],
    dateCreated: new Date("2023-09-13T13:49:56.252944Z"),
    lastUpdated: new Date("2023-09-13T13:49:56.252944Z")
  },
  {
    id: 23,
    idThemeParent: 8,
    nom: "Programmation Fonctionnelle",
    description: "Explorez le paradigme de la programmation fonctionnelle.",
    formations: [],
    dateCreated: new Date("2023-09-13T13:49:56.255964Z"),
    lastUpdated: new Date("2023-09-13T13:49:56.255964Z")
  },
  {
    id: 24,
    idThemeParent: 11,
    nom: "Sécurité Informatique",
    description: "Apprenez à protéger les systèmes informatiques.",
    formations: [],
    dateCreated: new Date("2023-09-13T13:49:56.259313Z"),
    lastUpdated: new Date("2023-09-13T13:49:56.259313Z")
  },
  {
    id: 25,
    idThemeParent: 12,
    nom: "DevOps",
    description: "Intégrez le développement et les opérations informatiques.",
    formations: [],
    dateCreated: new Date("2023-09-13T13:49:56.263082Z"),
    lastUpdated: new Date("2023-09-13T13:49:56.263082Z")
  },
  {
    id: 26,
    idThemeParent: 10,
    nom: "Cloud Computing",
    description: "Découvrez la mise en réseau et le stockage basés sur le cloud.",
    formations: [],
    dateCreated: new Date("2023-09-13T13:49:56.266209Z"),
    lastUpdated: new Date("2023-09-13T13:49:56.266209Z")
  },
  {
    id: 27,
    idThemeParent: 10,
    nom: "Automatisation des Tâches",
    description: "Automatisez les tâches répétitives avec la programmation.",
    formations: [],
    dateCreated: new Date("2023-09-13T13:49:56.274106Z"),
    lastUpdated: new Date("2023-09-13T13:49:56.274106Z")
  }
]
*/