export class PageService {
  constructor(tasksRepository, rootNode, contentRenderer, headerRenderer, footerRenderer) {
    this.tasksRepository = tasksRepository;
    this.rootNode = rootNode;
    this.contentRenderer = contentRenderer;
    this.headerRenderer = headerRenderer;
    this.footerRenderer = footerRenderer;
    this.button = {
      add: 'add',
      done: 'done',
      edit: 'edit',
      delete: 'button delete',
    };
    this.storage = {
      key: 'footer',
      value: 'Loaded',
    };
  }

  async renderPage(footerText) {
    await this.tasksRepository.getTasks().then((tasks) => {
      this.taskList = tasks;
      localStorage.setItem(this.storage.key, this.storage.value);
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
    this.headerRenderer.renderHeader(doneTasksCount, inProgressTasksCount, headerRootNode);
  }

  renderContent(contentRootNode) {
    this.contentRenderer.renderTaskDoneSection(contentRootNode, this.taskList);
    this.contentRenderer.renderTaskInprogressSection(contentRootNode, this.taskList);
    this.contentRenderer.renderAddSection(contentRootNode);
  }

  getRemoveButtons() {
    return document.getElementsByClassName(this.button.delete);
  }

  getDoneButtons() {
    return document.getElementsByClassName(this.button.done);
  }

  getEditButtons() {
    return document.getElementsByClassName(this.button.edit);
  }
}
