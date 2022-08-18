import {AnterosEntity} from "@anterostecnologia/anteros-react-mvc";
import {City, Company, State} from "./types.ts";

export class CityEntity extends AnterosEntity implements City {
    private _id!: number;
    private _dhVersion!: Date;
    private _company!: Company;
    private _cdCity!: string;
    private _nameCity!: string;
    private _state!: State;

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

    public get cdCity(): string {
        return this._cdCity;
    }

    public set cdCity(value: string) {
        this._cdCity = value;
    }

    public get nameCity(): string {
        return this._nameCity;
    }

    public set nameCity(value: string) {
        this._nameCity = value;
    }

    public get state(): State {
        return this._state;
    }

    public set state(value: State) {
        this._state = value;
    }
}
