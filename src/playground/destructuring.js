
//
//
///object destructring
const person={
    name:'Gowtham',
    age:24,
    location:{
        city:'Tirupur',
        temp:'30c'
    }
}
const {name,age}=person;

console.log(`${name} is ${age}`);
const{city,temp}=person.location;

if(city && temp){
    console.log(`${city} city temp is ${temp} `)
}

const book={
    title:'Ego is  the Enemy',
    author:'Ryan Hoiliday',
    publisher:{
       // name:'Penguin'
    }
}

const{name:publishername='Self-Published'}=book.publisher;

console.log(publishername);
///
///
///array destructuring
const item=['coffee(hot)','2.30','2.60','2.80'];

const[namei,,medium,]=item;
console.log(`${namei}is ${medium} dollers`);

