interface Describable {
  describe(): void;
}

class Person {
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
  }

  public describe(): void {
      console.log(`${this.name}, age ${this.age}`);
  }
}

class Employee extends Person implements Describable {
  public position: string;
  public salary: number;

  constructor(name: string, age: number, position: string, salary: number) {
      super(name, age);
      this.position = position;
      this.salary = salary;
  }

  public describe(): void {
      console.log(`${this.name}, age ${this.age}, works as a ${this.position} with a salary of ${this.salary}`);
  }
}

const employee = new Employee("John", 30, "Manager", 50000);
employee.describe();


