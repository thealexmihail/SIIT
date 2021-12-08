$("table").on("click", "#delete-task", function () {
  $(this).closest("tr").remove();
});

$(document).ready(function () {
  var allTasks;

  function createTable(tasks) {
    tasks.forEach(
      ({
        taskName,
        taskDescription,
        status,
        startDate,
        dueDate,
        assignedUser,
      }) => {
        var row = `<tr>
        <td>${taskName}</td>
        <td>${taskDescription}</td>
        <td>${status}</td>
        <td>${startDate}</td>
        <td>${dueDate}</td>
        <td>${assignedUser}</td>
        <td><button id="delete-task" class="btn btn-light">Remove</button></td></tr>`;
        $("#task-list tbody").append(row);
      }
    );
    allTasks = tasks;
  }

  function onError(error) {
    console.log("Error: ", error);
  }

  $.ajax("/tasks.json", {
    method: "GET",
    success: createTable,
    error: onError,
  });

  $("#add-task").on("click", function () {
    var task = {
      taskName: $("#task-name").val(),
      taskDescription: $("#task-description").val(),
      status: $("#task-status :selected").text(),
      startDate: $("#start-date").val(),
      dueDate: $("#due-date").val(),
      assignedUser: $("#user-name").val(),
    };

    var tableBody = $("#task-list > tbody");
    var row = `<tr>
                    <td>${task.taskName}</td>
                    <td>${task.taskDescription}</td>
                    <td>${task.status}</td>
                    <td>${task.startDate}</td>
                    <td>${task.dueDate}</td>
                    <td>${task.assignedUser}</td>
                    <td><span><button id="delete-task" class="btn btn-light">Remove</button></span></td>
               </tr>`;
    tableBody.append(row);
    allTasks.push(task);
  });
});
