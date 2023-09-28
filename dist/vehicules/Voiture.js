"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Voiture = void 0;
const Vehicule_1 = require("../Vehicule");
class Voiture extends Vehicule_1.Vehicule {
    constructor(marque, modele, immatriculation, couleur, kilometrage, prix, annee_mise_en_circulation) {
        super(marque, modele, immatriculation, couleur, kilometrage, prix, annee_mise_en_circulation);
    }
}
exports.Voiture = Voiture;
