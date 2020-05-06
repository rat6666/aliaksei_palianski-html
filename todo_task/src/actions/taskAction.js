import { storage, selector } from "../config/config.js";

export class TaskAction {
  constructor(tasksRepository, renderPage) {
    this.tasksRepository = tasksRepository;
    this.renderPage = renderPage;
  }

  onTaskDone(taskId) {
    this.tasksRepository.doneTasks(taskId).then(() => {
      this.onDone(storage.valueDone);
    });
  }

  onTaskRemove(taskID) {
    this.tasksRepository.removeTask(taskID).then(() => {
      this.onDone(storage.valueDelete);
    });
  }

  onTaskPosting() {
    const newTask = document.querySelector(selector.inputAdd).value;
    this.tasksRepository.postTasks({ task: newTask }).then(() => {
      this.onDone(storage.valuePost);
    });
  }

  onTaskEdit(taskId) {
    const inputTask = document.querySelector(selector.inputTodo);
    inputTask.disabled = false;
    inputTask.value = inputTask.placeholder;
    inputTask.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        this.tasksRepository
          .editTasks(taskId, { task: inputTask.value })
          .then(() => {
            inputTask.disabled = true;
            this.onDone(storage.valueEdit);
          });
      }
    });
  }

  onDone(footerText) {
    location.reload();
    localStorage.setItem(storage.key, footerText);
    this.renderPage();
  }
}
