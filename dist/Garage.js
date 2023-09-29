"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Garage = exports.typeVehicule = void 0;
var typeVehicule;
(function (typeVehicule) {
    typeVehicule["voiture"] = "voiture";
    typeVehicule["moto"] = "moto";
    typeVehicule["camion"] = "camion";
})(typeVehicule || (exports.typeVehicule = typeVehicule = {}));
class Garage {
    constructor(nom, liste_voitures, liste_motos, liste_camions) {
        this._nom = nom;
        this._liste_voitures = liste_voitures;
        this._liste_motos = liste_motos;
        this._liste_camions = liste_camions;
    }
    listerVehiculesParType(typeVehicule) {
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
    listerVehicules(typeVehicule) {
        let messageListeVoitures = "Liste des " + typeVehicule + "s du garage " + this._nom + " : ";
        this.listerVehiculesParType(typeVehicule).forEach((vehicule) => {
            messageListeVoitures += vehicule.marque + " " + vehicule.modele + " " + vehicule.couleur + " de " + vehicule.annee_mise_en_circulation + ", ";
        });
        console.log(messageListeVoitures);
        return this.listerVehiculesParType(typeVehicule);
    }
    trouverVehiculeLeMoinsCher(typeVehicule) {
        let vehiculesTriesParPrixCroissants = this.listerVehiculesParType(typeVehicule).sort((v1, v2) => (v1.prix - v2.prix));
        console.log("Véhicule de type " + typeVehicule + " le moins chère du garage " + this.nom + " : " + vehiculesTriesParPrixCroissants[0].marque + " " + vehiculesTriesParPrixCroissants[0].modele + " " + vehiculesTriesParPrixCroissants[0].couleur + " de " + vehiculesTriesParPrixCroissants[0].annee_mise_en_circulation + ".");
        return vehiculesTriesParPrixCroissants[0];
    }
    trouverVehiculeAvecLePlusDeKilometres(typeVehicule) {
        let vehiculesTriesParKilometresCroissants = this.listerVehiculesParType(typeVehicule).sort((v1, v2) => (v2.kilometrage - v1.kilometrage));
        console.log("Véhicule de type " + typeVehicule + " avec le kilomètrage le plus élevé du garage " + this.nom + " : " + vehiculesTriesParKilometresCroissants[0].marque + " " + vehiculesTriesParKilometresCroissants[0].modele + " " + vehiculesTriesParKilometresCroissants[0].couleur + " de " + vehiculesTriesParKilometresCroissants[0].annee_mise_en_circulation + ".");
        return vehiculesTriesParKilometresCroissants[0];
    }
    trouverVehiculesAvecLaCouleur(couleur, typeVehicule) {
        let listeVehiculesDeCetteCouleur = [];
        let messageListeVehiculesDeCetteCouleur = "Liste des " + typeVehicule + "s du garage " + this._nom + " de couleur " + couleur + " : ";
        this.listerVehiculesParType(typeVehicule).forEach((vehicule) => {
            if (vehicule.couleur == couleur) {
                messageListeVehiculesDeCetteCouleur += vehicule.marque + " " + vehicule.modele + ", ";
                listeVehiculesDeCetteCouleur.push(vehicule);
            }
        });
        return listeVehiculesDeCetteCouleur;
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
    get liste_motos() {
        return this._liste_motos;
    }
    set liste_motos(value) {
        this._liste_motos = value;
    }
    get liste_camions() {
        return this._liste_camions;
    }
    set liste_camions(value) {
        this._liste_camions = value;
    }
}
exports.Garage = Garage;
