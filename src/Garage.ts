import { Vehicule } from "./Vehicule";
import { Voiture } from "./vehicules/Voiture";
import { Moto } from "./vehicules/Moto";
import { Camion } from "./vehicules/Camion";

export enum typeVehicule {
    voiture = "voiture",
    moto = "moto",
    camion = "camion"
}

export class Garage {
    private _nom: string;
    private _liste_voitures: Voiture[];
    private _liste_motos: Moto[];
    private _liste_camions: Camion[];

    constructor(nom: string, liste_voitures: Voiture[], liste_motos: Moto[], liste_camions: Camion[]) {
        this._nom = nom;
        this._liste_voitures = liste_voitures;
        this._liste_motos = liste_motos;
        this._liste_camions = liste_camions;
    }

    public listerVehiculesParType(typeVehicule: typeVehicule): any {
        switch (typeVehicule) {
            case "voiture":
                return this.liste_voitures;
            case "moto":
                return this.liste_motos;
            case "camion":
                return this.liste_camions;
            default:
                console.log("Le type de véhicule indiqué n'existe pas dans ce garage.");
                break;
        }
    }

    public listerVehicules(typeVehicule: typeVehicule): Vehicule[] {

        let messageListeVoitures = "Liste des " + typeVehicule + "s du garage " + this._nom + " : ";

        this.listerVehiculesParType(typeVehicule).forEach((vehicule : Vehicule) => {
            messageListeVoitures += vehicule.marque + " " + vehicule.modele + " " + vehicule.couleur + " de " + vehicule.annee_mise_en_circulation + ", ";
        });

        console.log(messageListeVoitures);

        return this.listerVehiculesParType(typeVehicule);
    }

    public trouverVehiculeLeMoinsCher(typeVehicule: typeVehicule): Vehicule {

        let vehiculesTriesParPrixCroissants = this.listerVehiculesParType(typeVehicule).sort((v1:Vehicule, v2:Vehicule) => (v1.prix - v2.prix));

        console.log("Véhicule de type " + typeVehicule + " le moins chère du garage " + this.nom + " : " + vehiculesTriesParPrixCroissants[0].marque + " " + vehiculesTriesParPrixCroissants[0].modele + " " + vehiculesTriesParPrixCroissants[0].couleur + " de " + vehiculesTriesParPrixCroissants[0].annee_mise_en_circulation + ".");

        return vehiculesTriesParPrixCroissants[0];
    }

    public trouverVehiculeAvecLePlusDeKilometres(typeVehicule: typeVehicule): Vehicule {

        let vehiculesTriesParKilometresCroissants = this.listerVehiculesParType(typeVehicule).sort((v1:Vehicule, v2:Vehicule) => (v2.kilometrage - v1.kilometrage));

        console.log("Véhicule de type " + typeVehicule + " avec le kilomètrage le plus élevé du garage " + this.nom + " : " + vehiculesTriesParKilometresCroissants[0].marque + " " + vehiculesTriesParKilometresCroissants[0].modele + " " + vehiculesTriesParKilometresCroissants[0].couleur + " de " + vehiculesTriesParKilometresCroissants[0].annee_mise_en_circulation + ".");
        
        return vehiculesTriesParKilometresCroissants[0];
    }
   
    public trouverVehiculesAvecLaCouleur(couleur: string,typeVehicule: typeVehicule): Vehicule[] {

        let listeVehiculesDeCetteCouleur: Vehicule[] = [];

        let messageListeVehiculesDeCetteCouleur = "Liste des " + typeVehicule + "s du garage " + this._nom + " de couleur " + couleur + " : "
        this.listerVehiculesParType(typeVehicule).forEach((vehicule : Vehicule) => {
            if(vehicule.couleur == couleur) {
                messageListeVehiculesDeCetteCouleur += vehicule.marque + " " + vehicule.modele + ", ";
                listeVehiculesDeCetteCouleur.push(vehicule);
            }

        });

        return listeVehiculesDeCetteCouleur;
    }

    public get nom(): string {
        return this._nom;
    }
    public set nom(value: string) {
        this._nom = value;
    }

    public get liste_voitures(): any {
        return this._liste_voitures;
    }
    public set liste_voitures(value: any) {
        this._liste_voitures = value;
    }

    public get liste_motos(): Vehicule[] {
        return this._liste_motos;
    }
    public set liste_motos(value: Vehicule[]) {
        this._liste_motos = value;
    }

    public get liste_camions(): Vehicule[] {
        return this._liste_camions;
    }
    public set liste_camions(value: Vehicule[]) {
        this._liste_camions = value;
    }
}