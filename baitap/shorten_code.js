var elements = {};
var elementIds = ["tittle", "content", "footer", "btn"];

elementIds.forEach(function (item) {
  var element = document.getElementById(item);
  elements[item] = element;
});

elements.btn.onclick = function () {
  alert("Hello, world!");
};