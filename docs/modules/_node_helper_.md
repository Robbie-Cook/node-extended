[@robbie-cook/node-helper](../README.md) › [Globals](../globals.md) › ["node-helper"](_node_helper_.md)

# Module: "node-helper"

## Index

### Functions

* [execute](_node_helper_.md#execute)
* [fetchFile](_node_helper_.md#fetchfile)
* [input](_node_helper_.md#input)
* [isAnswerYes](_node_helper_.md#isansweryes)

## Functions

###  execute

▸ **execute**(`command`: string): *Promise‹string›*

*Defined in [node-helper.ts:16](https://github.com/Robbie-Cook/node-helper/blob/6ebb6cc/src/node-helper.ts#L16)*

Execute a command

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`command` | string |   |

**Returns:** *Promise‹string›*

___

###  fetchFile

▸ **fetchFile**(`endpoint`: string, `bearerToken?`: undefined | string): *Promise‹ArrayBuffer›*

*Defined in [node-helper.ts:60](https://github.com/Robbie-Cook/node-helper/blob/6ebb6cc/src/node-helper.ts#L60)*

Fetch a file from an endpoint

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`endpoint` | string | - |
`bearerToken?` | undefined &#124; string |   |

**Returns:** *Promise‹ArrayBuffer›*

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