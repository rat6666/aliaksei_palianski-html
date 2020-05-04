import { TasksRepository } from './repository/taskRepository.js';
import { EventsHandlerService } from './actions/eventsHandlerService.js';
import { HTTPService } from './repository/httpService.js';
import { PageService } from './render/pageService.js';
import { ContentRenderer } from './render/contentRenderer.js';
import { HeaderRenderer } from './render/headerRenderer.js';
import { FoterRenderer } from './render/footerRenderer.js';
import { TaskRenderer } from './render/taskRenderer.js';
import { storage } from './config/config.js';

const classNames = {
  body: 'body',
};

const footerText = localStorage.getItem(storage.key);

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
const eventsHandlerService = new EventsHandlerService(
  rootNode,
  taskRepository,
  pageService.renderPage
);

pageService.renderPage(footerText).then(() => {
  eventsHandlerService.onAction();
});
