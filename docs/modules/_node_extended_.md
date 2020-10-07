[node-extended](../README.md) › [Globals](../globals.md) › ["node-extended"](_node_extended_.md)

# Module: "node-extended"

## Index

### Functions

* [execute](_node_extended_.md#execute)
* [executeSync](_node_extended_.md#executesync)
* [fetch](_node_extended_.md#fetch)
* [input](_node_extended_.md#input)
* [isAnswerYes](_node_extended_.md#isansweryes)

### Object literals

* [NodeExtended](_node_extended_.md#const-nodeextended)
* [combined](_node_extended_.md#const-combined)

## Functions

###  execute

▸ **execute**(`command`: string): *Promise‹string›*

*Defined in [node-extended.ts:16](https://github.com/Robbie-Cook/node-helper/blob/2b3affe/src/node-extended.ts#L16)*

Execute a command

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`command` | string |   |

**Returns:** *Promise‹string›*

___

###  executeSync

▸ **executeSync**(`command`: string): *string*

*Defined in [node-extended.ts:32](https://github.com/Robbie-Cook/node-helper/blob/2b3affe/src/node-extended.ts#L32)*

Execute a command syncronously

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`command` | string |   |

**Returns:** *string*

___

###  fetch

▸ **fetch**(`endpoint`: string, `bearerToken?`: undefined | string): *Promise‹Response›*

*Defined in [node-extended.ts:72](https://github.com/Robbie-Cook/node-helper/blob/2b3affe/src/node-extended.ts#L72)*

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

*Defined in [node-extended.ts:42](https://github.com/Robbie-Cook/node-helper/blob/2b3affe/src/node-extended.ts#L42)*

Read input from the user

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`input` | string |   |

**Returns:** *Promise‹string›*

___

###  isAnswerYes

▸ **isAnswerYes**(`input`: string): *boolean | null*

*Defined in [node-extended.ts:61](https://github.com/Robbie-Cook/node-helper/blob/2b3affe/src/node-extended.ts#L61)*

Whether the user accepted the input

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`input` | string |   |

**Returns:** *boolean | null*

## Object literals

### `Const` NodeExtended

### ▪ **NodeExtended**: *object*

*Defined in [node-extended.ts:89](https://github.com/Robbie-Cook/node-helper/blob/2b3affe/src/node-extended.ts#L89)*

___

### `Const` combined

### ▪ **combined**: *object*

*Defined in [node-extended.ts:85](https://github.com/Robbie-Cook/node-helper/blob/2b3affe/src/node-extended.ts#L85)*

###  execute

• **execute**: *[execute](_node_extended_.md#execute)*

*Defined in [node-extended.ts:85](https://github.com/Robbie-Cook/node-helper/blob/2b3affe/src/node-extended.ts#L85)*

###  executeSync

• **executeSync**: *[executeSync](_node_extended_.md#executesync)*

*Defined in [node-extended.ts:85](https://github.com/Robbie-Cook/node-helper/blob/2b3affe/src/node-extended.ts#L85)*

###  fetch

• **fetch**: *[fetch](_node_extended_.md#fetch)*

*Defined in [node-extended.ts:85](https://github.com/Robbie-Cook/node-helper/blob/2b3affe/src/node-extended.ts#L85)*

###  input

• **input**: *[input](_node_extended_.md#input)*

*Defined in [node-extended.ts:85](https://github.com/Robbie-Cook/node-helper/blob/2b3affe/src/node-extended.ts#L85)*

###  isAnswerYes

• **isAnswerYes**: *[isAnswerYes](_node_extended_.md#isansweryes)*

*Defined in [node-extended.ts:85](https://github.com/Robbie-Cook/node-helper/blob/2b3affe/src/node-extended.ts#L85)*
