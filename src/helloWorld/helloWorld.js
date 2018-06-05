function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Elias", lastName: "Fong" };
console.log(greeter(user));
