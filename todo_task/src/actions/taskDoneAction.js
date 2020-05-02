export class TaskDoneAction {
  constructor(tasksRepository, onChange) {
    this.tasksRepository = tasksRepository;
    this.onChange = onChange;
    this.storage = {
      key: 'footer',
      value: 'Done',
    };
  }

  onTaskDone(taskId) {
    this.tasksRepository.doneTasks(taskId).then(() => {
      location.reload();
      localStorage.setItem(this.storage.key, this.storage.value);
      this.onChange();
    });
  }
}
