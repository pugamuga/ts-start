const sum = (a:number, b:number) => {
  let c;
  return (c = a + b);
};

console.log(sum(10_000,-5_000))