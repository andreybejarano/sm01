const name = 'andrey';
const lastname = 'bejarano';
const country = "Colombia";
let age = null;

function getAge(cbPrintData) {
    setTimeout(() => {
        return cbPrintData(34);
    }, 3000);
}

getAge(function(ageValue) {
    console.log(name, lastname, ageValue, country);
});


console.log(age);


