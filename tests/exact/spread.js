/* spread of an exact type should have exact type */

type ExactPerson = {| name: string, age: number |};
type InexactPerson = { name: string, age: number };

// ok
function identity(p: ExactPerson): ExactPerson {
  return { ...p };
}

// ok
function onBirthday(p: ExactPerson): ExactPerson {
  return { ...p, age: p.age + 1 };
}

// error
function inexactToExact(p: InexactPerson): ExactPerson {
  return { ...p };
}

// ok
function exactToInexact(p: ExactPerson): InexactPerson {
  return { ...p };
}
