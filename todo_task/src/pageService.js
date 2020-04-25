export class PageService {
  constructor(tasksRepository, rootNode, contentRenderer) {
    this.tasksRepository = tasksRepository;
    this.rootNode = rootNode;
    this.contentRenderer = contentRenderer;
  }

  async renderPage() {
    await this.tasksRepository.getTasks().then((tasks) => {
      this.taskList = tasks;
      console.log(this.taskList);
      this.renderContent(this.rootNode);
    });
  }

  renderContent(contentRootNode) {
    const inProgressTasksSectionRoot = contentRootNode;
    const taskInProgress = this.taskList[0];
    console.log(taskInProgress, this.rootNode);
    this.contentRenderer.renderTaskInprogressSection(inProgressTasksSectionRoot, taskInProgress);
  }
}
