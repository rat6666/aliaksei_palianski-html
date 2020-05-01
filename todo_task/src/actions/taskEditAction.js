export class TaskEditAction {
  constructor(tasksRepository, onChange) {
    this.tasksRepository = tasksRepository;
    this.onChange = onChange;
  }

  applyTo(nodes) {
    for (const element of nodes) {
      element.addEventListener('click', this.onTaskEdit.bind(this));
    }
  }

  onTaskEdit() {
    const taskId = event.target.classList[2];
    this.tasksRepository.doneTasks(taskId).then(() => {
      location.reload();
      this.onChange();
    });
  }
}
