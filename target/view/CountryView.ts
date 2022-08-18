import React, { Component, Fragment, ReactNode } from "react";
import { UserData, IAnterosRemoteResource } from "@anterostecnologia/anteros-react-api2";
import { AnterosEntity, AnterosEntity, ADD, AnterosView, AnterosViewProps, AnterosViewState, connectViewWithStore, EDIT, SEARCH } from "@anterostecnologia/anteros-react-mvc";
import { AnterosTableTemplate, AnterosFormTemplate, AnterosFormComponent, AnterosFormComponentProps, AnterosFormComponentState } from "@anterostecnologia/anteros-react-template2";
import { PAGE_SIZE } from "../AppConstants";
import {resolve, TYPE} from "../ioc/ioc";
import {CountryController} from "../controller/CountryController";
import {CountryEntity} from "../model/CountryEntity";
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
import { country, homeDefault } from "../route/routes";

interface CountryViewProps extends AnterosViewProps<CountryEntity, typeof CountryEntity.prototype.id> {
}

interface CountryViewState extends AnterosViewState {
}

@boundClass
class CountryView extends AnterosView<CountryEntity, typeof CountryEntity.prototype.id,  CountryViewProps, CountryViewState> {
    onCloseView() {
        this.props.history.push(homeDefault);
    }

    isCloseViewEnabled() {
        return (this.props.dataSource && this.props.dataSource.getState() === dataSourceConstants.DS_BROWSE);
    }

    getCaption() {
        return "Country"
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
         <CountryTable 
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
        return country
    }

    getComponentForm(): ReactNode {
        return ( 
        <CountryForm 
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

interface CountryTableProps<E extends AnterosEntity, TypeID> {
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
class CountryTable extends Component<CountryTableProps<CountryEntity, any>> {
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
          add: `${country}/${ADD}`, 
          edit: `${country}/${EDIT}`, 
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
            filterName="filterCountry" 
            version="v1" 
            caption={"Country"} 
            dataSource={dataSource} 
            viewName={"countryView"} 
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

interface CountryFormProps extends AnterosFormComponentProps {
    dataSource: AnterosDatasource;
    saveRoute: string;
    cancelRoute: string;
    needRefresh: boolean;
    hideTour(): any;
    history: RouteComponentProps["history"];
    setNeedRefresh: Function | undefined;
    user: UserData;
}

interface CountryFormsState extends AnterosFormComponentState {
}

@boundClass
class CountryForm extends AnterosFormComponent<CountryFormProps, CountryFormsState> {
    constructor(props: CountryFormProps) {
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

export default connectViewWithStore(resolve<CountryController>(TYPE.country_controller)())(CountryView);
