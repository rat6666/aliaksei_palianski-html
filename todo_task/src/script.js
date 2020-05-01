import { HTTPService } from './services/httpService.js';
import { TasksRepository } from './repository/taskRepository.js';
import { PageService } from './services/pageService.js';
import { TaskRenderer } from './render/taskRenderer.js';
import { ContentRenderer } from './render/contentRenderer.js';
import { HeaderRenderer } from './render/headerRenderer.js';
import { TaskRemoveAction } from './actions/taskRemoveAction.js';
import { TaskPostAction } from './actions/taskPostAction.js';
import { TaskDoneAction } from './actions/taskDoneAction.js';
import { TaskEditAction } from './actions/taskEditAction.js';

const classNames = {
  body: 'body',
};
const httpService = new HTTPService();
const taskRepository = new TasksRepository(httpService);
const taskRenderer = new TaskRenderer();
const contentRenderer = new ContentRenderer(taskRenderer);
const headerRenderer = new HeaderRenderer();
const rootNode = document.getElementsByTagName(classNames.body)[0];
const pageService = new PageService(taskRepository, rootNode, contentRenderer, headerRenderer);

pageService.renderPage().then(() => {
  const taskRemoveAction = new TaskRemoveAction(
    taskRepository,
    pageService.renderPage.bind(pageService)
  );
  const removeButtons = pageService.getRemoveButtons();
  taskRemoveAction.applyTo(removeButtons);

  const taskPostAction = new TaskPostAction(
    taskRepository,
    pageService.renderPage.bind(pageService)
  );
  taskPostAction.applyTo();

  const taskDoneAction = new TaskDoneAction(
    taskRepository,
    pageService.renderPage.bind(pageService)
  );
  const doneButtons = pageService.getDoneButtons();
  taskDoneAction.applyTo(doneButtons);

  const taskEditAction = new TaskEditAction(
    taskRepository,
    pageService.renderPage.bind(pageService)
  );
  const editButtons = pageService.getEditButtons();
  taskEditAction.applyTo(editButtons);
});
