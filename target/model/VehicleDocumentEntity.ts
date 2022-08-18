import {AnterosEntity} from "@anterostecnologia/anteros-react-mvc";
import {VehicleDocument, Company, Vehicle, StatusDocument} from "./types.ts";

export class VehicleDocumentEntity extends AnterosEntity implements VehicleDocument {
    private _id!: number;
    private _dhVersion!: Date;
    private _company!: Company;
    private _vehicle!: Vehicle;
    private _documentType!: string;
    private _fileName!: string;
    private _document!: any;
    private _dhDocument!: Date;
    private _dhStatus!: Date;
    private _statusDocument!: StatusDocument;
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

    public get vehicle(): Vehicle {
        return this._vehicle;
    }

    public set vehicle(value: Vehicle) {
        this._vehicle = value;
    }

    public get documentType(): string {
        return this._documentType;
    }

    public set documentType(value: string) {
        this._documentType = value;
    }

    public get fileName(): string {
        return this._fileName;
    }

    public set fileName(value: string) {
        this._fileName = value;
    }

    public get document(): any {
        return this._document;
    }

    public set document(value: any) {
        this._document = value;
    }

    public get dhDocument(): Date {
        return this._dhDocument;
    }

    public set dhDocument(value: Date) {
        this._dhDocument = value;
    }

    public get dhStatus(): Date {
        return this._dhStatus;
    }

    public set dhStatus(value: Date) {
        this._dhStatus = value;
    }

    public get statusDocument(): StatusDocument {
        return this._statusDocument;
    }

    public set statusDocument(value: StatusDocument) {
        this._statusDocument = value;
    }

    public get code(): string {
        return this._code;
    }

    public set code(value: string) {
        this._code = value;
    }
}
