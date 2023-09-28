import { Garage } from "./Garage";
import { Vehicule } from "./Vehicule";
import { Voiture } from "./vehicules/Voiture";

const voiture1: Vehicule = new Voiture(
    "Citroen",
    "Xantia",
    "AP - 248 - GT",
    "champagne",
    280000,
    1500,
    1997
);

const voiture2: Vehicule = new Voiture(
    "Ford",
    "Fiesta",
    "UD - 821 - HJ",
    "verte",
    250000,
    1200,
    2002
);

const voiture3: Vehicule = new Voiture(
    "Renault",
    "Megane",
    "TB - 425 - YK",
    "verte",
    150000,
    1300,
    2007
);

const tableauVoituresGarage1 = [voiture1, voiture2, voiture3];

const garage1 = new Garage("totoAutos", tableauVoituresGarage1);

console.log("Nom du garage1 : " + garage1.nom + ".");

garage1.listerVoitures();

garage1.trouverVoitureLaMoinsChere();

garage1.trouverVoitureAvecLePlusDeKilometres()

garage1.trouverVoituresAvecLaCouleur("verte");