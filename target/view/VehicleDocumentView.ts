import React, { Component, Fragment, ReactNode } from "react";
import { UserData, IAnterosRemoteResource } from "@anterostecnologia/anteros-react-api2";
import { AnterosEntity, AnterosEntity, ADD, AnterosView, AnterosViewProps, AnterosViewState, connectViewWithStore, EDIT, SEARCH } from "@anterostecnologia/anteros-react-mvc";
import { AnterosTableTemplate, AnterosFormTemplate, AnterosFormComponent, AnterosFormComponentProps, AnterosFormComponentState } from "@anterostecnologia/anteros-react-template2";
import { PAGE_SIZE } from "../AppConstants";
import {resolve, TYPE} from "../ioc/ioc";
import {VehicleDocumentController} from "../controller/VehicleDocumentController";
import {VehicleDocumentEntity} from "../model/VehicleDocumentEntity";
import { AnterosDataTableColumn, Columns } from "@anterostecnologia/anteros-react-table";
import { AnterosDatasource, dataSourceConstants } from "@anterostecnologia/anteros-react-datasource";
import { RouteComponentProps } from "react-router";
import { QueryFields, QueryField } from "@anterostecnologia/anteros-react-querybuilder";
import { boundClass, AnterosSweetAlert, If, Then } from "@anterostecnologia/anteros-react-core";
import { AnterosRow, AnterosCol } from "@anterostecnologia/anteros-react-layout";
import { AnterosFormGroup } from "@anterostecnologia/anteros-react-containers";
import { AnterosLabel } from "@anterostecnologia/anteros-react-label";
import { AnterosEdit } from "@anterostecnologia/anteros-react-editors";
import { AnterosEdit } from "@anterostecnologia/anteros-react-editors";
import { vehicleDocument, homeDefault } from "../route/routes";

interface VehicleDocumentViewProps extends AnterosViewProps<VehicleDocumentEntity, typeof VehicleDocumentEntity.prototype.id> {
}

interface VehicleDocumentViewState extends AnterosViewState {
}

@boundClass
class VehicleDocumentView extends AnterosView<VehicleDocumentEntity, typeof VehicleDocumentEntity.prototype.id,  VehicleDocumentViewProps, VehicleDocumentViewState> {
    onCloseView() {
        this.props.history.push(homeDefault);
    }

    isCloseViewEnabled() {
        return (this.props.dataSource && this.props.dataSource.getState() === dataSourceConstants.DS_BROWSE);
    }

    getCaption() {
        return "VehicleDocument"
    }

    getComponentSearch(): ReactNode {
        const { 
        setDatasource, 
        hideTour, 
        setFilter, 
        needRefresh, 
        dataSource, 
        user, 
        currentFilter, 
        history, 
        activeFilterIndex, 
        } = this.props; 
        return ( 
         <VehicleDocumentTable 
            user={user} 
            needRefresh={needRefresh} 
            dataSource={dataSource} 
            currentFilter={currentFilter} 
            activeFilterIndex={activeFilterIndex} 
            setDatasource={setDatasource} 
            setFilter={setFilter} 
            hideTour={hideTour} 
            remoteResource={this.controller.getResource()} 
            history={history} 
          /> 
        );
    }

    getRouteName(): string {
        return vehicleDocument
    }

    getComponentForm(): ReactNode {
        return ( 
        <VehicleDocumentForm 
          needRefresh={this.props.needRefresh} 
          hideTour={this.props.hideTour} 
          history={this.props.history} 
          setNeedRefresh={this.props.setNeedRefresh} 
          dataSource={this.props.dataSource} 
          cancelRoute={this.getRouteName()+"/"+SEARCH} 
          saveRoute={this.getRouteName()+"/"+SEARCH} 
          user={this.props.user} 
        /> 
        ); 
    }
}

interface VehicleDocumentTableProps<E extends AnterosEntity, TypeID> {
    user: UserData;
    needRefresh: boolean;
    dataSource: AnterosDatasource;
    currentFilter: any;
    activeFilterIndex: number;
    setDatasource(dataSource: AnterosDatasource): any;
    hideTour(): any;
    setFilter(currentFilter: any, activeFilterIndex: number): any;
    remoteResource: IAnterosRemoteResource<E, TypeID>;
    history: RouteComponentProps["history"];
}

@boundClass
class VehicleDocumentTable extends Component<VehicleDocumentTableProps<VehicleDocumentEntity, any>> {
    getFieldsFilter(): ReactNode {
        return ( 
        <QueryFields> 
          <QueryField 
            name="id" 
            label="ID" 
            dataType="number" 
            sortable={true} 
            quickFilter={true} 
          /> 
        </QueryFields> 
        );
    }

    getRoutes(): any {
        return { 
          add: `${vehicleDocument}/${ADD}`, 
          edit: `${vehicleDocument}/${EDIT}`, 
          close: `${homeDefault}`, 
        };
    }

    getColumns(): ReactNode {
        return ( 
         <Columns> 
           <AnterosDataTableColumn 
            dataField="id" 
            title="ID" 
            width="15%" 
            align="center" 
            titleAlign="center" 
            dataType="string" 
          /> 
         </Columns> 
         ); 
    }

    render(): ReactNode {
        const { 
          history, 
          remoteResource, 
          needRefresh, 
          user, 
          dataSource, 
          currentFilter, 
          activeFilterIndex, 
          setDatasource, 
          setFilter, 
          hideTour, 
        } = this.props; 
        return ( 
          <AnterosTableTemplate 
            defaultSortFields="id" 
            filterName="filterVehicleDocument" 
            version="v1" 
            caption={"VehicleDocument"} 
            dataSource={dataSource} 
            viewName={"vehicleDocumentView"} 
            user={user} 
            pageSize={PAGE_SIZE} 
            currentFilter={currentFilter} 
            needRefresh={needRefresh} 
            columns={this.getColumns()} 
            routes={this.getRoutes()} 
            fieldsFilter={this.getFieldsFilter()} 
            remoteResource={remoteResource} 
            setDatasource={setDatasource} 
            setFilter={setFilter} 
            hideTour={hideTour} 
            history={history} 
            activeFilterIndex={activeFilterIndex} 
          /> 
        );
    }
}

interface VehicleDocumentFormProps extends AnterosFormComponentProps {
    dataSource: AnterosDatasource;
    saveRoute: string;
    cancelRoute: string;
    needRefresh: boolean;
    hideTour(): any;
    history: RouteComponentProps["history"];
    setNeedRefresh: Function | undefined;
    user: UserData;
}

interface VehicleDocumentFormsState extends AnterosFormComponentState {
}

@boundClass
class VehicleDocumentForm extends AnterosFormComponent<VehicleDocumentFormProps, VehicleDocumentFormsState> {
    constructor(props: VehicleDocumentFormProps) {
        super(props); 
         this.state = { 
          modalOpen: undefined, 
          lookup: "", 
          alertIsOpen: false, 
          alertMessage: undefined, 
          fieldName: undefined, 
        };
    }

    onBeforeSave(): boolean {
        return true;
    }

    render(): ReactNode {
        return ( 
          <AnterosFormTemplate 
            dataSource={this.props.dataSource} 
            hideTour={this.props.hideTour} 
            history={this.props.history} 
            caption={"Cidade"} 
            formName={"FCidade"} 
            setNeedRefresh={this.props.setNeedRefresh} 
            saveRoute={this.props.saveRoute} 
            cancelRoute={this.props.cancelRoute} 
            onBeforeSave={this.onBeforeSave} 
          > 
            <Fragment> 
              <AnterosRow> 
                <AnterosCol small={12}> 
                </AnterosCol> 
              </AnterosRow> 
            </Fragment> 
          </AnterosFormTemplate> 
        ); 
    }
}

export default connectViewWithStore(resolve<VehicleDocumentController>(TYPE.vehicleDocument_controller)())(VehicleDocumentView);
