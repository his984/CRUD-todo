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
    isDone: false,
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

  // Loop through each task in the tasks array
  for (task of tasks) {
    // Create the HTML content for each task
    let content = `
          <!-- Task -->
          <div class="task">
                <div class="task-actions">
                      <button class="btn-style"><span class="material-symbols-outlined">
                                  edit
                            </span></button>
                      <button class="btn-style">
                            <span class="material-symbols-outlined">
                                  check
                            </span>
                      </button>
                      <button class="btn-style"><span class="material-symbols-outlined">
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