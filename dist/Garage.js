"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Garage = void 0;
class Garage {
    constructor(nom, liste_voitures) {
        this._nom = nom;
        this._liste_voitures = liste_voitures;
    }
    listerVoitures() {
        let messageListeVoitures = "Liste des voitures du garage " + this._nom + " : ";
        this.liste_voitures.forEach((voiture) => {
            messageListeVoitures += voiture.marque + " " + voiture.modele + " " + voiture.couleur + " de " + voiture.annee_mise_en_circulation + ", ";
        });
        console.log(messageListeVoitures);
    }
    trouverVoitureLaMoinsChere() {
        let tableauTrieParPrixCroissant = this.liste_voitures.sort((v1, v2) => (v1.prix - v2.prix));
        console.log("Voiture la moins chère du garage " + this.nom + " : " + tableauTrieParPrixCroissant[0].marque + " " + tableauTrieParPrixCroissant[0].modele + " " + tableauTrieParPrixCroissant[0].couleur + " de " + tableauTrieParPrixCroissant[0].annee_mise_en_circulation + ".");
        return tableauTrieParPrixCroissant[0];
    }
    trouverVoitureAvecLePlusDeKilometres() {
        let tableauTrieParKilomoletresCroissant = this.liste_voitures.sort((v1, v2) => (v2.kilometrage - v1.kilometrage));
        console.log("Voiture avec le plus de kilomètres du garage " + this.nom + " : " + tableauTrieParKilomoletresCroissant[0].marque + " " + tableauTrieParKilomoletresCroissant[0].modele + " " + tableauTrieParKilomoletresCroissant[0].couleur + " de " + tableauTrieParKilomoletresCroissant[0].annee_mise_en_circulation + ".");
        return tableauTrieParKilomoletresCroissant[0];
    }
    trouverVoituresAvecLaCouleur(couleur) {
        let tableauVoitureDeCetteCouleur = this.liste_voitures.filter((voiture) => voiture.couleur == couleur);
        let messageListeVoituresDeCetteCouleur = "Liste des voitures du garage " + this._nom + " de couleur " + couleur + " : ";
        tableauVoitureDeCetteCouleur.forEach((voiture) => {
            messageListeVoituresDeCetteCouleur += voiture.marque + " " + voiture.modele + ", ";
        });
        console.log(messageListeVoituresDeCetteCouleur);
        return tableauVoitureDeCetteCouleur;
    }
    get nom() {
        return this._nom;
    }
    set nom(value) {
        this._nom = value;
    }
    get liste_voitures() {
        return this._liste_voitures;
    }
    set liste_voitures(value) {
        this._liste_voitures = value;
    }
}
exports.Garage = Garage;
