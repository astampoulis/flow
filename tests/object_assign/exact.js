type ExactPerson = {| name: string, age: number |};
type InexactPerson = { name: string, age: number };

// ok
function identity(p: ExactPerson): ExactPerson {
  return Object.assign({}, p);
}

// error
function inexactToExact(p: InexactPerson): ExactPerson {
  return Object.assign({}, p);
}

// ok
function exactToInexact(p: ExactPerson): InexactPerson {
  return Object.assign({}, p);
}
