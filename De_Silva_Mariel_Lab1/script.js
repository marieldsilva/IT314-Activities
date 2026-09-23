const form = document.getElementById("student_form");
const studentList = document.getElementById("student_list");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("student_name").value;
  const program = document.getElementById("program").value;
  
  const card = document.createElement("div");
  card.className = "student_card";

  const nameHeading = document.createElement("h3");
  nameHeading.textContent = name;

  const programText = document.createElement("p");
  programText.textContent = program;

  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.textContent = "Remove";

  removeButton.addEventListener("click", function () {
    card.remove();
  });

  card.appendChild(nameHeading);
  card.appendChild(programText);
  card.appendChild(removeButton);
  studentList.appendChild(card);

  form.reset();
});
