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

[To add syntax highlighting to sublime](https://stackoverflow.com/questions/38712155/how-to-get-support-of-typescript-with-sublime-text-3):
```
cd ~/"Library/Application Support/Sublime Text 3/Packages"
git clone --depth 1 https://github.com/Microsoft/TypeScript-Sublime-Plugin.git TypeScript
```

## TS with React and Webpack
When requiring npm packages, get declaration files as well
`npm install --save-dev react react-dom @types/react @types/react-dom`

loaders to use:
`npm install --save-dev typescript awesome-typescript-loader source-map-loader`
`source-map-loader` is added to update the sourcemap as if you were debugging the original typescript code

add a `tsconfig.json` file so that your IDE, the `tsc` command, and the loader all share the same options

react files with typescript are named with the extension `.tsx`

### Common Errors
```
./src/react/index.tsx:2:8 
.../node_modules/@types/react/index"' has no default export
```
can be resolved by making sure the file above `index.tsx` imports react with this statement: `import * as React from 'react'`, and imports react-dom in a similar way. More details [here](https://github.com/Microsoft/TypeScript-React-Starter/issues/8) and [here](https://github.com/Microsoft/TypeScript/issues/14118)


## Syntax
### Type annotations
Record the intended contract of a function/variable, validated at compile time.

`function greeter(person: string): string`

"function greeter takes a string named person and returns a string"


### Types
```
boolean
number
string
Array<number> /*or*/ number[]
[string, number] //for a tuple
enum TypeName {Types}
any //for variables you dont know
void
never //return value for function that never returns or always throws an error
object
```

### Type assertion
angle bracket syntax (not allowed with jsx):
`let strLength: number = (<string> someValue).length;`

`as` keyword syntax:
`let strLength: number = (someValue as string).length;

### Interfaces
We can create interfaces with the `interface` keyword:

```
interface Person {
	firstName: string;
	lastName: string;
}
```

note that the braces are a block, not an object literal.

Types are compatible if their internal structure is compatible, so we don't need to use an `implements` clause (except for implementation of classes)

Properties can be optional or `readonly`, and interfaces can carry additional properties than ones listed:
```
interface BodyPart {
	readonly name: string;
	injuries?: Array<string>;
	[propName: string]: any;
}
```

Interfaces can also be created for function types:
```
interface FuncType {
	(variableOne: string, variableTwo: string): boolean;
}

let myFunc: FuncType;
//parameter names in function type does not need to match
myFunc = function(variableOne: string, second: string) {
	//some functionality
}
```

Interfaces can be use with indexable types, denoting how its indexed and what the results are. This can also enforce types in a dictionary:
```
interface StringArray {
	[index: number]: string;
}

let myArray: StringArray;
myArray = ["string", "string2"];
```

You can write interfaces to enforce class descriptions:
```
interface ClockInterface {
	currentTime: Date;
	setTime(d: Date);
}

class Clock implements ClockInterface {
	currentTime: Date;
	setTime(d: Date) {
		this.currentTime = d;
	}
	constructor(h: number, m: number) {}
}
```
only the instance side of the class is checked, [not the static side](https://www.typescriptlang.org/docs/handbook/interfaces.html#difference-between-the-static-and-instance-sides-of-classes)



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

`public` creates properties on the object with that name when used in the constructor's inputs







