export class TaskPostAction {
  constructor(tasksRepository, onChange) {
    this.tasksRepository = tasksRepository;
    this.onChange = onChange;
    this.storage = {
      key: 'footer',
      value: 'added',
    };
  }

  onTaskPosting() {
    const newTask = document.querySelector('[class="input-add"]').value;
    this.tasksRepository.postTasks({ task: newTask }).then(() => {
      location.reload();
      localStorage.setItem(this.storage.key, this.storage.value);
      this.onChange();
    });
  }
}
