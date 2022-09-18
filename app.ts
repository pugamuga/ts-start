// enums

const four = (): number => {
  return 2 + 2;
};
const enum StatusEnum {
  ADMIN=2,
  USER=3,
  INVESTOR=4,
  ERROR=5,
}

const allPersons = [
  {
    name: "Puga Admin",
    status: StatusEnum.ADMIN,
  },
  {
    name: "Puga user",
    status: StatusEnum.USER,
  },
  {
    name: "Puga Investor",
    status: StatusEnum.INVESTOR,
  },
  {
    name: "Puga Error",
    status: StatusEnum.ERROR,
  },
];

allPersons.map((person: { name: string; status: StatusEnum }) => {
  return console.log(`Name is: ${person.name}, and his role: ${person.status}`);
});
