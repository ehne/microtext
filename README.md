  
  
<p>
  <img alt="logo" src="https://gitcdn.xyz/repo/ehne/microtext/main/assets/microtext.png" align="center" />
</p>
  
#  microtext
  
A library of small (and probably inefficient) utility functions for messing with text.
  
###  Getting started
  
  
node:
```bash
$ npm i microtext
```
  
and in your js:
```js
const { micromarkup, microtemplate } = require('microtext')
```
  
or if you prefer ES Modules (browser):
```js
import { microtemplate, micromarkup } from 'https://cdn.skypack.dev/microtext';
```
  
---
  
**Functions exported:**
  
  
- [micromarkup](#micromarkup )
  - [Syntax](#syntax )
  - [Usage](#usage )
  - [Options](#options )
- [microtemplate](#microtemplate )
  - [Syntax](#syntax-1 )
  - [Usage](#usage-1 )
- [microdata](#microdata )
  - [Syntax](#syntax-2 )
  - [Usage](#usage-2 )
  
---
  
##  micromarkup
  
*A fairly small "markdown-light" parser.*
  
Takes input of a string and returns the appropriate html.
  
###  Syntax
  
- **Links** — default
  - The exact same as normal markdown: 
  - `[hello](# )` → `<a href="#" target="_blank" rel="noopener noreferrer">hello</a>`
- **Italics** — default
  - Once again the same as normal markdown:
  - `*hello*` → `<i>hello</i>`
  - micromarkup also supports the underscore syntax for italics: `_hello_`
- **Bold** — default
  - `**hello**` → `<b>hello</b>`
  - micromarkup also supports the double underscore syntax for bold: `__hello__`
- **Highlights** — optional
  - `::hello::` → `<mark>hello</mark>`
- **Superscript** — optional
  - `ˆhelloˆ` → `<sup>hello</sup>`
  - to type `ˆ` on a mac: <kbd>option</kbd> <kbd>shift</kbd> <kbd>I</kbd>
- **Subscript** — optional
  - `ˇhelloˇ` → `<sub>hello</sub>`
  - to type `ˇ` on a mac: <kbd>option</kbd> <kbd>shift</kbd> <kbd>T</kbd>
  
> **note:** micromarkup does not parse paragraphs into `<p>` tags.
  
###  Usage
  
  
```js
//// BASIC
micromarkup(inputText)
// eg:
micromarkup("**bold text!**")
// returns: <b>bold text!</b>
  
//// WITH OPTIONS
micromarkup(inputText, options)
// eg:
micromarkup("::highlighted text!::", { highlighted: true })
// returns: <mark>highlighted text!</mark>
```
  
where:
- `inputText` is a string of micromarkup text formatted with the syntax above **(required)**
- `options` is a key-value object that contains the options defined below **(optional)**
  
###  Options
  
```js
default = {
    links: true,
    newTab: true,
    bold: true,
    italics: true,
    highlights: false,
    supSub: false
  }
```
- `links`: specifies whether or not links should be parsed.
- `newTab`: whether or not the link parser should make links open in a new tab.
- `bold`: whether or not bold text should be parsed.
- `italics`: whether or not italic text should be parsed.
- `highlights`: whether or not highlights should be parsed.
- `supSub`: whether or not superscripts and subscripts should be parsed.
  
  
##  microtemplate
  
*A simple template language that just inserts variables into your text.*
  
Takes input of a string and returns another string with variables subbed in.
  
###  Syntax
  
```txt
hello λworldVarλ
```
Anything inside of the `λ` symbols will be treated as the variable name to replace with the text you want.
  
###  Usage
  
```js
//// BASIC
microtemplate(inputString, variables)
// eg.
microtemplate('hello λvarλ', {'var': 'world'})
// returns: 'hello world'
  
//// WITH CUSTOM DELIMITER
microtemplate(inputString, variables, delimiter)
// eg.
microtemplate('hello §var§', {'var': 'world'}, '§')
// returns: 'hello world'
```
where:
- `inputString` is the input text formatted with the syntax above. **(required)**
- `variables` is an object of key-value pairs, where the key is the text inside the delimiter (λ), and the value is what to replace it with. **(required)**
- `delimiter` is the symbol that is used to contain the variable names. The default is the `λ` symbol. **(optional)**
  
  
##  microdata
  
*a very light data storage language, only really designed for static data.*
  
Takes a string input and returns a JS object.
  
###  Syntax
  
```md
[hello]
world
```
The above text returns the js:
```js
{
  hello: "world",
}
```
*note that microdata removes newlines from the original string for its very simple algorithm to work.*
  
###  Usage
  
```js
//// BASIC
// eg.
microdata(`
[hello]
cool
`) 
/* returns:
{
  hello: "cool"
}
```
  
---
> Made by [@ehne](https://github.com/ehne ). Consider giving microtext a ⭐️ if it helped you!
> 
> ![npm](https://img.shields.io/npm/v/microtext ) ![GitHub Repo stars](https://img.shields.io/github/stars/ehne/microtext?style=social )
  