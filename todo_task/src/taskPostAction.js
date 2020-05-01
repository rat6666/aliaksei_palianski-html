export class TaskPostAction {
  constructor(tasksRepository, onChange) {
    this.tasksRepository = tasksRepository;
    this.onChange = onChange;
  }

  applyTo() {
    const addButton = document.querySelector('[class="button add"]');
    addButton.addEventListener('click', this.onTaskPosting.bind(this));
  }

  onTaskPosting() {
    const newTask = document.querySelector('[class="input-add"]').value;
    this.tasksRepository.postTasks(newTask).then(() => {
      location.reload();
      this.onChange();
    });
  }
}
