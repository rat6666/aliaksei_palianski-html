import { TaskRemoveAction } from '../actions/taskRemoveAction.js';
import { TaskPostAction } from '../actions/taskPostAction.js';
import { TaskDoneAction } from '../actions/taskDoneAction.js';
import { TaskEditAction } from '../actions/taskEditAction.js';

const button = {
  done: 'button-done',
  edit: 'button-edit',
  add: 'button-add',
  delete: 'button-delete',
};

export class EventsHandlerService {
  constructor(rootNode, taskRepository, renderPage) {
    this.rootNode = rootNode;
    // this.taskRepository = taskRepository;
    // this.renderPage = renderPage;
    this.taskRemoveAction = new TaskRemoveAction(taskRepository, renderPage);
    this.taskPostAction = new TaskPostAction(taskRepository, renderPage);
    this.taskEditAction = new TaskEditAction(taskRepository, renderPage);
    this.taskDoneAction = new TaskDoneAction(taskRepository, renderPage);
  }

  onInit() {
    this.rootNode.addEventListener('click', () => {
      switch (event.target.classList[0]) {
        case button.delete:
          this.taskRemoveAction.onTaskRemove(event.target.classList[1]);
          break;
        case button.done:
          this.taskDoneAction.onTaskDone(event.target.classList[1]);
          break;
        case button.edit:
          this.taskEditAction.onTaskEdit(event.target.classList[1]);
          break;
        case button.add:
          this.taskPostAction.onTaskPosting();
          break;
      }
    });
  }
}
