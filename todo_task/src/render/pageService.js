import { storage } from "../config/config.js";

export class PageService {
  constructor(
    tasksRepository,
    rootNode,
    contentRenderer,
    headerRenderer,
    footerRenderer,
  ) {
    this.tasksRepository = tasksRepository;
    this.rootNode = rootNode;
    this.contentRenderer = contentRenderer;
    this.headerRenderer = headerRenderer;
    this.footerRenderer = footerRenderer;
  }

  async renderPage(footerText) {
    await this.tasksRepository.getTasks().then((tasks) => {
      this.taskList = tasks;
      localStorage.setItem(storage.key, storage.valueLoad);
      this.renderFooter(this.rootNode, footerText);
      this.renderContent(this.rootNode);
      this.renderHeader(this.rootNode);
    });
  }

  renderFooter(footerRootNode, footerText) {
    this.footerRenderer.renderFooter(footerRootNode, footerText);
  }

  renderHeader(headerRootNode) {
    let doneTasksCount = 0;
    this.taskList.forEach((element) => {
      if (!element.done) {
        doneTasksCount++;
      }
    });
    const inProgressTasksCount = this.taskList.length - doneTasksCount;
    this.headerRenderer.renderHeader(
      doneTasksCount,
      inProgressTasksCount,
      headerRootNode,
    );
  }

  renderContent(contentRootNode) {
    this.contentRenderer.renderTaskDoneSection(contentRootNode, this.taskList);
    this.contentRenderer.renderTaskInprogressSection(
      contentRootNode,
      this.taskList,
    );
    this.contentRenderer.renderAddSection(contentRootNode);
  }
}
