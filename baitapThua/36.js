//36. Tạo một lớp `Student` kế thừa từ lớp `Person` và thêm thuộc tính `grade`.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`${this.name}` + "  " + `có số tuổi là: ${this.age}`);
  }
}

// lớp Student kế thừa từ Person
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
  study() {
    console.log(`${this.name} đang học với kết quả là: ${this.grade}`);
  }
}

const student = new Student("Alice", 20, "A");

student.greet();
student.study();
