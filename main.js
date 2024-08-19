// Array to store task objects
let tasks = [
  {
    title: "Book",
    date: "2024-02-01",
    isDone: false,
  },
  {
    title: "Funny",
    date: "2024-11-04",
    isDone: true,
  },
  {
    title: "Happy",
    date: "2024-07-08",
    isDone: false,
  },
];

// Function to fill tasks on the page
function fillTasksOnThePage() {
  // Clear the current tasks displayed on the page
  document.getElementById("tasks").innerHTML = "";

  let index = 0;
  // Loop through each task in the tasks array
  for (let task of tasks) {
    // Create the HTML content for each task
    let content = `
          <!-- Task -->
          <div class="task ${task.isDone ? "task-done" : ""}">
                <div class="task-actions">
                      <button onclick="editTask(${index})" style="background-color: #3771e0;" class="btn-style"><span class="material-symbols-outlined">
                                  edit
                            </span></button>
                        ${
                          task.isDone
                            ? `
                          <button onclick=" toggleTaskCompletion(${index})" style="background-color: green;"  class="btn-style">
                            <span class="material-symbols-outlined">
                                  cancel
                            </span>
                      </button>
                          `
                            : `
                          <button onclick=" toggleTaskCompletion(${index})" style="background-color: #e1760b;"  class="btn-style">
                            <span class="material-symbols-outlined">
                                  check
                            </span>
                      </button>
                      `
                        }    
                      
                      <button  style="background-color: red;" onclick="deleteTask(${index})" class="btn-style"><span class="material-symbols-outlined">
                                  delete
                            </span></button>
                </div>
                <!--------------------------------->
                <div class="task-details">
                      <h3>${task.title}</h3>
                      <span class="material-symbols-outlined">
                            calendar_month
                      </span>
                      <span class="date">${task.date}</span>
                </div>
                <!--------------------------------->
          </div>
          <!-- End task -->`;
    // Append the task content to the tasks container
    document.getElementById("tasks").innerHTML += content;
    index++;
  }
}

// Initial call to fill tasks on the page
fillTasksOnThePage();

// Event listener for the "Add" button to create a new task
document.getElementById("add-btn").addEventListener("click", function () {
  // Prompt the user to input the task title
  let taskTitle = prompt("Input task title: ");

  // Get the current date and format it as YYYY-MM-DD
  let now = new Date();
  let date =
    now.getFullYear() +
    "-" +
    String(now.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(now.getDate()).padStart(2, "0");

  // Create a new task object with the input title and current date
  let taskObj = {
    title: taskTitle,
    date: date,
    isDone: false,
  };

  // Add the new task to the tasks array
  tasks.push(taskObj);

  // Refresh the tasks displayed on the page
  fillTasksOnThePage();
});

// Delete task
function deleteTask(index) {
  let task = tasks[index];
  let isConfirmed = confirm("Delete this task: " + task.title);
  if (isConfirmed) {
    tasks.splice(index, 1);
    fillTasksOnThePage();
  }
}

//  Edit task
function editTask(index) {
  let task = tasks[index];
  let newTaskTitle = prompt("Add new name for task: ", task.title);
  task.title = newTaskTitle;
  fillTasksOnThePage();
}

// Check task -  completeTask
function toggleTaskCompletion(index) {
  let task = tasks[index];
  // if (task.isDone) {
  //   task.isDone = false;
  // } else {
  //   task.isDone = true;
  // }
  task.isDone = !task.isDone;
  fillTasksOnThePage();
}
