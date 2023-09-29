"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camion = void 0;
const Vehicule_1 = require("../Vehicule");
class Camion extends Vehicule_1.Vehicule {
    constructor(marque, modele, immatriculation, couleur, kilometrage, prix, annee_mise_en_circulation, typeVehicule = "camion") {
        super(marque, modele, immatriculation, couleur, kilometrage, prix, annee_mise_en_circulation, typeVehicule);
    }
}
exports.Camion = Camion;
