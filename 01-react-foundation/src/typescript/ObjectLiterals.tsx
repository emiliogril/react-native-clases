interface Person {
    firstName: string;
    lastName: string;
    age: number;

    address: Address;
}

interface Address {
    country: string;
    houseNo: number

}


export const ObjectLiterals = () => {

const person: Person = {
    firstName: "Emilio",
    lastName: "Gril",
    age: 47,
    address: {
        country: 'Argentina',
        houseNo: 1431
    }
};



  return (
    <>
    <h3>Objectos Literales</h3>
    <pre>
    { JSON.stringify( person, null, 2) }

    </pre>
    </>
  );
};
