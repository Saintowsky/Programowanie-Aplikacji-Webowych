interface Person {
    // TODO: dodać pola: imię (string), nazwisko (string), wiek (number) oraz rola (string)
    name: string;
    surname: string;
    age: number;
    role: string;
    }
    
    const users: Person[] = [
        { name: 'John', surname: 'Smith', age: 25, role: 'user'},
        { name: 'Adam', surname: 'Johnson', age: 35, role: 'user'},
        { name: 'Andy', surname: 'Cole', age: 18, role: 'user'},
    ]
    
    const admins: Person[] = [
        { name: 'Matthew', surname: 'Ryan', age: 43, role: 'admin'},
        { name: 'Adam', surname: 'Terry', age: 24, role: 'admin'},
    ]
    
    function logPerson(person: Person) {
    // TODO: dodać wypisywanie na konsoli danych osoby: "imię nazwisko, wiek, rola"
        console.log(person.name, person.surname, person.age, person.role)
    }
    

    function filterPersons(persons: Person[], criteria: any): Person[] {
    // TODO: zaimplementować funkcję, która przefiltruje tablicę persons za pomocą predykatu criteria
    let filtered = persons.filter((el) => Object.values(criteria));
    return filtered;
    }



  


    // TODO:
    // 1. Przy pomocy funkcji logPerson wypisać osoby z tablicy users i admins (patrz foreach)
    users.forEach((tab)=>logPerson(tab))
    admins.forEach((tab)=>logPerson(tab))
    // 2. Złączyć tablice users i admins i wypisać zawartość złączonej tablicy na konsoli (patrz operator spread)
    const tab = [...users,...admins]
    tab.forEach(logPerson)
    // 3. Wypisać osoby powyżej 25 lat (patrz operator filter)
    const filtered = tab.filter((User)=>User.age>25)
    filtered.forEach(logPerson)
    // 4. Wypisać osoby o imieniu Adam (zaimplementować funkcję filterPersons) -> const filtered = filterPersons(persons, { name: 'Adam' });
    filterPersons(tab, { name: "Adam"});
     
