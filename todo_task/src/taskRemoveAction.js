export class TaskRemoveAction {
  constructor(tasksRepository) {
    this.tasksRepository = tasksRepository;
  }

  applyTo(nodes) {
    for (const element of nodes) {
      element.addEventListener('click', () => {
        this.onTaskRemoving(this.tasksRepository);
      });
    }
  }

  onTaskRemoving(tasksRepository) {
    const taskId = event.target.classList[2];
    tasksRepository.removeTask(taskId).then(() => {
      const htmlElementsForDelete = document.getElementsByClassName(taskId);
      for (let i = 0; i < htmlElementsForDelete.length; i++) {
        htmlElementsForDelete[i].remove();
      }
    });
  }
}
