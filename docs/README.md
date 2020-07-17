[@robbie-cook/node-helper](README.md) › [Globals](globals.md)

# @robbie-cook/node-helper

<p align="center">
  <a href="https://yarnpkg.com/">
    <img alt="Yarn" src="banner.svg" width="300">
  </a>
</p>

---

## Getting started

First, make sure you import the helper with

```node
import NodeHelper from '@robbie-cook/node-helper'
```

#

 
<!-- AUTO-GENERATED-CONTENT:START (API) -->
[@robbie-cook/node-helper](../README.md) › [Globals](../globals.md) › ["node-helper"](_node_helper_.md)

# Module: "node-helper"

## Index

### Variables

* [exec](_node_helper_.md#exec)
* [fetch](_node_helper_.md#const-fetch)
* [readline](_node_helper_.md#const-readline)
* [util](_node_helper_.md#const-util)

### Functions

* [execute](_node_helper_.md#execute)
* [fetchFile](_node_helper_.md#fetchfile)
* [input](_node_helper_.md#input)
* [isAnswerYes](_node_helper_.md#isansweryes)

## Variables

###  exec

• **exec**: *any*

*Defined in [node-helper.ts:1](https://github.com/Robbie-Cook/node-helper/blob/6ebb6cc/src/node-helper.ts#L1)*

___

### `Const` fetch

• **fetch**: *any* = require("node-fetch")

*Defined in [node-helper.ts:5](https://github.com/Robbie-Cook/node-helper/blob/6ebb6cc/src/node-helper.ts#L5)*

___

### `Const` readline

• **readline**: *any* = require("readline")

*Defined in [node-helper.ts:4](https://github.com/Robbie-Cook/node-helper/blob/6ebb6cc/src/node-helper.ts#L4)*

___

### `Const` util

• **util**: *any* = require("util")

*Defined in [node-helper.ts:2](https://github.com/Robbie-Cook/node-helper/blob/6ebb6cc/src/node-helper.ts#L2)*

## Functions

###  execute

▸ **execute**(`command`: string): *Promise‹any›*

*Defined in [node-helper.ts:16](https://github.com/Robbie-Cook/node-helper/blob/6ebb6cc/src/node-helper.ts#L16)*

Execute a command

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`command` | string |   |

**Returns:** *Promise‹any›*

___

###  fetchFile

▸ **fetchFile**(`endpoint`: string, `bearerToken?`: undefined | string): *Promise‹any›*

*Defined in [node-helper.ts:60](https://github.com/Robbie-Cook/node-helper/blob/6ebb6cc/src/node-helper.ts#L60)*

Fetch a file from an endpoint

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`endpoint` | string | - |
`bearerToken?` | undefined &#124; string |   |

**Returns:** *Promise‹any›*

___

###  input

▸ **input**(`input`: string): *Promise‹unknown›*

*Defined in [node-helper.ts:31](https://github.com/Robbie-Cook/node-helper/blob/6ebb6cc/src/node-helper.ts#L31)*

Read input from the user

**Parameters:**

Name | Type |
------ | ------ |
`input` | string |

**Returns:** *Promise‹unknown›*

___

###  isAnswerYes

▸ **isAnswerYes**(`input`: string): *null | RegExpMatchArray‹›*

*Defined in [node-helper.ts:50](https://github.com/Robbie-Cook/node-helper/blob/6ebb6cc/src/node-helper.ts#L50)*

Whether the user accepted the input

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`input` | string |   |

**Returns:** *null | RegExpMatchArray‹›*

<!-- AUTO-GENERATED-CONTENT:END -->
