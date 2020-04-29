import { HTTPService } from './httpService.js';
import { TasksRepository } from './taskRepository.js';
import { PageService } from './pageService.js';
import { TaskRenderer } from './render/taskRenderer.js';
import { ContentRenderer } from './render/contentRenderer.js';
import { HeaderRenderer } from './render/headerRenderer.js';

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
pageService.renderPage();
