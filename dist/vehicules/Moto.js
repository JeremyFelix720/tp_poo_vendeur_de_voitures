"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
const Vehicule_1 = require("../Vehicule");
class Moto extends Vehicule_1.Vehicule {
    constructor(marque, modele, immatriculation, couleur, kilometrage, prix, annee_mise_en_circulation, typeVehicule = "moto") {
        super(marque, modele, immatriculation, couleur, kilometrage, prix, annee_mise_en_circulation, typeVehicule);
    }
}
exports.Moto = Moto;
