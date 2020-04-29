export class PageService {
  constructor(tasksRepository, rootNode, contentRenderer) {
    this.tasksRepository = tasksRepository;
    this.rootNode = rootNode;
    this.contentRenderer = contentRenderer;
  }

  async renderPage() {
    await this.tasksRepository.getTasks().then((tasks) => {
      this.taskList = tasks;
      this.renderContent(this.rootNode);
    });
  }

  renderContent(contentRootNode) {
    this.contentRenderer.renderTaskDoneSection(contentRootNode, this.taskList);
    this.contentRenderer.renderTaskInprogressSection(contentRootNode, this.taskList);
  }
}
