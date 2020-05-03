export class TaskAction {
  constructor(tasksRepository, onChange) {
    this.tasksRepository = tasksRepository;
    this.onChange = onChange;
    this.storage = {
      key: 'footer',
      valueDone: 'Done',
      valueEdit: 'Edit',
      valuePost: 'Post',
      valueDelete: 'Delete',
    };
  }

  onTaskDone(taskId) {
    this.tasksRepository.doneTasks(taskId).then(() => {
      this.onDone(this.storage.valueDone);
    });
  }

  onTaskRemove(taskID) {
    this.tasksRepository.removeTask(taskID).then(() => {
      this.onDone(this.storage.valueDelete);
    });
  }

  onTaskPosting() {
    const newTask = document.querySelector('[class="input-add"]').value;
    this.tasksRepository.postTasks({ task: newTask }).then(() => {
      this.onDone(this.storage.valuePost);
    });
  }

  onTaskEdit(taskId) {
    const inputTask = document.querySelector(`[class="input-todo ${taskId}"]`);
    inputTask.disabled = false;
    inputTask.value = inputTask.placeholder;
    inputTask.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const newTask = document.querySelector(`[class="input-todo ${taskId}"]`).value;
        this.tasksRepository.editTasks(taskId, { task: newTask }).then(() => {
          inputTask.disabled = true;
          this.onDone(this.storage.valueEdit);
        });
      }
    });
  }

  onDone(footerText) {
    location.reload();
    localStorage.setItem(this.storage.key, footerText);
    this.onChange();
  }
}
