function addTodo() {
  const task = inputTask.value;
  if (task.trim() == "") {
    alert("Không được để trống kí tự");
    return;
  }
  // tạo list danh sách
  const li = document.createElement("li");
  const textNode = document.createTextNode(task);
  li.appendChild(textNode);

  // thêm nút delete
  const deleteTodo = document.createElement("button");
  deleteTodo.textContent = "Delete";
  deleteTodo.onclick = function () {
    deleteTodo1(this);
  };

  //hiện nút delete trong li
  li.appendChild(deleteTodo);

  // thêm nút Edit
  const editTodo = document.createElement("button");
  editTodo.textContent = "Edit";
  editTodo.onclick = function () {
    editTodo1(this);
  };

  //hiện nút edit trong li
  li.appendChild(editTodo);

  // tạo sự kiện để cho nút delete và edit
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  // xuất ra list danh sách
  todoList.appendChild(li);
  // xoá giá trị sau khi nhập vào input
  inputTask.value = "";
}
// Hàm để xóa một to-do
function deleteTodo1(button) {
  const li = button.parentElement;
  todoList.removeChild(li);
}
// tạo hàm cho nút delete
function editTodo1(button) {
  const li = button.parentElement;
  // Lấy nội dung hiện tại
  const currentTask = li.firstChild.nodeValue;
  // Hiển thị hộp thoại nhập
  const newTask = prompt("Chỉnh sửa công việc:", currentTask);

  if (newTask && newTask.trim() !== "") {
    // Cập nhật nội dung mới
    li.firstChild.nodeValue = newTask;
  } else {
    alert("Vui lòng nhập một công việc hợp lệ.");
  }
}
