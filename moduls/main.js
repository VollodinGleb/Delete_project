import { generatePeopleList } from './peopleGenerator';
import { searchPeople } from './search';

const people = generatePeopleList();

searchPeople(people, "name", "Person7")
    .then(results => {
        console.log("Результати пошуку:");
        for (const person of results) {
            console.log(person.greeting());
            console.log(person.getInfo('gender'));
        }
    })
    .catch(errorMessage => console.log(errorMessage));
