export class TaskEditAction {
  constructor(tasksRepository, onChange) {
    this.tasksRepository = tasksRepository;
    this.onChange = onChange;
    this.storage = {
      key: 'footer',
      value: 'edited',
    };
  }

  onTaskEdit(taskId) {
    const inputTask = document.querySelector(`[class="input-todo ${taskId}"]`);
    inputTask.disabled = false;
    inputTask.value = inputTask.placeholder;
    inputTask.style.border = '1px solid rgb(15, 193, 206)';
    inputTask.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const newTask = document.querySelector(`[class="input-todo ${taskId}"]`).value;
        this.tasksRepository.editTasks(taskId, { task: newTask }).then(() => {
          inputTask.disabled = true;
          inputTask.style.border = 'none';
          location.reload();
          localStorage.setItem(this.storage.key, this.storage.value);
          this.onChange();
        });
      }
    });
  }
}
