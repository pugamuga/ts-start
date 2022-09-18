"use strict";
// enums
const four = () => {
    return 2 + 2;
};
const allPersons = [
    {
        name: "Puga Admin",
        status: 2 /* StatusEnum.ADMIN */,
    },
    {
        name: "Puga user",
        status: 3 /* StatusEnum.USER */,
    },
    {
        name: "Puga Investor",
        status: 4 /* StatusEnum.INVESTOR */,
    },
    {
        name: "Puga Error",
        status: 5 /* StatusEnum.ERROR */,
    },
];
allPersons.map((person) => {
    return console.log(`Name is: ${person.name}, and his role: ${person.status}`);
});
