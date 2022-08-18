import {AnterosEntity} from "@anterostecnologia/anteros-react-mvc";
import {CompanyCity, Company, City} from "./types.ts";

export class CompanyCityEntity extends AnterosEntity implements CompanyCity {
    private _company!: Company;
    private _city!: City;
    private _dhVersion!: Date;
    private _dhStartActivities!: Date;

    public get company(): Company {
        return this._company;
    }

    public set company(value: Company) {
        this._company = value;
    }

    public get city(): City {
        return this._city;
    }

    public set city(value: City) {
        this._city = value;
    }

    public get dhVersion(): Date {
        return this._dhVersion;
    }

    public set dhVersion(value: Date) {
        this._dhVersion = value;
    }

    public get dhStartActivities(): Date {
        return this._dhStartActivities;
    }

    public set dhStartActivities(value: Date) {
        this._dhStartActivities = value;
    }
}
