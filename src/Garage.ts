import { Voiture } from "./vehicules/Voiture";

export class Garage {
    private _nom: string;
    private _liste_voitures: Voiture[];

    constructor(nom: string, liste_voitures: any) {
        this._nom = nom;
        this._liste_voitures = liste_voitures;
    }

    public listerVoitures() {
        let messageListeVoitures = "Liste des voitures du garage " + this._nom + " : ";
        this.liste_voitures.forEach((voiture : Voiture) => {
            messageListeVoitures += voiture.marque + " " + voiture.modele + " " + voiture.couleur + " de " + voiture.annee_mise_en_circulation + ", ";
        });
        console.log(messageListeVoitures);
    }

    public trouverVoitureLaMoinsChere(): Voiture {
        let tableauTrieParPrixCroissant = this.liste_voitures.sort((v1:Voiture, v2:Voiture) => (v1.prix - v2.prix));
        console.log("Voiture la moins chère du garage " + this.nom + " : " + tableauTrieParPrixCroissant[0].marque + " " + tableauTrieParPrixCroissant[0].modele + " " + tableauTrieParPrixCroissant[0].couleur + " de " + tableauTrieParPrixCroissant[0].annee_mise_en_circulation + ".");
        return tableauTrieParPrixCroissant[0];
    }

    public trouverVoitureAvecLePlusDeKilometres(): Voiture {
        let tableauTrieParKilomoletresCroissant = this.liste_voitures.sort((v1:Voiture, v2:Voiture) => (v2.kilometrage - v1.kilometrage));
        console.log("Voiture avec le plus de kilomètres du garage " + this.nom + " : " + tableauTrieParKilomoletresCroissant[0].marque + " " + tableauTrieParKilomoletresCroissant[0].modele + " " + tableauTrieParKilomoletresCroissant[0].couleur + " de " + tableauTrieParKilomoletresCroissant[0].annee_mise_en_circulation + ".");
        return tableauTrieParKilomoletresCroissant[0];
    }

    public trouverVoituresAvecLaCouleur(couleur: string): Voiture {
        let tableauVoitureDeCetteCouleur = this.liste_voitures.filter((voiture: Voiture) => voiture.couleur == couleur);
        let messageListeVoituresDeCetteCouleur = "Liste des voitures du garage " + this._nom + " de couleur " + couleur + " : "
        tableauVoitureDeCetteCouleur.forEach((voiture : Voiture) => {
            messageListeVoituresDeCetteCouleur += voiture.marque + " " + voiture.modele + ", ";
        });
        console.log(messageListeVoituresDeCetteCouleur);
        return tableauVoitureDeCetteCouleur;
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
}