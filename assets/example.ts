interface IPerson {
  firstname: string;
  lastName: string;
  isAlive: boolean;
  age: number;
  children: Array<IPerson>;
  address: IAddress;
}

interface IAddress {
  houseNumber: string;
  streetDirection: "N" | "E" | "S" | "W";
  streetName: string;
  streetType: StreetTypes;
  unit: string;
  city: string;
  state: UsStates;
  zip: number;
}

enum StreetTypes {
  AV,
  BLVD,
  CIR,
  CR,
  CT,
  DR,
  "DR-E",
  "DR-S",
  "DR-W",
  HWY,
  LANE,
  PKWY,
  "PKWY-N",
  "PKWY-S",
  PL,
  PLAZA,
  PT,
  RD,
  ST,
  "ST-E",
  TERRACE,
  TRAIL,
}

enum UsStates {
  Alabama = "AL",
  Alaska = "AK",
  Arizona = "AZ",
  Arkansas = "AR",
  California = "CA",
  Colorado = "CO",
  Connecticut = "CT",
  Delaware = "DE",
  DistrictOfColumbia = "DC",
  Florida = "FL",
  Georgia = "GA",
  Hawaii = "HI",
  Idaho = "ID",
  Illinois = "IL",
  Indiana = "IN",
  Iowa = "IA",
  Kansas = "KS",
  Kentucky = "KY",
  Louisiana = "LA",
  Maine = "ME",
  Maryland = "MD",
  Massachusetts = "MA",
  Michigan = "MI",
  Minnesota = "MN",
  Mississippi = "MS",
  Missouri = "MO",
  Montana = "MT",
  Nebraska = "NE",
  Nevada = "NV",
  NewHampshire = "NH",
  NewJersey = "NJ",
  NewMexico = "NM",
  NewYork = "NY",
  NorthCarolina = "NC",
  NorthDakota = "ND",
  Ohio = "OH",
  Oklahoma = "OK",
  Oregon = "OR",
  Pennsylvania = "PA",
  RhodeIsland = "RI",
  SouthCarolina = "SC",
  SouthDakota = "SD",
  Tennessee = "TN",
  Texas = "TX",
  Utah = "UT",
  Vermont = "VT",
  Virginia = "VA",
  Washington = "WA",
  WestVirginia = "WV",
  Wisconsin = "WI",
  Wyoming = "WY",
}

function es6ArrowFunction() {


  const addBar = foo => {
    return foo + "bar";
  };
  console.log(addBar("foo"));
  // prints: 'foobar'


}

function tsArrowFunction() {


  const addBar = (foo: string): string => {
    return foo + "bar";
  };
  console.log(addBar("foo"));
  // prints: 'foobar'


}

function es6Variables() {


  const foo = "foo";
  foo = "bar"; // not allowed

  let bar = "bar";
  bar = "foo";
  console.log(bar);
  // prints: 'foo'


}

function tsVariables() {


  const foo: string = "foo";
  foo = "bar"; // not allowed

  let bar: string = "bar";
  bar = "foo";
  console.log(bar);
  // prints: 'foo'


}

// Classes
function es6Class() {


  class Foo {
    addBar(foo) {
      return foo + "bar";
    }
  }

  const instance = new Foo();
  console.log(instance.addBar("foo"));
  // prints: 'foobar'


}

function tsClass() {


  interface IFoo {
    addBar(foo: string): string;
  }

  class Foo implements IFoo {
    addBar(foo: string): string {
      return foo + "bar";
    }
  }

  const instance: Foo = new Foo();
  console.log(instance.addBar("foo"));
  // prints: 'foobar'


}

function es6Destructuring() {
  
  
  const obj = { foo: "foo", bar: "bar" };
  const { foo, bar } = obj;
  console.log(foo, bar);
  // prints: 'foo', 'bar'


}

function tsDestructuring() {


  type FooBar = {
    foo: string,
    bar: string
  }

  const obj: FooBar = { foo: "foo", bar: "bar" };
  const { foo, bar } = obj;
  console.log(foo, bar);
  // prints: 'foo', 'bar'


}
