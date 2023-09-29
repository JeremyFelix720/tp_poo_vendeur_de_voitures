import { Garage, typeVehicule } from "./Garage";
import { Vehicule } from "./Vehicule";
import { Camion } from "./vehicules/Camion";
import { Moto } from "./vehicules/Moto";
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
    1800,
    2007
);

const moto1: Vehicule = new Moto(
    "Suzuki",
    "GSX-S1000GT",
    "OY - 257 - IT",
    "grise",
    98000,
    850,
    2015
);

const moto2: Vehicule = new Moto(
    "Harley-Davidson",
    "LiveWire",
    "RZ - 767 - LM",
    "noire",
    146000,
    1800,
    2022
);

const camion1: Vehicule = new Camion(
    "MAN",
    "TGS",
    "RU - 167 - JM",
    "noir",
    149000,
    15000,
    2017
);

const camion2: Vehicule = new Camion(
    "MAN",
    "TGX",
    "PS - 341 - LG",
    "gris",
    54000,
    25000,
    2019
);

const voituresGarage1:Voiture[] = [voiture1, voiture2, voiture3];
const motosGarage1:Moto[] = [moto1, moto2]
const camionsGarage1:Camion[] = [camion1, camion2];

const garage1 = new Garage("totoAutos", voituresGarage1, motosGarage1, camionsGarage1);

console.log("Nom du garage1 : " + garage1.nom + ".");

garage1.listerVehicules(typeVehicule.voiture);

garage1.trouverVehiculeLeMoinsCher(typeVehicule.voiture);

garage1.trouverVehiculeAvecLePlusDeKilometres(typeVehicule.voiture);

garage1.trouverVehiculesAvecLaCouleur("verte", typeVehicule.voiture); // çà ne fonctionne pas...