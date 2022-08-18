import {AnterosEntity} from "@anterostecnologia/anteros-react-mvc";
import {EmailModel} from "./types.ts";

export class EmailModelEntity extends AnterosEntity implements EmailModel {
    private _id!: number;
    private _dhVersion!: Date;
    private _description!: string;
    private _keyword!: string;
    private _content!: any;
    private _preview!: any;

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

    public get description(): string {
        return this._description;
    }

    public set description(value: string) {
        this._description = value;
    }

    public get keyword(): string {
        return this._keyword;
    }

    public set keyword(value: string) {
        this._keyword = value;
    }

    public get content(): any {
        return this._content;
    }

    public set content(value: any) {
        this._content = value;
    }

    public get preview(): any {
        return this._preview;
    }

    public set preview(value: any) {
        this._preview = value;
    }
}
