class Task {
  constructor(options = {}) {
    let {
      taskName = "",
      taskDescription = "",
      taskStatus = "",
      startDate = "",
      dueDate = "",
      assignedUser = ""
    } = options;

    Object.assign(this, {
      taskName,
      taskDescription,
      taskStatus,
      startDate,
      dueDate,
      assignedUser,
    });
  }

  getRow() {
    return `<tr>
        <td>${this.taskName}</td>
        <td>${this.taskDescription}</td>
        <td>${this.taskStatus}</td>
        <td>${this.startDate}</td>
        <td>${this.dueDate}</td>
        <td>${this.assignedUser}</td>
        <td><button class="btn btn-light delete-task">Remove</button></td></tr>`;
  }
}