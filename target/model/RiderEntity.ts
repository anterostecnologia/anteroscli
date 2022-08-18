import {AnterosEntity} from "@anterostecnologia/anteros-react-mvc";
import {Rider, Company} from "./types.ts";

export class RiderEntity extends AnterosEntity implements Rider {
    private _id!: number;
    private _company!: Company;
    private _dhVersion!: Date;
    private _fullName!: string;
    private _email!: string;
    private _imageProfile!: any;
    private _phone!: string;
    private _homeAddress!: string;
    private _workAddress!: string;
    private _homeLatitude!: string;
    private _homeLongitude!: string;
    private _workLatitude!: string;
    private _workLongitude!: string;
    private _latitude!: string;
    private _longitude!: string;
    private _code!: string;
    private _createdAt!: Date;
    private _updatedAt!: Date;
    private _password!: string;

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get company(): Company {
        return this._company;
    }

    public set company(value: Company) {
        this._company = value;
    }

    public get dhVersion(): Date {
        return this._dhVersion;
    }

    public set dhVersion(value: Date) {
        this._dhVersion = value;
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

    public get homeAddress(): string {
        return this._homeAddress;
    }

    public set homeAddress(value: string) {
        this._homeAddress = value;
    }

    public get workAddress(): string {
        return this._workAddress;
    }

    public set workAddress(value: string) {
        this._workAddress = value;
    }

    public get homeLatitude(): string {
        return this._homeLatitude;
    }

    public set homeLatitude(value: string) {
        this._homeLatitude = value;
    }

    public get homeLongitude(): string {
        return this._homeLongitude;
    }

    public set homeLongitude(value: string) {
        this._homeLongitude = value;
    }

    public get workLatitude(): string {
        return this._workLatitude;
    }

    public set workLatitude(value: string) {
        this._workLatitude = value;
    }

    public get workLongitude(): string {
        return this._workLongitude;
    }

    public set workLongitude(value: string) {
        this._workLongitude = value;
    }

    public get latitude(): string {
        return this._latitude;
    }

    public set latitude(value: string) {
        this._latitude = value;
    }

    public get longitude(): string {
        return this._longitude;
    }

    public set longitude(value: string) {
        this._longitude = value;
    }

    public get code(): string {
        return this._code;
    }

    public set code(value: string) {
        this._code = value;
    }

    public get createdAt(): Date {
        return this._createdAt;
    }

    public set createdAt(value: Date) {
        this._createdAt = value;
    }

    public get updatedAt(): Date {
        return this._updatedAt;
    }

    public set updatedAt(value: Date) {
        this._updatedAt = value;
    }

    public get password(): string {
        return this._password;
    }

    public set password(value: string) {
        this._password = value;
    }
}
