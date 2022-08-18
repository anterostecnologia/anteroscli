/* eslint-disable no-template-curly-in-string */
import {Command, Flags} from '@oclif/core'
import color from '@oclif/color'
import {InterfaceDeclaration, Project, EnumDeclaration, Scope, VariableDeclarationKind, SourceFile} from 'ts-morph'


const ENTITY = 'entity'

const RESOURCE = 'resource'

const CONTROLLER = 'controller'

const VIEW = 'view'

const CLIENT = color.green('anteros-cli: ')

const ERROR = color.red('ERRO')

const SRC_TARGET = 'target'

const SRC_ENTITY = `${SRC_TARGET}/model`

const SRC_VIEW = `${SRC_TARGET}/view`

const SRC_RESOURCE = `${SRC_TARGET}/resource`

const SRC_CONTROLLER = `${SRC_TARGET}/controller`

export default class Make extends Command {
  static description = 'Cria novas classes'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    version: Flags.version({char: 'v'}),
    help: Flags.help({char: 'h'}),
    interface: Flags.string({char: 'i', description: 'Interface/type base entidade'}),
    target: Flags.string({char: 't', description: 'Entidade a ser criada'}),
    override: Flags.boolean({char: 'o', description: 'Sobrescrever se já existir'}),
  }

  static args = [{name: 'type'}]

  makeController(base : string, override : boolean) : void {
    const project = new Project()
    project.addSourceFilesAtPaths('/Users/edsonmartins/projetos_react/cade-web/src/model/types.ts')
    const typeFile = project.getSourceFileOrThrow('types.ts')
    const interfaces = typeFile.getInterfaces()

    console.log(`${CLIENT} criando controladores... ${base}`)

    for (const ift of interfaces) {
      if (base === 'all' || ift.getName() === base) {
        console.log(`${CLIENT} criando controlador... ${ift.getName()}`)
        const fileExists = project.getSourceFile(`${SRC_CONTROLLER}/${ift.getName()}Controller.ts`)
        if (fileExists && override) {
          fileExists.deleteImmediately()
        }

        if (fileExists && !override) {
          continue
        }

        const sourceEntity = project.createSourceFile(`${SRC_CONTROLLER}/${ift.getName()}Controller.ts`, '', {overwrite: true})

        sourceEntity.addImportDeclaration({
          defaultImport: '{IAnterosRemoteResource}',
          moduleSpecifier: '@anterostecnologia/anteros-react-api2',
        })

        sourceEntity.addImportDeclaration({
          defaultImport: '{AnterosController}',
          moduleSpecifier: '@anterostecnologia/anteros-react-mvc',
        })

        sourceEntity.addImportDeclaration({
          defaultImport: '{resolve, TYPE}',
          moduleSpecifier: '../ioc/ioc',
        })

        sourceEntity.addImportDeclaration({
          defaultImport: `{${ift.getName()}Entity}`,
          moduleSpecifier: `../model/${ift.getName()}Entity`,
        })

        sourceEntity.addImportDeclaration({
          defaultImport: `{${ift.getName()}Resource}`,
          moduleSpecifier: `../resource/${ift.getName()}Resource`,
        })

        sourceEntity.addImportDeclaration({
          defaultImport: '{AUTHENTICATION_REDUCER, LAYOUT_REDUCER}',
          moduleSpecifier: '../store/store',
        })

        const lName = ift.getName().charAt(0).toLowerCase() + ift.getName().slice(1)

        const resourceClass = sourceEntity.addClass({
          name: `${ift.getName()}Controller`,
        })

        resourceClass.setIsExported(true)
        resourceClass.setExtends(`AnterosController<${ift.getName()}Entity, typeof ${ift.getName()}Entity.prototype.id>`)

        const getResource = resourceClass.addMethod({
          name: 'getResource',
          scope: Scope.Public,
          returnType: `IAnterosRemoteResource<${ift.getName()}Entity, any>`,
        })

        getResource.setBodyText(`return resolve<${ift.getName()}Resource>(TYPE.${lName}_resource)();`)

        const getAuthenticationReducerName = resourceClass.addMethod({
          name: 'getAuthenticationReducerName',
          scope: Scope.Public,
          returnType: 'string',
        })

        getAuthenticationReducerName.setBodyText('return AUTHENTICATION_REDUCER;')

        const getLayoutReducerName = resourceClass.addMethod({
          name: 'getLayoutReducerName',
          scope: Scope.Public,
          returnType: 'string',
        })

        getLayoutReducerName.setBodyText('return LAYOUT_REDUCER;')

        sourceEntity.save()
      }
    }
  }

  makeResource(base : string, override: boolean) : void {
    const project = new Project()
    project.addSourceFilesAtPaths('/Users/edsonmartins/projetos_react/cade-web/src/model/types.ts')
    const typeFile = project.getSourceFileOrThrow('types.ts')
    const interfaces = typeFile.getInterfaces()

    console.log(`${CLIENT} criando recursos... ${base}`)

    for (const ift of interfaces) {
      if (base === 'all' || ift.getName() === base) {
        console.log(`${CLIENT} criando recurso... ${ift.getName()}`)
        const fileExists = project.getSourceFile(`${SRC_RESOURCE}/${ift.getName()}Resource.ts`)
        if (fileExists && override) {
          fileExists.deleteImmediately()
        }

        if (fileExists && !override) {
          continue
        }

        const sourceEntity = project.createSourceFile(`${SRC_RESOURCE}/${ift.getName()}Resource.ts`, '', {overwrite: true})
        sourceEntity.addImportDeclaration({
          defaultImport: '{version}',
          moduleSpecifier: './Version',
        })

        sourceEntity.addImportDeclaration({
          defaultImport: '{makeDefaultReduxObject, initialState, createReducer, AnterosRemoteResource, IAnterosApiClient, IAnterosUserService}',
          moduleSpecifier: '@anterostecnologia/anteros-react-api2',
        })

        sourceEntity.addImportDeclaration({
          defaultImport: '{resolve, TYPE}',
          moduleSpecifier: '../ioc/ioc',
        })

        sourceEntity.addImportDeclaration({
          defaultImport: `{${ift.getName()}Entity}`,
          moduleSpecifier: `../model/${ift.getName()}Entity`,
        })

        const lName = ift.getName().charAt(0).toLowerCase() + ift.getName().slice(1)

        sourceEntity.addVariableStatement({
          isExported: true,
          declarationKind: VariableDeclarationKind.Const,
          declarations: [{
            name: ift.getName().toUpperCase(),
            initializer: `"${lName}"`,
          }],

        })

        sourceEntity.addVariableStatement({
          isExported: true,
          declarationKind: VariableDeclarationKind.Const,
          declarations: [{
            name: `${ift.getName().toUpperCase()}_SEARCH`,
            initializer: `"${ift.getName().toUpperCase()}_SEARCH"`,
          }],

        })

        sourceEntity.addVariableStatement({
          declarationKind: VariableDeclarationKind.Const,
          declarations: [{
            name: lName + 'ReducerDef',
            initializer: `makeDefaultReduxObject(${ift.getName().toUpperCase()})`,
          }],
        })

        sourceEntity.addVariableStatement({
          declarationKind: VariableDeclarationKind.Const,
          declarations: [{
            name: lName + 'SearchReducerDef',
            initializer: `makeDefaultReduxObject(${ift.getName().toUpperCase()}_SEARCH)`,
          }],
        })

        const resourceClass = sourceEntity.addClass({
          name: `${ift.getName()}Resource`,
        })

        resourceClass.setIsExported(true)
        resourceClass.setExtends(`AnterosRemoteResource<${ift.getName()}Entity, typeof ${ift.getName()}Entity.prototype.id>`)
        const constResource = resourceClass.addConstructor()

        constResource.setBodyText('super( ' +
          ' ' + ift.getName().toUpperCase() + ',' +
          ' `${version}/' + lName + '/}`, ' +
          ' resolve<IAnterosApiClient>(TYPE.api_client)(), ' +
          ' resolve<IAnterosUserService>(TYPE.user_service)(), ' +
          ' undefined, ' +
          ' ' + ift.getName().toUpperCase() + '_SEARCH);',
        )

        sourceEntity.addVariableStatement({
          isExported: true,
          declarationKind: VariableDeclarationKind.Const,
          declarations: [{
            name: lName,
            initializer: 'createReducer(initialState, ' + lName + 'ReducerDef)',
          }],
        })

        sourceEntity.addVariableStatement({
          isExported: true,
          declarationKind: VariableDeclarationKind.Const,
          declarations: [{
            name: lName + 'Search',
            initializer: 'createReducer(initialState, ' + lName + 'SearchReducerDef)',
          }],
        })

        sourceEntity.save()
      }
    }

    this.makeResourceLink(project)

    this.makeVersion(project)
  }

  private makeVersion(project: Project) {
    console.log(`${CLIENT} criando arquivo de versão...`)
    const fileExists = project.getSourceFile(`${SRC_RESOURCE}/Version.ts`)
    if (!fileExists) {
      const sourceVersion = project.createSourceFile(`${SRC_RESOURCE}/Version.ts`, '', {overwrite: true})
      sourceVersion.addVariableStatement({
        isExported: true,
        declarationKind: VariableDeclarationKind.Const,
        declarations: [{
          name: 'version',
          initializer: '"v1"',
        }],
      })

      sourceVersion.save()
    }
  }

  private makeResourceLink(project: Project) {
    console.log(`${CLIENT} linkando recursos na store...`)
    const fileExists = project.getSourceFile(`${SRC_RESOURCE}/Resource.ts`)
    if (fileExists) {
      fileExists.deleteImmediately()
    }

    const resources = project.createSourceFile(`${SRC_RESOURCE}/Resource.ts`, '', {overwrite: true})

    project.addSourceFilesAtPaths(SRC_RESOURCE + '/**/*.ts')
    const sourceFiles = project.getSourceFiles()
    let resourceNames = ''
    let appendDelimiter = false
    for (const source of sourceFiles) {
      const name = source.getBaseName()
      if (name.endsWith('Resource.ts')) {
        const classes = source.getClasses()
        if (classes && classes.length > 0) {
          let className = classes[0].getName()
          className = className?.replace('Resource', '')
          className = className!.charAt(0).toLowerCase() + className!.slice(1)
          if (appendDelimiter) {
            resourceNames += ',\n'
          }

          appendDelimiter = true
          resourceNames += className + ', ' + className + 'Search'
          console.log(`${CLIENT} linkando recurso na store... ${className}`)
          resources.addImportDeclaration({
            defaultImport: `{ ${className}, ${className}Search }`,
            moduleSpecifier: `./${classes[0].getName()}`,
          })
        }
      }
    }

    const fResources = resources.addFunction({
      name: 'getAllReducersFromResources',
      isExported: true,
    })

    fResources.setBodyText('return {' + resourceNames + ' }')

    resources.save()
  }

  makeView(base: string, override: boolean) : void {
    const project = new Project()
    project.addSourceFilesAtPaths('/Users/edsonmartins/projetos_react/cade-web/src/model/types.ts')
    const typeFile = project.getSourceFileOrThrow('types.ts')
    const interfaces = typeFile.getInterfaces()
    console.log(`${CLIENT} criando visões... ${base}`)

    for (const ift of interfaces) {
      if (base === 'all' || ift.getName() === base) {
        console.log(`${CLIENT} criando visão... ${ift.getName()}`)
        const fileExists = project.getSourceFile(`${SRC_VIEW}/${ift.getName()}View.ts`)
        if (fileExists && override) {
          fileExists.deleteImmediately()
        }

        if (fileExists && !override) {
          continue
        }

        const lName = ift.getName().charAt(0).toLowerCase() + ift.getName().slice(1)

        const sourceEntity = project.createSourceFile(`${SRC_VIEW}/${ift.getName()}View.ts`, '', {overwrite: true})
        this.addViewImports(sourceEntity, ift, lName)

        const viewProps = sourceEntity.addInterface({
          name: `${ift.getName()}ViewProps`,
        })

        viewProps.addExtends(`AnterosViewProps<${ift.getName()}Entity, typeof ${ift.getName()}Entity.prototype.id>`)

        const viewState = sourceEntity.addInterface({
          name: `${ift.getName()}ViewState`,
        })

        viewState.addExtends('AnterosViewState')

        const viewClass = sourceEntity.addClass({
          name: `${ift.getName()}View`,
        })

        viewClass.setExtends(`AnterosView<${ift.getName()}Entity, typeof ${ift.getName()}Entity.prototype.id,  ${ift.getName()}ViewProps, ${ift.getName()}ViewState>`)

        viewClass.addDecorator({
          name: 'boundClass',
        })
        const onCloseView = viewClass.addMethod({
          name: 'onCloseView',
        })

        onCloseView.setBodyText('this.props.history.push(homeDefault);')

        const isCloseViewEnabled = viewClass.addMethod({
          name: 'isCloseViewEnabled',
        })

        isCloseViewEnabled.setBodyText('return (this.props.dataSource && this.props.dataSource.getState() === dataSourceConstants.DS_BROWSE);')

        const getCaption = viewClass.addMethod({
          name: 'getCaption',
        })

        getCaption.setBodyText(`return "${ift.getName()}"`)

        const getComponentSearch = viewClass.addMethod({
          name: 'getComponentSearch',
        })

        getComponentSearch.setReturnType('ReactNode')
        getComponentSearch.setBodyText('const { \n' +
          'setDatasource, \n' +
          'hideTour, \n' +
          'setFilter, \n' +
          'needRefresh, \n' +
          'dataSource, \n' +
          'user, \n' +
          'currentFilter, \n' +
          'history, \n' +
          'activeFilterIndex, \n' +
        '} = this.props; \n' +
        'return ( \n' +
        ` <${ift.getName()}Table \n` +
        '    user={user} \n' +
        '    needRefresh={needRefresh} \n' +
        '    dataSource={dataSource} \n' +
        '    currentFilter={currentFilter} \n' +
        '    activeFilterIndex={activeFilterIndex} \n' +
        '    setDatasource={setDatasource} \n' +
        '    setFilter={setFilter} \n' +
        '    hideTour={hideTour} \n' +
        '    remoteResource={this.controller.getResource()} \n' +
        '    history={history} \n' +
        '  /> \n' +
        ');')

        const getRouteName = viewClass.addMethod({
          name: 'getRouteName',
        })
        getRouteName.setReturnType('string')
        getRouteName.setBodyText(`return ${lName}`)

        const getComponentForm = viewClass.addMethod({
          name: 'getComponentForm',
        })
        getComponentForm.setReturnType('ReactNode')
        getComponentForm.setBodyText('return ( \n' +
          `<${ift.getName()}Form \n` +
          '  needRefresh={this.props.needRefresh} \n' +
          '  hideTour={this.props.hideTour} \n' +
          '  history={this.props.history} \n' +
          '  setNeedRefresh={this.props.setNeedRefresh} \n' +
          '  dataSource={this.props.dataSource} \n' +
          '  cancelRoute={this.getRouteName()+"/"+SEARCH} \n' +
          '  saveRoute={this.getRouteName()+"/"+SEARCH} \n' +
          '  user={this.props.user} \n' +
          '/> \n' +
        '); \n')

        this.makeViewTable(sourceEntity, ift, lName)
        this.makeFormTable(sourceEntity, ift, lName)

        sourceEntity.addExportAssignment({
          isExportEquals: false,
          expression: `connectViewWithStore(resolve<${ift.getName()}Controller>(TYPE.${lName}_controller)())(${ift.getName()}View)`,
        })

        sourceEntity.save()
      }
    }
  }

  private addViewImports(sourceEntity : SourceFile, ift: InterfaceDeclaration, lName: string) {
    sourceEntity.addImportDeclaration({
      defaultImport: 'React, { Component, Fragment, ReactNode }',
      moduleSpecifier: 'react',
    })

    sourceEntity.addImportDeclaration({
      defaultImport: '{ UserData, IAnterosRemoteResource }',
      moduleSpecifier: '@anterostecnologia/anteros-react-api2',
    })

    sourceEntity.addImportDeclaration({
      defaultImport: '{ AnterosEntity, AnterosEntity, ADD, AnterosView, AnterosViewProps, AnterosViewState, connectViewWithStore, EDIT, SEARCH }',
      moduleSpecifier: '@anterostecnologia/anteros-react-mvc',
    })

    sourceEntity.addImportDeclaration({
      defaultImport: '{ AnterosTableTemplate, AnterosFormTemplate, AnterosFormComponent, AnterosFormComponentProps, AnterosFormComponentState }',
      moduleSpecifier: '@anterostecnologia/anteros-react-template2',
    })

    sourceEntity.addImportDeclaration({
      defaultImport: '{ PAGE_SIZE }',
      moduleSpecifier: '../AppConstants',
    })

    sourceEntity.addImportDeclaration({
      defaultImport: '{resolve, TYPE}',
      moduleSpecifier: '../ioc/ioc',
    })

    sourceEntity.addImportDeclaration({
      defaultImport: `{${ift.getName()}Controller}`,
      moduleSpecifier: `../controller/${ift.getName()}Controller`,
    })

    sourceEntity.addImportDeclaration({
      defaultImport: `{${ift.getName()}Entity}`,
      moduleSpecifier: `../model/${ift.getName()}Entity`,
    })

    sourceEntity.addImportDeclaration({
      defaultImport: '{ AnterosDataTableColumn, Columns }',
      moduleSpecifier: '@anterostecnologia/anteros-react-table',
    })

    sourceEntity.addImportDeclaration({
      defaultImport: '{ AnterosDatasource, dataSourceConstants }',
      moduleSpecifier: '@anterostecnologia/anteros-react-datasource',
    })

    sourceEntity.addImportDeclaration({
      defaultImport: '{ RouteComponentProps }',
      moduleSpecifier: 'react-router',
    })

    sourceEntity.addImportDeclaration({
      defaultImport: '{ QueryFields, QueryField }',
      moduleSpecifier: '@anterostecnologia/anteros-react-querybuilder',
    })

    sourceEntity.addImportDeclaration({
      defaultImport: '{ boundClass, AnterosSweetAlert, If, Then }',
      moduleSpecifier: '@anterostecnologia/anteros-react-core',
    })

    sourceEntity.addImportDeclaration({
      defaultImport: '{ AnterosRow, AnterosCol }',
      moduleSpecifier: '@anterostecnologia/anteros-react-layout',
    })

    sourceEntity.addImportDeclaration({
      defaultImport: '{ AnterosFormGroup }',
      moduleSpecifier: '@anterostecnologia/anteros-react-containers',
    })

    sourceEntity.addImportDeclaration({
      defaultImport: '{ AnterosLabel }',
      moduleSpecifier: '@anterostecnologia/anteros-react-label',
    })

    sourceEntity.addImportDeclaration({
      defaultImport: '{ AnterosEdit }',
      moduleSpecifier: '@anterostecnologia/anteros-react-editors',
    })

    sourceEntity.addImportDeclaration({
      defaultImport: '{ AnterosEdit }',
      moduleSpecifier: '@anterostecnologia/anteros-react-editors',
    })

    sourceEntity.addImportDeclaration({
      defaultImport: `{ ${lName}, homeDefault }`,
      moduleSpecifier: '../route/routes',
    })
  }

  private makeViewTable(sourceEntity : SourceFile, ift: InterfaceDeclaration, lName: string) {
    const tableProps = sourceEntity.addInterface({
      name: `${ift.getName()}TableProps<E extends AnterosEntity, TypeID>`,
    })

    tableProps.addProperty({
      name: 'user',
      type: 'UserData',
    })

    tableProps.addProperty({
      name: 'needRefresh',
      type: 'boolean',
    })

    tableProps.addProperty({
      name: 'dataSource',
      type: 'AnterosDatasource',
    })

    tableProps.addProperty({
      name: 'currentFilter',
      type: 'any',
    })

    tableProps.addProperty({
      name: 'activeFilterIndex',
      type: 'number',
    })

    tableProps.addMethod({
      name: 'setDatasource',
      parameters: [
        {
          name: 'dataSource',
          type: 'AnterosDatasource',
        },
      ],
      returnType: 'any',
    })

    tableProps.addMethod({
      name: 'hideTour',
      returnType: 'any',
    })

    tableProps.addMethod({
      name: 'setFilter',
      parameters: [
        {
          name: 'currentFilter',
          type: 'any',
        },
        {
          name: 'activeFilterIndex',
          type: 'number',
        },
      ],
      returnType: 'any',
    })

    tableProps.addProperty({
      name: 'remoteResource',
      type: 'IAnterosRemoteResource<E, TypeID>',
    })

    tableProps.addProperty({
      name: 'history',
      type: 'RouteComponentProps["history"]',
    })

    const tableClass = sourceEntity.addClass({
      name: `${ift.getName()}Table`,
    })

    tableClass.setExtends(`Component<${ift.getName()}TableProps<${ift.getName()}Entity, any>>`)

    tableClass.addDecorator({
      name: 'boundClass',
    })

    const getFieldsFilter = tableClass.addMethod({
      name: 'getFieldsFilter',
      returnType: 'ReactNode',
    })

    getFieldsFilter.setBodyText('return ( \n' +
      '<QueryFields> \n' +
      '  <QueryField \n' +
      '    name="id" \n' +
      '    label="ID" \n' +
      '    dataType="number" \n' +
      '    sortable={true} \n' +
      '    quickFilter={true} \n' +
      '  /> \n' +
      '</QueryFields> \n' +
      ');')

    const getRoutes = tableClass.addMethod({
      name: 'getRoutes',
      returnType: 'any',
    })

    getRoutes.setBodyText('return { \n' +
      '  add: `${' + lName + '}/${ADD}`, \n' +
      '  edit: `${' + lName + '}/${EDIT}`, \n' +
      '  close: `${homeDefault}`, \n' +
      '};')

    const getColumns = tableClass.addMethod({
      name: 'getColumns',
      returnType: 'ReactNode',
    })

    getColumns.setBodyText('return ( \n' +
      ' <Columns> \n' +
      '   <AnterosDataTableColumn \n' +
      '    dataField="id" \n' +
      '    title="ID" \n' +
      '    width="15%" \n' +
      '    align="center" \n' +
      '    titleAlign="center" \n' +
      '    dataType="string" \n' +
      '  /> \n' +
      ' </Columns> \n' +
      ' ); ')

    const renderTable = tableClass.addMethod({
      name: 'render',
      returnType: 'ReactNode',
    })

    renderTable.setBodyText('const { \n' +
      '  history, \n' +
      '  remoteResource, \n' +
      '  needRefresh, \n' +
      '  user, \n' +
      '  dataSource, \n' +
      '  currentFilter, \n' +
      '  activeFilterIndex, \n' +
      '  setDatasource, \n' +
      '  setFilter, \n' +
      '  hideTour, \n' +
      '} = this.props; \n' +
      'return ( \n' +
      '  <AnterosTableTemplate \n' +
      '    defaultSortFields="id" \n' +
      `    filterName="filter${ift.getName()}" \n` +
      '    version="v1" \n' +
      `    caption={"${ift.getName()}"} \n` +
      '    dataSource={dataSource} \n' +
      `    viewName={"${lName}View"} \n` +
      '    user={user} \n' +
      '    pageSize={PAGE_SIZE} \n' +
      '    currentFilter={currentFilter} \n' +
      '    needRefresh={needRefresh} \n' +
      '    columns={this.getColumns()} \n' +
      '    routes={this.getRoutes()} \n' +
      '    fieldsFilter={this.getFieldsFilter()} \n' +
      '    remoteResource={remoteResource} \n' +
      '    setDatasource={setDatasource} \n' +
      '    setFilter={setFilter} \n' +
      '    hideTour={hideTour} \n' +
      '    history={history} \n' +
      '    activeFilterIndex={activeFilterIndex} \n' +
      '  /> \n' +
      ');')
  }

  private makeFormTable(sourceEntity : SourceFile, ift: InterfaceDeclaration, lName: string) {
    const formProps = sourceEntity.addInterface({
      name: `${ift.getName()}FormProps`,
    })

    formProps.addExtends('AnterosFormComponentProps')

    formProps.addProperty({
      name: 'dataSource',
      type: 'AnterosDatasource',
    })

    formProps.addProperty({
      name: 'saveRoute',
      type: 'string',
    })

    formProps.addProperty({
      name: 'cancelRoute',
      type: 'string',
    })

    formProps.addProperty({
      name: 'needRefresh',
      type: 'boolean',
    })

    formProps.addMethod({
      name: 'hideTour',
      returnType: 'any',
    })

    formProps.addProperty({
      name: 'history',
      type: 'RouteComponentProps["history"]',
    })

    formProps.addProperty({
      name: 'setNeedRefresh',
      type: 'Function | undefined',
    })

    formProps.addProperty({
      name: 'user',
      type: 'UserData',
    })

    const formState = sourceEntity.addInterface({
      name: `${ift.getName()}FormsState`,
    })

    formState.addExtends('AnterosFormComponentState')

    const formClass = sourceEntity.addClass({
      name: `${ift.getName()}Form`,
    })

    formClass.setExtends(`AnterosFormComponent<${ift.getName()}FormProps, ${ift.getName()}FormsState>`)

    formClass.addDecorator({
      name: 'boundClass',
    })

    const formConstructor = formClass.addConstructor()

    formConstructor.addParameter({
      name: 'props',
      type: `${ift.getName()}FormProps`,
    })

    formConstructor.setBodyText('super(props); \n' +
    ' this.state = { \n' +
    '  modalOpen: undefined, \n' +
    '  lookup: "", \n' +
    '  alertIsOpen: false, \n' +
    '  alertMessage: undefined, \n' +
    '  fieldName: undefined, \n' +
    '};')

    const onBeforeSave = formClass.addMethod({
      name: 'onBeforeSave',
      returnType: 'boolean',
    })

    onBeforeSave.setBodyText('return true;')

    const renderForm = formClass.addMethod({
      name: 'render',
      returnType: 'ReactNode',
    })

    renderForm.setBodyText('return ( \n' +
    '  <AnterosFormTemplate \n' +
    '    dataSource={this.props.dataSource} \n' +
    '    hideTour={this.props.hideTour} \n' +
    '    history={this.props.history} \n' +
    '    caption={"Cidade"} \n' +
    '    formName={"FCidade"} \n' +
    '    setNeedRefresh={this.props.setNeedRefresh} \n' +
    '    saveRoute={this.props.saveRoute} \n' +
    '    cancelRoute={this.props.cancelRoute} \n' +
    '    onBeforeSave={this.onBeforeSave} \n' +
    '  > \n' +
    '    <Fragment> \n' +
    '      <AnterosRow> \n' +
    '        <AnterosCol small={12}> \n' +
    '        </AnterosCol> \n' +
    '      </AnterosRow> \n' +
    '    </Fragment> \n' +
    '  </AnterosFormTemplate> \n' +
    '); ')
  }

  makeEntity(base : string, override: boolean) : void {
    const project = new Project()
    project.addSourceFilesAtPaths('/Users/edsonmartins/projetos_react/cade-web/src/model/types.ts')
    const typeFile = project.getSourceFileOrThrow('types.ts')
    const interfaces = typeFile.getInterfaces()
    const enums = typeFile.getEnums()
    console.log(`${CLIENT} criando entidades... ${base}`)

    for (const ift of interfaces) {
      if (base === 'all' || ift.getName() === base) {
        console.log(`${CLIENT} criando entidade... ${ift.getName()}`)
        const fileExists = project.getSourceFile(`${SRC_ENTITY}/${ift.getName()}Entity.ts`)
        if (fileExists && override) {
          fileExists.deleteImmediately()
        }

        if (fileExists && !override) {
          continue
        }

        const sourceEntity = project.createSourceFile(`${SRC_ENTITY}/${ift.getName()}Entity.ts`, '', {overwrite: true})
        sourceEntity.addImportDeclaration({
          defaultImport: '{AnterosEntity}',
          moduleSpecifier: '@anterostecnologia/anteros-react-mvc',
        })

        let impTypes = ift.getName()
        for (const prop of ift.getProperties()) {
          const splitProp = prop.getType().getText().split('.')
          let name = splitProp[0]
          if (splitProp.length > 1) {
            name = splitProp[1]
          }

          if (this.hasInterfaceByName(interfaces, name)) {
            impTypes += `, ${name}`
          }

          if (this.hasEnumByName(enums, name)) {
            impTypes += `, ${name}`
          }
        }

        sourceEntity.addImportDeclaration({
          defaultImport: `{${impTypes}}`,
          moduleSpecifier: './types.ts',
        })

        const entityClass = sourceEntity.addClass({
          extends: 'AnterosEntity',
          name: `${ift.getName()}Entity`,
        })
        entityClass.addImplements(ift.getName())

        for (const prop of ift.getProperties()) {
          const _prop = entityClass.addProperty({
            name: `private _${prop.getName()}!`,
          })
          const splitProp = prop.getType().getText().split('.')
          if (splitProp.length > 1) {
            _prop.setType(splitProp[1])
          } else {
            _prop.setType(splitProp[0])
          }
        }

        for (const prop of ift.getProperties()) {
          const splitProp = prop.getType().getText().split('.')
          let tp = splitProp[0]
          if (splitProp.length > 1) {
            tp = splitProp[1]
          }

          entityClass.addGetAccessor({
            name: prop.getName(),
            returnType: tp,
            statements: [`return this._${prop.getName()};`],
            scope: Scope.Public,
          })
          entityClass.addSetAccessor({
            name: prop.getName(),
            parameters: [{name: 'value', type: tp}],
            statements: [`this._${prop.getName()} = value;`],
            scope: Scope.Public,
          })
        }

        entityClass.setIsExported(true)

        sourceEntity.save()
      }
    }
  }

  hasInterfaceByName(interfaces : InterfaceDeclaration[], name : string) : boolean {
    for (const ift of interfaces) {
      if (ift.getName() === name) {
        return true
      }
    }

    return false
  }

  hasEnumByName(enums : EnumDeclaration[], name : string) : boolean {
    for (const enm of enums) {
      if (enm.getName() === name) {
        return true
      }
    }

    return false
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Make)

    const _types = args.type.split(',')
    for (const tp of _types) {
      if (tp.trim() === ENTITY || tp.trim() === 'all') {
        if (!flags.interface) {
          console.log(`${CLIENT}${ERROR} Informe all para todas as interfaces ou informe o nome da interface desejada para gerar a entidade.`)
          return
        }

        this.makeEntity(flags.interface, flags.override)
      }

      if (tp.trim() === RESOURCE || tp.trim() === 'all') {
        if (!flags.interface) {
          console.log(`${CLIENT}${ERROR} Informe all para todas as interfaces ou informe o nome da interface desejada para gerar o resource.`)
          return
        }

        this.makeResource(flags.interface, flags.override)
      }

      if (tp.trim() === CONTROLLER || tp.trim() === 'all') {
        if (!flags.interface) {
          console.log(`${CLIENT}${ERROR} Informe all para todas as interfaces ou informe o nome da interface desejada para gerar o controller.`)
          return
        }

        this.makeController(flags.interface, flags.override)
      }

      if (tp.trim() === VIEW || tp.trim() === 'all') {
        if (!flags.interface) {
          console.log(`${CLIENT}${ERROR} Informe all para todas as interfaces ou informe o nome da interface desejada para gerar a view.`)
          return
        }

        this.makeView(flags.interface, flags.override)
      }
    }
  }
}
