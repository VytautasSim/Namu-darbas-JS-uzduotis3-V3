// Trečia užduotis
// Sukurkite naują array su žemiau pateiktais personažų pavadinimais.
// Naudodami 'console.log()' atspausdinkite pirmą ir paskutinį elementą.
// Naudodami prompt("Įveskite skaičių nuo 1 iki 6"), atspausdinkite personažą, kurio eilės numeris buvo įvestas

// ```
// Jon Snow             - 0
// Cersei Lannister     - 1
// Daenerys Targaryen   - 2
// Theon Greyjoy        - 3
// Tyrion Lannister     - 4 
// Arya Stark           - 5

let names = ["Jon Snow", "Cersei Lannister", "Daenerys Targaryen", "Theon Greyjoy", "Tyrion Lannister", "Arya Stark"]
let first = names[0];
let last = names[5];

console.log("Visi dalyviai: " + names);
console.log("Pirmas narys - " + first);
console.log("Paskutinis narys - " + last);

var random = prompt("Įveskite skaičių nuo 0 iki 5");

var random = Number(random);

if (isNaN(random))
{
}
else
{
    console.log(names[random]);  
}

//

