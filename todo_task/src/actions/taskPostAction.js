export class TaskPostAction {
  constructor(tasksRepository, onChange) {
    this.tasksRepository = tasksRepository;
    this.onChange = onChange;
    this.footerText = 'added';
  }

  applyTo() {
    const addButton = document.querySelector('[class="button add"]');
    addButton.addEventListener('click', this.onTaskPosting.bind(this));
  }

  onTaskPosting() {
    const newTask = document.querySelector('[class="input-add"]').value;
    this.tasksRepository.postTasks({ task: newTask }).then(() => {
      location.reload();
      localStorage.setItem('footer', this.footerText);
      this.onChange();
    });
  }
}
