const user = {
  name: "puga",
  age: 25,
  job: false,
  intereses:{
    books:"new",
    movies:"old"
  }
};

interface userMethod {
  name: string;
  age: number;
  job: boolean;
}

interface userIntereses {
  intereses: {
    books: string;
    movies: string;
  };
}

interface fullUser extends userMethod, userIntereses{}

const userReturns = (person: fullUser): userMethod => {
  const coolPerson = {
    name: "Cool_" + person.name,
    age: person.age - 5,
    job: !person.job,
    intereses:{
        books:"not"+person.intereses.books,
        movies:"not"+person.intereses.movies
    }
  };
  return coolPerson;
};

console.log(userReturns(user));
