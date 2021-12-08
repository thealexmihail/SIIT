const getTasks = new Promise((resolve, reject) => {
  $.ajax({
    method: "GET",
    url: "/data/tasks.json",
    success: function (tasks) {
      resolve(tasks);
    },
    error: function (textStatus) {
      reject(textStatus);
    },
  });
})

class Application {
  constructor(name) {
    this.name = name;
    this.tableElement = $("#task-list");
    this.tableBodyElement = $("#task-list").find("tbody");
    this.formElement = $("#task-form");
    this.formSearch = $("#search-form");
    this.taskList = [];
  }

  init() {
    this._addEventListeners();
    this.loadTasks();
  }

  _onRemoveButton() {
    $(this).closest("tr").remove();
  }

  getFormValues() {
    let options = {
      taskName: $("#task-name").val(),
      taskDescription: $("#task-description").val(),
      startDate: $("#start-date").val(),
      taskStatus: $("#task-status :selected").text(),
      dueDate: $("#due-date").val(),
      assignedUser: $("#user-name").val(),
    };

    let task = new Task(options);
    this.taskList.push(task);

    let row = task.getRow();
    this.tableBodyElement.append(row);
    this._render();
  }

  _addEventListeners() {
    this.tableElement.on("click", ".delete-task", this._onRemoveButton);
    this.formElement.on("click", "#add-task", () => { this.getFormValues() });
    this.formSearch.on("keyup", (event) => {
      let searchResult = event.target.value;
      this._render(searchResult);
    });
  }

  async loadTasks() {
    try {
      const tasks = await getTasks;
      this.createTable(tasks);
    } catch (err) {
      console.error(err);
    }
  }

  _render(filterText) {
    this.destroyTable();
    if (filterText) {
      this.tableBodyElement.empty();
      let filteredTasks = this.taskList.filter((item) =>
        item.taskName.toLowerCase().includes(filterText.toLowerCase())
      );
      filteredTasks.forEach((task) => {
        let row = task.getRow();
        this.tableBodyElement.append(row);
      });
    } else {
      this.tableBodyElement.empty();
      this.taskList.forEach((task) => {
        let row = task.getRow();
        this.tableBodyElement.append(row);
      });
    }
  }

  destroyTable() {
    this.tableBodyElement.empty();
    clearInterval(this.interval);
  }

  createTable(tasks) {
    tasks.forEach(
      ({
        taskName,
        taskDescription,
        taskStatus,
        startDate,
        dueDate,
        assignedUser,
      }) => {
        let options = {
          taskName,
          taskDescription,
          taskStatus,
          startDate,
          dueDate,
          assignedUser
        };
        let task = new Task(options);
        this.taskList.push(task);
      }
    );
    this._render();
  }
}