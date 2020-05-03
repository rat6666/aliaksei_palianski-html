import { TasksRepository } from './repository/taskRepository.js';
import { HTTPService } from './services/httpService.js';
import { PageService } from './services/pageService.js';
import { EventsHandlerService } from './services/eventsHandlerService.js';
import { ContentRenderer } from './render/contentRenderer.js';
import { HeaderRenderer } from './render/headerRenderer.js';
import { TaskRenderer } from './render/taskRenderer.js';
import { FoterRenderer } from './render/footerRenderer.js';

const classNames = {
  body: 'body',
};

const storageKey = {
  footerBlockTextKey: 'footer',
};

const footerText = localStorage.getItem(storageKey.footerBlockTextKey);

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
  eventsHandlerService.onInit();
});
