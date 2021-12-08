function Task(
  taskName,
  taskDescription,
  taskStatus,
  startDate,
  dueDate,
  assignedUser
) {
  this.taskName = taskName;
  this.taskDescription = taskDescription;
  this.taskStatus = taskStatus;
  this.startDate = startDate;
  this.dueDate = dueDate;
  this.assignedUser = assignedUser;
}

Task.prototype = {
  getRow: function () {
    return `<tr>
        <td>${this.taskName}</td>
        <td>${this.taskDescription}</td>
        <td>${this.taskStatus}</td>
        <td>${this.startDate}</td>
        <td>${this.dueDate}</td>
        <td>${this.assignedUser}</td>
        <td><button class="btn btn-light delete-task">Remove</button></td></tr>`;
  },
};
