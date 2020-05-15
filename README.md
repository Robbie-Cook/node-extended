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

NodeHelper 😘 (with its endless love) has provided you with the following functions
 
<!-- AUTO-GENERATED-CONTENT:START (API) -->
## Functions

<dl>
<dt><a href="#execute">execute(command)</a> ⇒ <code>string</code></dt>
<dd><p>Execute a command</p>
</dd>
<dt><a href="#input">input(input)</a> ⇒ <code>Promise.&lt;string&gt;</code></dt>
<dd><p>Read input from the user</p>
</dd>
<dt><a href="#isAnswerYes">isAnswerYes(input)</a></dt>
<dd><p>Whether the user accepted the input</p>
</dd>
<dt><a href="#fetchFile">fetchFile(endpoint, bearerToken)</a> ⇒ <code>Promise.&lt;ArrayBuffer&gt;</code></dt>
<dd><p>Fetch a file from an endpoint</p>
</dd>
</dl>

<a name="execute"></a>

## execute(command) ⇒ <code>string</code>
Execute a command

**Kind**: global function  

| Param | Type |
| --- | --- |
| command | <code>string</code> | 

<a name="input"></a>

## input(input) ⇒ <code>Promise.&lt;string&gt;</code>
Read input from the user

**Kind**: global function  

| Param | Type |
| --- | --- |
| input | <code>string</code> | 

<a name="isAnswerYes"></a>

## isAnswerYes(input)
Whether the user accepted the input

**Kind**: global function  

| Param | Type |
| --- | --- |
| input | <code>string</code> | 

<a name="fetchFile"></a>

## fetchFile(endpoint, bearerToken) ⇒ <code>Promise.&lt;ArrayBuffer&gt;</code>
Fetch a file from an endpoint

**Kind**: global function  

| Param | Type |
| --- | --- |
| endpoint | <code>string</code> | 
| bearerToken | <code>string</code> | 


<!-- AUTO-GENERATED-CONTENT:END -->