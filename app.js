function createAddress(city, street) {
    //{city: city, street: street} <=> {city, street}
    return {city, street}
}
function createPerson(id, name, address) {
    return {id, name, address};
}
const persons = [
    createPerson(123, "Vasya", createAddress("Rehovot","Parshani")),
    createPerson(124, "Olya", createAddress("Rehovot","Pr. Plaut")),
    createPerson(125, "Tolya", createAddress("Tel-Aviv","Dizengoff")),
    createPerson(126, "Sara", createAddress('Lod', 'Sokolov'))
]

const getPersonsCity = persons.filter(people => people.address.city=='Rehovot');
console.log(`+++++++ Task 3 +++++++++`);
console.log (`Peoples from Rehovot `,getPersonsCity);



const newPersonsSort =  persons.slice();
 newPersonsSort.sort((a,b) => {
       if (a.address.city === 'Rehovot') return 1;
       if (a.address.city !== 'Rehovot') return -1;
      return 0;
     });
console.log(`+++++++ Task 4 +++++++++`);   
console.log(newPersonsSort);
  