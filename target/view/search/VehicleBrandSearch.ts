import React, { Component, Fragment, ReactNode } from "react";
import { UserData, IAnterosRemoteResource } from "@anterostecnologia/anteros-react-api2";
import { AnterosEntity, ADD, AnterosSearchView, connectSearchViewWithStore } from "@anterostecnologia/anteros-react-mvc";
import { AnterosTableTemplate, AnterosSearchTemplate } from "@anterostecnologia/anteros-react-template2";
import { PAGE_SIZE } from "../AppConstants";
import {resolve, TYPE} from "../ioc/ioc";
import {VehicleBrandController} from "../controller/VehicleBrandController";
import {VehicleBrandEntity} from "../model/VehicleBrandEntity";
import { AnterosDataTableColumn, Columns } from "@anterostecnologia/anteros-react-table";
import { AnterosDatasource, dataSourceConstants } from "@anterostecnologia/anteros-react-datasource";
import { RouteComponentProps } from "react-router";
import { QueryFields, QueryField } from "@anterostecnologia/anteros-react-querybuilder";
import { boundClass, AnterosSweetAlert, If, Then } from "@anterostecnologia/anteros-react-core";
import { AnterosRow, AnterosCol } from "@anterostecnologia/anteros-react-layout";
import { vehicleBrand, homeDefault } from "../route/routes";

export const VEHICLEBRAND_SEARCH_MODAL = "VehicleBrandSearch";

@boundClass
class VehicleBrandSearch extends AnterosSearchView<VehicleBrandEntity, typeof VehicleBrandEntity.prototype.id> {
    onCloseView() {
        this.props.history.push(homeDefault);
    }

    isCloseViewEnabled() {
        return (this.props.dataSource && this.props.dataSource.getState() === dataSourceConstants.DS_BROWSE);
    }

    getCaption() {
        return "Consulta VehicleBrand"
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
          <VehicleBrandTable 
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
            onClickOk={this.props.onClickOk} 
            onClickCancel={this.props.onClickCancel} 
          /> 
        );
    }

    getRouteName(): string {
        return vehicleBrand
    }
}

interface VehicleBrandTableProps<E extends AnterosEntity, TypeID> {
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
    onClickOk(event: any, selectedRecords: any): void;
    onClickCancel(event: any): void;
}

@boundClass
class VehicleBrandTable extends Component<VehicleBrandTableProps<VehicleBrandEntity, any>> {
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
          <AnterosSearchTemplate 
            defaultSortFields="nameVehicleBrand"  
            filterName="filterVehicleBrandSearch" 
            version="v1" 
            caption={"Consulta VehicleBrand"} 
            dataSource={dataSource} 
            viewName={"vehicleBrandSearch"} 
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
            selectedRecords={[]} 
            labelField={""} 
            onClickOk={this.props.onClickOk} 
            onClickCancel={this.props.onClickCancel} 
          /> 
        );
    }
}

export default connectSearchViewWithStore(resolve<VehicleBrandController>(TYPE.vehicleBrand_controller)())(VehicleBrandSearch);
