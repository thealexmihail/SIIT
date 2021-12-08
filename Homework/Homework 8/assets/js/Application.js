function Application() {
  this.name = "Task list";
  this.tableElement = $("#task-list");
  this.tableBodyElement = $("#task-list").find("tbody");
  this.formElement = $("#task-form");
  this.formSearch = $("#search-form");
  this.taskList = [];
}

Application.prototype = {
  init: function () {
    this._addEventListeners();
    this.loadTasks();
  },

  _onRemoveButton: function () {
    $(this).closest("tr").remove();
  },

  getFormValues: function (newTask) {
    Application.call(this);
    var newTask = new Task(
      (taskName = $("#task-name").val()),
      (taskDescription = $("#task-description").val()),
      (taskStatus = $("#task-status :selected").text()),
      (startDate = $("#start-date").val()),
      (dueDate = $("#due-date").val()),
      (assignedUser = $("#user-name").val())
    );
    var row = newTask.getRow();
    this.tableBodyElement.append(row);
    this.taskList.push(newTask);
  },

  _addEventListeners: function () {
    this.tableElement.on("click", ".delete-task", this._onRemoveButton);
    this.formElement.on("click", "#add-task", this.getFormValues);
    this.formSearch.on("keyup", "#search-name", this._render);
  },

  loadTasks: function () {
    $.ajax({
      method: "GET",
      url: "/data/tasks.json",
      success: (tasks) => this.createTable(tasks),
      error: this.onError,
    });
  },

  _render: function (filterText = "") {
    this.destroyTable();
    this.taskList
      .filter(
        (item) =>
          !filterText || (filterText && item.taskName.includes(filterText))
      )
      .forEach((task) => {
        var row = task.getRow();
        this.tableBodyElement.append(row);
      });
    console.log(valuefromform);
  },

  onError: function (textStatus) {
    console.log("textStatus: ", textStatus);
  },

  destroyTable: function () {
    this.tableBodyElement.empty();
    clearInterval(this.interval);
  },

  createTable: function (tasks) {
    tasks.forEach(
      ({
        taskName,
        taskDescription,
        status,
        startDate,
        dueDate,
        assignedUser,
      }) => {
        var task = new Task(
          taskName,
          taskDescription,
          status,
          startDate,
          dueDate,
          assignedUser
        );
        this.taskList.push(task);
      }
    );
    this._render();
  },
};
