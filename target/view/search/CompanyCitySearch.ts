import React, { Component, Fragment, ReactNode } from "react";
import { UserData, IAnterosRemoteResource } from "@anterostecnologia/anteros-react-api2";
import { AnterosEntity, ADD, AnterosSearchView, connectSearchViewWithStore } from "@anterostecnologia/anteros-react-mvc";
import { AnterosTableTemplate, AnterosSearchTemplate } from "@anterostecnologia/anteros-react-template2";
import { PAGE_SIZE } from "../AppConstants";
import {resolve, TYPE} from "../ioc/ioc";
import {CompanyCityController} from "../controller/CompanyCityController";
import {CompanyCityEntity} from "../model/CompanyCityEntity";
import { AnterosDataTableColumn, Columns } from "@anterostecnologia/anteros-react-table";
import { AnterosDatasource, dataSourceConstants } from "@anterostecnologia/anteros-react-datasource";
import { RouteComponentProps } from "react-router";
import { QueryFields, QueryField } from "@anterostecnologia/anteros-react-querybuilder";
import { boundClass, AnterosSweetAlert, If, Then } from "@anterostecnologia/anteros-react-core";
import { AnterosRow, AnterosCol } from "@anterostecnologia/anteros-react-layout";
import { companyCity, homeDefault } from "../route/routes";

export const COMPANYCITY_SEARCH_MODAL = "CompanyCitySearch";

@boundClass
class CompanyCitySearch extends AnterosSearchView<CompanyCityEntity, typeof CompanyCityEntity.prototype.id> {
    onCloseView() {
        this.props.history.push(homeDefault);
    }

    isCloseViewEnabled() {
        return (this.props.dataSource && this.props.dataSource.getState() === dataSourceConstants.DS_BROWSE);
    }

    getCaption() {
        return "Consulta CompanyCity"
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
          <CompanyCityTable 
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
        return companyCity
    }
}

interface CompanyCityTableProps<E extends AnterosEntity, TypeID> {
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
class CompanyCityTable extends Component<CompanyCityTableProps<CompanyCityEntity, any>> {
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
            defaultSortFields="nameCompanyCity"  
            filterName="filterCompanyCitySearch" 
            version="v1" 
            caption={"Consulta CompanyCity"} 
            dataSource={dataSource} 
            viewName={"companyCitySearch"} 
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

export default connectSearchViewWithStore(resolve<CompanyCityController>(TYPE.companyCity_controller)())(CompanyCitySearch);
