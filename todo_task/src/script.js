import { HTTPService } from './httpService.js';
import { TasksRepository } from './taskRepository.js';
import { PageService } from './pageService.js';
import { TaskRenderer } from './render/taskRenderer.js';
import { ContentRenderer } from './render/contentRenderer.js';

// const apiHost = 'https://5e9162352810f4001648b889.mockapi.io/api/v1/tasks';
const classNames = {
  body: 'body',
};
const httpService = new HTTPService();
const taskRepository = new TasksRepository(httpService);
const taskRenderer = new TaskRenderer();
const contentRenderer = new ContentRenderer(taskRenderer);
const rootNode = document.getElementsByTagName(classNames.body)[0];
const pageService = new PageService(taskRepository, rootNode, contentRenderer);
pageService.renderPage();
