"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicule = void 0;
class Vehicule {
    constructor(marque, modele, immatriculation, couleur, kilometrage, prix, annee_mise_en_circulation) {
        this._marque = marque;
        this._modele = modele;
        this._immatriculation = immatriculation;
        this._couleur = couleur;
        this._kilometrage = kilometrage;
        this._prix = prix;
        this._annee_mise_en_circulation = annee_mise_en_circulation;
    }
    get marque() {
        return this._marque;
    }
    set marque(value) {
        this._marque = value;
    }
    get modele() {
        return this._modele;
    }
    set modele(value) {
        this._modele = value;
    }
    get immatriculation() {
        return this._immatriculation;
    }
    set immatriculation(value) {
        this._immatriculation = value;
    }
    get couleur() {
        return this._couleur;
    }
    set couleur(value) {
        this._couleur = value;
    }
    get kilometrage() {
        return this._kilometrage;
    }
    set kilometrage(value) {
        this._kilometrage = value;
    }
    get prix() {
        return this._prix;
    }
    set prix(value) {
        this._prix = value;
    }
    get annee_mise_en_circulation() {
        return this._annee_mise_en_circulation;
    }
    set annee_mise_en_circulation(value) {
        this._annee_mise_en_circulation = value;
    }
}
exports.Vehicule = Vehicule;
