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
  li.appendChild(deleteTodo);
  // thêm nút Edit
  const editTodo = document.createElement("button");
  editTodo.textContent = "Edit";
  li.appendChild(editTodo);


  // xuất ra list danh sách 
    todoList.appendChild(li);
  // xoá giá trị sau khi nhập vào input
    inputTask.value = "";   
}
