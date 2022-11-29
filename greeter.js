function greeter(person) {
    return "Hello " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Liam", lastName: "Laverty" };
document.body.textContent = greetzer(user);
