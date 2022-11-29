interface Person {
    firstName: string;
    lastName: string;
}


function greeter(person: Person){
    return "Hello " + person.firstName + " " + person.lastName ;
}

let user = { firstName: "Liam", lastName: "Laverty"}

document.body.textContent = greeter(user);