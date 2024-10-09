//23. Tạo một lớp `Person` với các thuộc tính `name`, `age` và phương thức `greet()`.
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`${this.name}` + " " + `${this.age}`);
  }
}
const Longkute = new Person("Longkute", 24);
Longkute.greet();
