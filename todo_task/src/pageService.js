export class PageService {
  constructor(tasksRepository, rootNode, contentRenderer, headerRenderer) {
    this.tasksRepository = tasksRepository;
    this.rootNode = rootNode;
    this.contentRenderer = contentRenderer;
    this.headerRenderer = headerRenderer;
  }

  async renderPage() {
    await this.tasksRepository.getTasks().then((tasks) => {
      this.taskList = tasks;
      this.renderContent(this.rootNode);
      this.renderHeader(this.rootNode);
    });
  }

  renderHeader(headerRootNode) {
    let doneTasksCount = 0;
    this.taskList.forEach((element) => {
      if (element.done) {
        doneTasksCount++;
      }
    });
    const inProgressTasksCount = this.taskList.length - doneTasksCount;
    this.headerRenderer.renderHeader(doneTasksCount, inProgressTasksCount, headerRootNode);
  }

  renderContent(contentRootNode) {
    this.contentRenderer.renderTaskDoneSection(contentRootNode, this.taskList);
    this.contentRenderer.renderTaskInprogressSection(contentRootNode, this.taskList);
    this.contentRenderer.renderAddSection(contentRootNode);
  }
}
