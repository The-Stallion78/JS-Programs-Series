// FOR...IN LOOP

// for in statement loops through the properties of an Object

// it is recommended to use for...in primarily for objects, as it may not always give the desired results with arrays due to the iteration over inherited properties.
console.log("For Simple Objects\n")

let Info = {
    First_name: 'Mubeen',
    Last_name: 'Rani',
    Age: 24,
    Nationality: 'Pakistani',
    Religion: 'Islam',
    Qualification: 'B.S Information Technology',
};

for(const check in Info) {
    console.log(`Info ${check} : ${Info[check]}`)
}
console.log('--------------------\n')

console.log("For Nested Objects\n")

let Info2 = {
    First_name: 'Khizar Hayat',
    Last_name: 'Khan',
    Age: 22,
    Nationality: 'Pakistani',
    Religion: 'Islam',
    Qualification: 'Computer Engineer',
    Skills : {
        Web : 'MERN Stack Developer',
        Trading: 'Crypto Trader',
        Competetive: 'PAS Officer'
    }
};

for (const check in Info2) {
    if (typeof Info2[check] === 'object' && Info2[check] !== null) {
        for (const nestedCheck in Info2[check]) {
            console.log(`Info ${check} -> ${nestedCheck} : ${Info2[check][nestedCheck]}`);
        }
    } else {
        console.log(`Info ${check} : ${Info2[check]}`);
    }
}
console.log('--------------------\n');

