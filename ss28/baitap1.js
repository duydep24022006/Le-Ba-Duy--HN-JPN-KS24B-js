const person = {
    name: "John Doe",
    age: 25,
    job: "Developer"
}
for (let keys in person) {
    console.log(`${keys}:${person[keys]}`)
}