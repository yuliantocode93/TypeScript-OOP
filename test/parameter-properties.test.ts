describe("Parameter Properties", () => {
  class Person {
    constructor(public name: string) {}
  }

  it("should support", () => {
    const person = new Person("yuli");
    console.info(person.name);

    person.name = "anto";
    console.info(person.name);
  });
});
