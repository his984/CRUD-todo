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
  {
    title: "Test",
    date: "2022-07-08",
    isDone: true,
  },
];
document.getElementById("tasks").innerHTML = "";
for (task of tasks) {
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
  document.getElementById("tasks").innerHTML += content;
}
