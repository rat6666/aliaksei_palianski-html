export class TaskRemoveAction {
  constructor(tasksRepository, onChange) {
    this.tasksRepository = tasksRepository;
    this.onChange = onChange;
    this.storage = {
      key: 'footer',
      value: 'deleted',
    };
  }

  onTaskRemove(taskID) {
    this.tasksRepository.removeTask(taskID).then(() => {
      location.reload();
      localStorage.setItem(this.storage.key, this.storage.value);
      this.onChange();
    });
  }
}
