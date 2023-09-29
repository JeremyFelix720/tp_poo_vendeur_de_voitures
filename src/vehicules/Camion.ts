import { Vehicule } from "../Vehicule";

export class Camion extends Vehicule {
    constructor(marque: string, modele: string, immatriculation: string, couleur: string, kilometrage: number, prix: number, annee_mise_en_circulation: number, typeVehicule: string = "camion") {
        super(marque, modele, immatriculation, couleur,kilometrage, prix, annee_mise_en_circulation, typeVehicule);
    }
}