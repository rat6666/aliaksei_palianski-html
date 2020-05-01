export class TaskDoneAction {
  constructor(tasksRepository, onChange) {
    this.tasksRepository = tasksRepository;
    this.onChange = onChange;
    this.footerText = 'task done';
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
      localStorage.setItem('footer', this.footerText);
      this.onChange();
    });
  }
}
