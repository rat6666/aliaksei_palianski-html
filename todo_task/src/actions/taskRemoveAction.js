export class TaskRemoveAction {
  constructor(tasksRepository, onChange) {
    this.tasksRepository = tasksRepository;
    this.onChange = onChange;
    this.storage = {
      key: 'footer',
      value: 'deleted',
    };
  }

  applyTo(nodes) {
    for (const element of nodes) {
      element.addEventListener('click', this.onTaskRemoving.bind(this));
    }
  }

  onTaskRemoving() {
    const taskId = event.target.classList[2];
    this.tasksRepository.removeTask(taskId).then(() => {
      location.reload();
      localStorage.setItem(this.storage.key, this.storage.value);
      this.onChange();
    });
  }
}
