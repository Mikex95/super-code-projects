let person = {
    name: 'Isabell',
    age: 29,
    sagNameAlter: () => {
        console.log(`${person.name} ${person.age}`),
        alert(`Ich heiße ${person.name} und bin ${person.age} Jahre jung`)
    }
}

person.sagNameAlter()