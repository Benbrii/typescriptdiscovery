function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Jane", lastName: "User" };

console.log(greeter(user))
// document.body.textContent = greeter(user);
