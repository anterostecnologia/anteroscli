oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g anteros-cli
$ anteros-cli COMMAND
running command...
$ anteros-cli (--version)
anteros-cli/0.0.0 darwin-x64 node-v14.18.0
$ anteros-cli --help [COMMAND]
USAGE
  $ anteros-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`anteros-cli hello PERSON`](#anteros-cli-hello-person)
* [`anteros-cli hello world`](#anteros-cli-hello-world)
* [`anteros-cli help [COMMAND]`](#anteros-cli-help-command)
* [`anteros-cli plugins`](#anteros-cli-plugins)
* [`anteros-cli plugins:install PLUGIN...`](#anteros-cli-pluginsinstall-plugin)
* [`anteros-cli plugins:inspect PLUGIN...`](#anteros-cli-pluginsinspect-plugin)
* [`anteros-cli plugins:install PLUGIN...`](#anteros-cli-pluginsinstall-plugin-1)
* [`anteros-cli plugins:link PLUGIN`](#anteros-cli-pluginslink-plugin)
* [`anteros-cli plugins:uninstall PLUGIN...`](#anteros-cli-pluginsuninstall-plugin)
* [`anteros-cli plugins:uninstall PLUGIN...`](#anteros-cli-pluginsuninstall-plugin-1)
* [`anteros-cli plugins:uninstall PLUGIN...`](#anteros-cli-pluginsuninstall-plugin-2)
* [`anteros-cli plugins update`](#anteros-cli-plugins-update)

## `anteros-cli hello PERSON`

Say hello

```
USAGE
  $ anteros-cli hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/anterostecnologia/anteros-cli/anteros-cli/blob/v0.0.0/dist/commands/hello/index.ts)_

## `anteros-cli hello world`

Say hello world

```
USAGE
  $ anteros-cli hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `anteros-cli help [COMMAND]`

Display help for anteros-cli.

```
USAGE
  $ anteros-cli help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for anteros-cli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `anteros-cli plugins`

List installed plugins.

```
USAGE
  $ anteros-cli plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ anteros-cli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `anteros-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ anteros-cli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ anteros-cli plugins add

EXAMPLES
  $ anteros-cli plugins:install myplugin 

  $ anteros-cli plugins:install https://github.com/someuser/someplugin

  $ anteros-cli plugins:install someuser/someplugin
```

## `anteros-cli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ anteros-cli plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ anteros-cli plugins:inspect myplugin
```

## `anteros-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ anteros-cli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ anteros-cli plugins add

EXAMPLES
  $ anteros-cli plugins:install myplugin 

  $ anteros-cli plugins:install https://github.com/someuser/someplugin

  $ anteros-cli plugins:install someuser/someplugin
```

## `anteros-cli plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ anteros-cli plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ anteros-cli plugins:link myplugin
```

## `anteros-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ anteros-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ anteros-cli plugins unlink
  $ anteros-cli plugins remove
```

## `anteros-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ anteros-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ anteros-cli plugins unlink
  $ anteros-cli plugins remove
```

## `anteros-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ anteros-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ anteros-cli plugins unlink
  $ anteros-cli plugins remove
```

## `anteros-cli plugins update`

Update installed plugins.

```
USAGE
  $ anteros-cli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
