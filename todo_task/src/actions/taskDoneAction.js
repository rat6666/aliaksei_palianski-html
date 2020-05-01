export class TaskDoneAction {
  constructor(tasksRepository, onChange) {
    this.tasksRepository = tasksRepository;
    this.onChange = onChange;
    this.storage = {
      key: 'footer',
      value: 'Done',
    };
  }

  applyTo(nodes) {
    for (const element of nodes) {
      element.addEventListener('click', this.onTaskDone.bind(this));
    }
  }

  onTaskDone() {
    const taskId = event.target.classList[2];
    this.tasksRepository.doneTasks(taskId).then(() => {
      location.reload();
      localStorage.setItem(this.storage.key, this.storage.value);
      this.onChange();
    });
  }
}
