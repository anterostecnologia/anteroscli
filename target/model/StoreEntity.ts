import {AnterosEntity} from "@anterostecnologia/anteros-react-mvc";
import {Store, Company, City, StatusStore} from "./types.ts";

export class StoreEntity extends AnterosEntity implements Store {
    private _id!: number;
    private _dhVersion!: Date;
    private _company!: Company;
    private _name!: string;
    private _address!: string;
    private _addressNumber!: string;
    private _complement!: string;
    private _district!: string;
    private _city!: City;
    private _cnpj!: string;
    private _cpf!: string;
    private _code!: string;
    private _zipAddress!: string;
    private _logo!: any;
    private _email!: string;
    private _password!: string;
    private _contact!: string;
    private _phone1!: string;
    private _phone2!: string;
    private _status!: StatusStore;

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

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get address(): string {
        return this._address;
    }

    public set address(value: string) {
        this._address = value;
    }

    public get addressNumber(): string {
        return this._addressNumber;
    }

    public set addressNumber(value: string) {
        this._addressNumber = value;
    }

    public get complement(): string {
        return this._complement;
    }

    public set complement(value: string) {
        this._complement = value;
    }

    public get district(): string {
        return this._district;
    }

    public set district(value: string) {
        this._district = value;
    }

    public get city(): City {
        return this._city;
    }

    public set city(value: City) {
        this._city = value;
    }

    public get cnpj(): string {
        return this._cnpj;
    }

    public set cnpj(value: string) {
        this._cnpj = value;
    }

    public get cpf(): string {
        return this._cpf;
    }

    public set cpf(value: string) {
        this._cpf = value;
    }

    public get code(): string {
        return this._code;
    }

    public set code(value: string) {
        this._code = value;
    }

    public get zipAddress(): string {
        return this._zipAddress;
    }

    public set zipAddress(value: string) {
        this._zipAddress = value;
    }

    public get logo(): any {
        return this._logo;
    }

    public set logo(value: any) {
        this._logo = value;
    }

    public get email(): string {
        return this._email;
    }

    public set email(value: string) {
        this._email = value;
    }

    public get password(): string {
        return this._password;
    }

    public set password(value: string) {
        this._password = value;
    }

    public get contact(): string {
        return this._contact;
    }

    public set contact(value: string) {
        this._contact = value;
    }

    public get phone1(): string {
        return this._phone1;
    }

    public set phone1(value: string) {
        this._phone1 = value;
    }

    public get phone2(): string {
        return this._phone2;
    }

    public set phone2(value: string) {
        this._phone2 = value;
    }

    public get status(): StatusStore {
        return this._status;
    }

    public set status(value: StatusStore) {
        this._status = value;
    }
}
