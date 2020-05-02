import { TasksRepository } from './repository/taskRepository.js';
import { HTTPService } from './services/httpService.js';
import { PageService } from './services/pageService.js';
import { ContentRenderer } from './render/contentRenderer.js';
import { HeaderRenderer } from './render/headerRenderer.js';
import { TaskRenderer } from './render/taskRenderer.js';
import { TaskRemoveAction } from './actions/taskRemoveAction.js';
import { TaskPostAction } from './actions/taskPostAction.js';
import { TaskDoneAction } from './actions/taskDoneAction.js';
import { TaskEditAction } from './actions/taskEditAction.js';
import { FoterRenderer } from './render/footerRenderer.js';

const classNames = {
  body: 'body',
};

const storageKey = {
  footerBlockTextKey: 'footer',
};

const button = {
  done: 'button-done',
  edit: 'button-edit',
  add: 'button-add',
  delete: 'button-delete',
};

const httpService = new HTTPService();
const taskRepository = new TasksRepository(httpService);
const taskRenderer = new TaskRenderer();
const contentRenderer = new ContentRenderer(taskRenderer);
const headerRenderer = new HeaderRenderer();
const footerRenderer = new FoterRenderer();
const rootNode = document.getElementsByTagName(classNames.body)[0];
const pageService = new PageService(
  taskRepository,
  rootNode,
  contentRenderer,
  headerRenderer,
  footerRenderer
);
const taskRemoveAction = new TaskRemoveAction(
  taskRepository,
  pageService.renderPage.bind(pageService)
);
const taskPostAction = new TaskPostAction(taskRepository, pageService.renderPage.bind(pageService));
const taskEditAction = new TaskEditAction(taskRepository, pageService.renderPage.bind(pageService));
const taskDoneAction = new TaskDoneAction(taskRepository, pageService.renderPage.bind(pageService));

pageService.renderPage(localStorage.getItem(storageKey.footerBlockTextKey)).then(() => {
  rootNode.addEventListener('click', () => {
    switch (event.target.classList[0]) {
      case button.delete:
        taskRemoveAction.onTaskRemove(event.target.classList[1]);
        break;
      case button.done:
        taskDoneAction.onTaskDone(event.target.classList[1]);
        break;
      case button.edit:
        taskEditAction.onTaskEdit(event.target.classList[1]);
        break;
      case button.add:
        taskPostAction.onTaskPosting();
        break;
    }
  });
});
