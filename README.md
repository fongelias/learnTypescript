# learnTypescript

## Why typescript?
* compiles to vanilla js
* static checking
* code refactoring
* optional types and type inference

## Installation and basic commands
npm install with `npm install -g typescript`

to compile a sample file `greeter.ts`:
```
function greeter(p: string) {
	return "Hello, " + p;
}
let user = "User";
document.body.innerHTML = greeter(user);
```

run `tsc greeter.ts` to compile it into `greeter.js`

## TS with React and Webpack
When requiring npm packages, get declaration files as well
`npm install --save-dev react react-dom @types/react @types/react-dom`

loaders to use:
`npm install --save-dev typescript awesome-typescript-loader source-map-loader`
`source-map-loader` is added to update the sourcemap as if you were debugging the original typescript code

add a `tsconfig.json` file so that your IDE, the `tsc` command, and the loade all share the same options

## Syntax
### Type annotations
Record the intended contract of a function/variable, validated at compile time.

`function greeter(person: string)`

### Interfaces
We can create interfaces with the `interface` keyword:

```
interface Person {
	firstName: string;
	lastName: string;
}
```

note that the braces are a block, not an object literal.

Types are compatible if their internal structure is compatible, so we don't need to use an `implements` clause

### Classes
sample class:
```
class Student {
	fullName: string;
	constructor(public firstName: string, public lastName: string) {
		this.fullName = firstName + " " + lastName;
	}
}
```

`public` creates properties on the object with that name







