describe("Instance Of", () => {
  class Employee {}
  class Manager {}

  const yuli = new Employee();
  const anto = new Manager();

  it("should have problem using typeof", () => {
    console.info(typeof yuli);
    console.info(typeof anto);
  });

  it("should support instanceof", () => {
    expect(yuli instanceof Employee).toBe(true);
    expect(yuli instanceof Manager).toBe(false);

    expect(anto instanceof Employee).toBe(false);
    expect(anto instanceof Manager).toBe(true);
  });
});
