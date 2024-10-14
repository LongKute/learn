//35. Viết một chương trình quản lý danh sách công việc (to-do list) với khả năng thêm, sửa và xóa công việc.

  // Hàm để thêm một to-do
function addTodo() {
    const task = todoInput.value;

    if (task.trim() === "") {
        alert("Vui lòng nhập một công việc.");
        return;
    }

    // Tạo phần tử <li> mới
    const li = document.createElement('li');
    const textNode = document.createTextNode(task); // Tạo nội dung cho <li>
    li.appendChild(textNode); // Thêm nội dung vào <li>

    // Tạo nút Delete
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        deleteTodo(this);
    };

    // Thêm nút Delete vào <li>
    li.appendChild(deleteButton);

    // Bắt sự kiện khi nhấn vào to-do để đánh dấu hoàn thành
    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    // Thêm li vào danh sách
    todoList.appendChild(li);

    // Xóa giá trị input sau khi thêm
    todoInput.value = '';
}

// Hàm để xóa một to-do
function deleteTodo(button) {
    const li = button.parentElement;
    todoList.removeChild(li);
}
