
export abstract class Vehicule {
    private _marque: string
    private _modele: string
    private _immatriculation: string
    private _couleur: string
    private _kilometrage: number
    private _prix: number
    private _annee_mise_en_circulation: number
    private _typeVehicule: string

    constructor(marque: string, modele: string, immatriculation: string, couleur: string, kilometrage: number, prix: number, annee_mise_en_circulation: number, typeVehicule: string) {
        this._marque = marque;
        this._modele = modele;
        this._immatriculation = immatriculation;
        this._couleur = couleur;
        this._kilometrage = kilometrage;
        this._prix = prix;
        this._annee_mise_en_circulation = annee_mise_en_circulation;
        this._typeVehicule = typeVehicule;
    }

    public get marque(): string {
        return this._marque
    }
    public set marque(value: string) {
        this._marque = value
    }

    public get modele(): string {
        return this._modele
    }
    public set modele(value: string) {
        this._modele = value
    }

    public get immatriculation(): string {
        return this._immatriculation
    }
    public set immatriculation(value: string) {
        this._immatriculation = value
    }

    public get couleur(): string {
        return this._couleur
    }
    public set couleur(value: string) {
        this._couleur = value
    }

    public get kilometrage(): number {
        return this._kilometrage
    }
    public set kilometrage(value: number) {
        this._kilometrage = value
    }

    public get prix(): number {
        return this._prix
    }
    public set prix(value: number) {
        this._prix = value
    }

    public get annee_mise_en_circulation(): number {
        return this._annee_mise_en_circulation
    }
    public set annee_mise_en_circulation(value: number) {
        this._annee_mise_en_circulation = value
    }

    public get typeVehicule(): string {
        return this._typeVehicule
    }
    public set typeVehicule(value: string) {
        this._typeVehicule = value
    }
}