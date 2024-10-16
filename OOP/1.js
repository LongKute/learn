// Bài tập 1: Tạo lớp Học sinh
// Mục tiêu: Tạo một lớp Student có các thuộc tính như name, age, và grades. Thêm phương thức để:

// Tính điểm trung bình.
// In thông tin của học sinh.
// Yêu cầu:

// Tạo một đối tượng học sinh và thêm điểm số.
// Hiển thị điểm trung bình và thông tin học sinh.

class Student {
    constructor(name, age, grades) {
        this.name = name
        this.age = age
        this.grades = grades
    }
    
    calculate_Average(){
        
    }
    profile(){
        console.log(`Tên: ${this.name} `+ "\n" + `Tuổi: ${this.age} `+ "\n" + `xếp loại: ${this.age}`);
        
    }
}

const student = new Student("Longkute", 24, 'A')

student.profile()