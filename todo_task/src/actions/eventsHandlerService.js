import { TaskAction } from './taskAction.js';
import { button } from '../config/config.js';

export class EventsHandlerService {
  constructor(rootNode, taskRepository, renderPage) {
    this.rootNode = rootNode;
    this.taskAction = new TaskAction(taskRepository, renderPage);
  }

  onAction() {
    this.rootNode.addEventListener('click', () => {
      console.log(event.target.classList);
      switch (event.target.classList[0]) {
        case button.delete:
          this.taskAction.onTaskRemove(event.target.classList[1]);
          break;
        case button.done:
          this.taskAction.onTaskDone(event.target.classList[1]);
          break;
        case button.edit:
          this.taskAction.onTaskEdit(event.target.classList[1]);
          break;
        case button.add:
          this.taskAction.onTaskPosting();
          break;
      }
    });
  }
}
