import {AnterosEntity} from "@anterostecnologia/anteros-react-mvc";
import {Driver, Company, City, Zone, StatusValidationRegister} from "./types.ts";

export class DriverEntity extends AnterosEntity implements Driver {
    private _id!: number;
    private _dhVersion!: Date;
    private _company!: Company;
    private _fullName!: string;
    private _email!: string;
    private _imageProfile!: any;
    private _phone!: string;
    private _cnh!: string;
    private _cnpj!: string;
    private _cpf!: string;
    private _address!: string;
    private _addressNumber!: string;
    private _complement!: string;
    private _district!: string;
    private _city!: City;
    private _workRegion!: Zone;
    private _emergencyPhone!: string;
    private _emergencyName!: string;
    private _boAcceptTerms!: boolean;
    private _dhAcceptTerms!: Date;
    private _statusValidationRegister!: StatusValidationRegister;
    private _reasonValidation!: string;
    private _code!: string;

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

    public get fullName(): string {
        return this._fullName;
    }

    public set fullName(value: string) {
        this._fullName = value;
    }

    public get email(): string {
        return this._email;
    }

    public set email(value: string) {
        this._email = value;
    }

    public get imageProfile(): any {
        return this._imageProfile;
    }

    public set imageProfile(value: any) {
        this._imageProfile = value;
    }

    public get phone(): string {
        return this._phone;
    }

    public set phone(value: string) {
        this._phone = value;
    }

    public get cnh(): string {
        return this._cnh;
    }

    public set cnh(value: string) {
        this._cnh = value;
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

    public get workRegion(): Zone {
        return this._workRegion;
    }

    public set workRegion(value: Zone) {
        this._workRegion = value;
    }

    public get emergencyPhone(): string {
        return this._emergencyPhone;
    }

    public set emergencyPhone(value: string) {
        this._emergencyPhone = value;
    }

    public get emergencyName(): string {
        return this._emergencyName;
    }

    public set emergencyName(value: string) {
        this._emergencyName = value;
    }

    public get boAcceptTerms(): boolean {
        return this._boAcceptTerms;
    }

    public set boAcceptTerms(value: boolean) {
        this._boAcceptTerms = value;
    }

    public get dhAcceptTerms(): Date {
        return this._dhAcceptTerms;
    }

    public set dhAcceptTerms(value: Date) {
        this._dhAcceptTerms = value;
    }

    public get statusValidationRegister(): StatusValidationRegister {
        return this._statusValidationRegister;
    }

    public set statusValidationRegister(value: StatusValidationRegister) {
        this._statusValidationRegister = value;
    }

    public get reasonValidation(): string {
        return this._reasonValidation;
    }

    public set reasonValidation(value: string) {
        this._reasonValidation = value;
    }

    public get code(): string {
        return this._code;
    }

    public set code(value: string) {
        this._code = value;
    }
}
