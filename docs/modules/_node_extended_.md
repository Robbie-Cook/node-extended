[node-extended](../README.md) › [Globals](../globals.md) › ["node-extended"](_node_extended_.md)

# Module: "node-extended"

## Index

### Functions

* [execute](_node_extended_.md#execute)
* [fetch](_node_extended_.md#fetch)
* [input](_node_extended_.md#input)
* [isAnswerYes](_node_extended_.md#isansweryes)

### Object literals

* [NodeExtended](_node_extended_.md#const-nodeextended)

## Functions

###  execute

▸ **execute**(`command`: string): *Promise‹string›*

*Defined in [node-extended.ts:16](https://github.com/Robbie-Cook/node-helper/blob/ea2edce/src/node-extended.ts#L16)*

Execute a command

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`command` | string |   |

**Returns:** *Promise‹string›*

___

###  fetch

▸ **fetch**(`endpoint`: string, `bearerToken?`: undefined | string): *Promise‹Response›*

*Defined in [node-extended.ts:62](https://github.com/Robbie-Cook/node-helper/blob/ea2edce/src/node-extended.ts#L62)*

Fetch anything.
Uses node-fetch under the hood.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`endpoint` | string | - |
`bearerToken?` | undefined &#124; string |   |

**Returns:** *Promise‹Response›*

___

###  input

▸ **input**(`input`: string): *Promise‹string›*

*Defined in [node-extended.ts:32](https://github.com/Robbie-Cook/node-helper/blob/ea2edce/src/node-extended.ts#L32)*

Read input from the user

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`input` | string |   |

**Returns:** *Promise‹string›*

___

###  isAnswerYes

▸ **isAnswerYes**(`input`: string): *boolean | null*

*Defined in [node-extended.ts:51](https://github.com/Robbie-Cook/node-helper/blob/ea2edce/src/node-extended.ts#L51)*

Whether the user accepted the input

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`input` | string |   |

**Returns:** *boolean | null*

## Object literals

### `Const` NodeExtended

### ▪ **NodeExtended**: *object*

*Defined in [node-extended.ts:78](https://github.com/Robbie-Cook/node-helper/blob/ea2edce/src/node-extended.ts#L78)*

###  execute

• **execute**: *[execute](_node_extended_.md#execute)*

*Defined in [node-extended.ts:78](https://github.com/Robbie-Cook/node-helper/blob/ea2edce/src/node-extended.ts#L78)*

###  fetch

• **fetch**: *[fetch](_node_extended_.md#fetch)*

*Defined in [node-extended.ts:78](https://github.com/Robbie-Cook/node-helper/blob/ea2edce/src/node-extended.ts#L78)*

###  input

• **input**: *[input](_node_extended_.md#input)*

*Defined in [node-extended.ts:78](https://github.com/Robbie-Cook/node-helper/blob/ea2edce/src/node-extended.ts#L78)*

###  isAnswerYes

• **isAnswerYes**: *[isAnswerYes](_node_extended_.md#isansweryes)*

*Defined in [node-extended.ts:78](https://github.com/Robbie-Cook/node-helper/blob/ea2edce/src/node-extended.ts#L78)*
