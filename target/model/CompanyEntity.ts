import {AnterosEntity} from "@anterostecnologia/anteros-react-mvc";
import {Company, EmailProvider, EmailModel, EmailModel, EmailModel, SMSProvider, StatusCompany} from "./types.ts";

export class CompanyEntity extends AnterosEntity implements Company {
    private _id!: number;
    private _dhVersion!: Date;
    private _name!: string;
    private _surname!: string;
    private _cdCompany!: string;
    private _city!: string;
    private _urlSite!: string;
    private _linkLogo!: string;
    private _logo!: any;
    private _boUseCode!: boolean;
    private _linkExpirationTime!: number;
    private _emailProvider!: EmailProvider;
    private _idEmailProvider!: string;
    private _passwordEmailProvider!: string;
    private _emailServer!: string;
    private _portEMailServer!: string;
    private _userEmail!: string;
    private _passwordEmail!: string;
    private _dsUserEmail!: string;
    private _emailModelActivation!: EmailModel;
    private _emailModelConfirmation!: EmailModel;
    private _emailModelRecoverPassword!: EmailModel;
    private _smsProvider!: SMSProvider;
    private _userSMS!: string;
    private _passwordSMS!: string;
    private _boUseTLS!: boolean;
    private _status!: StatusCompany;
    private _cities!: CompanyCity[];

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

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get surname(): string {
        return this._surname;
    }

    public set surname(value: string) {
        this._surname = value;
    }

    public get cdCompany(): string {
        return this._cdCompany;
    }

    public set cdCompany(value: string) {
        this._cdCompany = value;
    }

    public get city(): string {
        return this._city;
    }

    public set city(value: string) {
        this._city = value;
    }

    public get urlSite(): string {
        return this._urlSite;
    }

    public set urlSite(value: string) {
        this._urlSite = value;
    }

    public get linkLogo(): string {
        return this._linkLogo;
    }

    public set linkLogo(value: string) {
        this._linkLogo = value;
    }

    public get logo(): any {
        return this._logo;
    }

    public set logo(value: any) {
        this._logo = value;
    }

    public get boUseCode(): boolean {
        return this._boUseCode;
    }

    public set boUseCode(value: boolean) {
        this._boUseCode = value;
    }

    public get linkExpirationTime(): number {
        return this._linkExpirationTime;
    }

    public set linkExpirationTime(value: number) {
        this._linkExpirationTime = value;
    }

    public get emailProvider(): EmailProvider {
        return this._emailProvider;
    }

    public set emailProvider(value: EmailProvider) {
        this._emailProvider = value;
    }

    public get idEmailProvider(): string {
        return this._idEmailProvider;
    }

    public set idEmailProvider(value: string) {
        this._idEmailProvider = value;
    }

    public get passwordEmailProvider(): string {
        return this._passwordEmailProvider;
    }

    public set passwordEmailProvider(value: string) {
        this._passwordEmailProvider = value;
    }

    public get emailServer(): string {
        return this._emailServer;
    }

    public set emailServer(value: string) {
        this._emailServer = value;
    }

    public get portEMailServer(): string {
        return this._portEMailServer;
    }

    public set portEMailServer(value: string) {
        this._portEMailServer = value;
    }

    public get userEmail(): string {
        return this._userEmail;
    }

    public set userEmail(value: string) {
        this._userEmail = value;
    }

    public get passwordEmail(): string {
        return this._passwordEmail;
    }

    public set passwordEmail(value: string) {
        this._passwordEmail = value;
    }

    public get dsUserEmail(): string {
        return this._dsUserEmail;
    }

    public set dsUserEmail(value: string) {
        this._dsUserEmail = value;
    }

    public get emailModelActivation(): EmailModel {
        return this._emailModelActivation;
    }

    public set emailModelActivation(value: EmailModel) {
        this._emailModelActivation = value;
    }

    public get emailModelConfirmation(): EmailModel {
        return this._emailModelConfirmation;
    }

    public set emailModelConfirmation(value: EmailModel) {
        this._emailModelConfirmation = value;
    }

    public get emailModelRecoverPassword(): EmailModel {
        return this._emailModelRecoverPassword;
    }

    public set emailModelRecoverPassword(value: EmailModel) {
        this._emailModelRecoverPassword = value;
    }

    public get smsProvider(): SMSProvider {
        return this._smsProvider;
    }

    public set smsProvider(value: SMSProvider) {
        this._smsProvider = value;
    }

    public get userSMS(): string {
        return this._userSMS;
    }

    public set userSMS(value: string) {
        this._userSMS = value;
    }

    public get passwordSMS(): string {
        return this._passwordSMS;
    }

    public set passwordSMS(value: string) {
        this._passwordSMS = value;
    }

    public get boUseTLS(): boolean {
        return this._boUseTLS;
    }

    public set boUseTLS(value: boolean) {
        this._boUseTLS = value;
    }

    public get status(): StatusCompany {
        return this._status;
    }

    public set status(value: StatusCompany) {
        this._status = value;
    }

    public get cities(): CompanyCity[] {
        return this._cities;
    }

    public set cities(value: CompanyCity[]) {
        this._cities = value;
    }
}
