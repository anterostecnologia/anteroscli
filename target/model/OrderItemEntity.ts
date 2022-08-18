import {AnterosEntity} from "@anterostecnologia/anteros-react-mvc";
import {OrderItem, Order} from "./types.ts";

export class OrderItemEntity extends AnterosEntity implements OrderItem {
    private _id!: number;
    private _dhVersion!: Date;
    private _orderStore!: Order;
    private _nrSequence!: number;
    private _idItem!: string;
    private _description!: string;
    private _quantity!: number;
    private _price!: number;
    private _createdAt!: Date;
    private _updatedAt!: Date;

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

    public get orderStore(): Order {
        return this._orderStore;
    }

    public set orderStore(value: Order) {
        this._orderStore = value;
    }

    public get nrSequence(): number {
        return this._nrSequence;
    }

    public set nrSequence(value: number) {
        this._nrSequence = value;
    }

    public get idItem(): string {
        return this._idItem;
    }

    public set idItem(value: string) {
        this._idItem = value;
    }

    public get description(): string {
        return this._description;
    }

    public set description(value: string) {
        this._description = value;
    }

    public get quantity(): number {
        return this._quantity;
    }

    public set quantity(value: number) {
        this._quantity = value;
    }

    public get price(): number {
        return this._price;
    }

    public set price(value: number) {
        this._price = value;
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
}
