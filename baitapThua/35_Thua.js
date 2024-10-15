//35. Viết một chương trình quản lý danh sách công việc (to-do list) với khả năng thêm, sửa và xóa công việc.

// Hàm để thêm một to-do
function addTodo() {
  const task = inputTask.value;

  if (task.trim() === "") {
    alert("Vui lòng nhập một công việc.");
    return;
  }

  // Tạo phần tử <li> mới
  const li = document.createElement("li");
  const textNode = document.createTextNode(task); // Tạo nội dung cho <li>
  li.appendChild(textNode); // Thêm nội dung vào <li>

  // Tạo nút Edit
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.onclick = function () {
    editTodo(this);
  };

  // Thêm nút Edit vào <li>
  li.appendChild(editButton);

  // Tạo nút Delete
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.onclick = function () {
    deleteTodo(this);
  };

  // Thêm nút Delete vào <li>
  li.appendChild(deleteButton);

  // Bắt sự kiện khi nhấn vào to-do để đánh dấu hoàn thành
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  // Thêm li vào danh sách
  todoList.appendChild(li);

  // Xóa giá trị input sau khi thêm
  inputTask.value = "";
}

// Hàm để xóa một to-do
function deleteTodo(button) {
  const li = button.parentElement;
  todoList.removeChild(li);
}
// hàm thay đổi giá trị li
function editTodo(button) {
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
