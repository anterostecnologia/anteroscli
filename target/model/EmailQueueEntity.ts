import {AnterosEntity} from "@anterostecnologia/anteros-react-mvc";
import {EmailQueue, Company, StatusEmail, EmailModel, Driver, Rider, Store} from "./types.ts";

export class EmailQueueEntity extends AnterosEntity implements EmailQueue {
    private _id!: number;
    private _dhVersion!: Date;
    private _company!: Company;
    private _status!: StatusEmail;
    private _dhSend!: Date;
    private _title!: string;
    private _name!: string;
    private _message!: any;
    private _errorSend!: string;
    private _target!: string;
    private _model!: EmailModel;
    private _targetName!: string;
    private _driver!: Driver;
    private _rider!: Rider;
    private _store!: Store;

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

    public get status(): StatusEmail {
        return this._status;
    }

    public set status(value: StatusEmail) {
        this._status = value;
    }

    public get dhSend(): Date {
        return this._dhSend;
    }

    public set dhSend(value: Date) {
        this._dhSend = value;
    }

    public get title(): string {
        return this._title;
    }

    public set title(value: string) {
        this._title = value;
    }

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get message(): any {
        return this._message;
    }

    public set message(value: any) {
        this._message = value;
    }

    public get errorSend(): string {
        return this._errorSend;
    }

    public set errorSend(value: string) {
        this._errorSend = value;
    }

    public get target(): string {
        return this._target;
    }

    public set target(value: string) {
        this._target = value;
    }

    public get model(): EmailModel {
        return this._model;
    }

    public set model(value: EmailModel) {
        this._model = value;
    }

    public get targetName(): string {
        return this._targetName;
    }

    public set targetName(value: string) {
        this._targetName = value;
    }

    public get driver(): Driver {
        return this._driver;
    }

    public set driver(value: Driver) {
        this._driver = value;
    }

    public get rider(): Rider {
        return this._rider;
    }

    public set rider(value: Rider) {
        this._rider = value;
    }

    public get store(): Store {
        return this._store;
    }

    public set store(value: Store) {
        this._store = value;
    }
}
