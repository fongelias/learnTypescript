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

## Syntax







