import { TaskAction } from './taskAction.js';
import { button } from '../config/config.js';

export class EventsHandlerService {
  constructor(rootNode, taskRepository, renderPage) {
    this.rootNode = rootNode;
    this.taskAction = new TaskAction(taskRepository, renderPage);
  }

  onAction() {
    this.rootNode.addEventListener('click', () => {
      switch (event.target.classList.value) {
        case button.delete:
          this.taskAction.onTaskRemove(event.target.dataset.id);
          break;
        case button.done:
          this.taskAction.onTaskDone(event.target.dataset.id);
          break;
        case button.edit:
          this.taskAction.onTaskEdit(event.target.dataset.id);
          break;
        case button.add:
          this.taskAction.onTaskPosting();
          break;
      }
    });
  }
}
