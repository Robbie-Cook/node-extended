[node-extended](README.md) › [Globals](globals.md)

# node-extended

<p align="center">
  <a href="https://yarnpkg.com/">
    <img alt="Yarn" src="banner.svg" width="300">
  </a>
</p>

---

Welcome to Node Helper! Contributions are always welcome, but please make an issue first.

## Getting started

First, make sure you import the helper with

```node
import NodeHelper from 'node-extended'
```
or, equally,

```node
const NodeHelper = require('node-extended');
```

#

## API
 
<!-- AUTO-GENERATED-CONTENT:START (API) -->
[node-extended](../README.md) › [Globals](../globals.md) › ["node-extended"](_node_extended_.md)

# Module: "node-extended"

## Index

### Functions

* [execute](_node_extended_.md#execute)
* [fetch](_node_extended_.md#fetch)
* [fetchFile](_node_extended_.md#fetchfile)
* [input](_node_extended_.md#input)
* [isAnswerYes](_node_extended_.md#isansweryes)

## Functions

###  execute

▸ **execute**(`command`: string): *Promise‹string›*

*Defined in [node-extended.ts:16](https://github.com/Robbie-Cook/node-helper/blob/dc8c36a/src/node-extended.ts#L16)*

Execute a command

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`command` | string |   |

**Returns:** *Promise‹string›*

___

###  fetch

▸ **fetch**(`endpoint`: string, `bearerToken?`: undefined | string): *Promise‹Response›*

*Defined in [node-extended.ts:83](https://github.com/Robbie-Cook/node-helper/blob/dc8c36a/src/node-extended.ts#L83)*

Fetch anything.
Uses node-fetch under the hood.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`endpoint` | string | - |
`bearerToken?` | undefined &#124; string |   |

**Returns:** *Promise‹Response›*

___

###  fetchFile

▸ **fetchFile**(`endpoint`: string, `bearerToken?`: undefined | string): *Promise‹ArrayBuffer›*

*Defined in [node-extended.ts:62](https://github.com/Robbie-Cook/node-helper/blob/dc8c36a/src/node-extended.ts#L62)*

Fetch a file from an endpoint

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`endpoint` | string | - |
`bearerToken?` | undefined &#124; string |   |

**Returns:** *Promise‹ArrayBuffer›*

___

###  input

▸ **input**(`input`: string): *Promise‹string›*

*Defined in [node-extended.ts:33](https://github.com/Robbie-Cook/node-helper/blob/dc8c36a/src/node-extended.ts#L33)*

Read input from the user

**Parameters:**

Name | Type |
------ | ------ |
`input` | string |

**Returns:** *Promise‹string›*

___

###  isAnswerYes

▸ **isAnswerYes**(`input`: string): *boolean | null*

*Defined in [node-extended.ts:52](https://github.com/Robbie-Cook/node-helper/blob/dc8c36a/src/node-extended.ts#L52)*

Whether the user accepted the input

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`input` | string |   |

**Returns:** *boolean | null*

<!-- AUTO-GENERATED-CONTENT:END -->
