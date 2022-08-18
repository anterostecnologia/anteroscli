import {AnterosEntity} from "@anterostecnologia/anteros-react-mvc";
import {Country, Company} from "./types.ts";

export class CountryEntity extends AnterosEntity implements Country {
    private _id!: number;
    private _dhVersion!: Date;
    private _company!: Company;
    private _nameCountry!: string;
    private _ddi!: string;
    private _cdCountry!: string;

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get dhVersion(): Date {
        return this._dhVersion;
    }

    public set dhVersion(value: Date) {
        this._dhVersion = value;
    }

    public get company(): Company {
        return this._company;
    }

    public set company(value: Company) {
        this._company = value;
    }

    public get nameCountry(): string {
        return this._nameCountry;
    }

    public set nameCountry(value: string) {
        this._nameCountry = value;
    }

    public get ddi(): string {
        return this._ddi;
    }

    public set ddi(value: string) {
        this._ddi = value;
    }

    public get cdCountry(): string {
        return this._cdCountry;
    }

    public set cdCountry(value: string) {
        this._cdCountry = value;
    }
}
