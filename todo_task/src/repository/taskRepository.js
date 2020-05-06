import {apiHost, method, taskStatus} from '../config/config.js';

export class TasksRepository {
  constructor(httpService) {
    this.httpSerivce = httpService;
  }

  async getTasks() {
    return await this.httpSerivce.request(apiHost);
  }

  async postTasks(task) {
    return await this.httpSerivce.request(apiHost, task, method.post);
  }

  async doneTasks(id) {
    return await this.httpSerivce.request(
      `${apiHost}/${id}`,
      { done: taskStatus.done },
      method.put
    );
  }

  async editTasks(id, task) {
    return await this.httpSerivce.request(`${apiHost}/${id}`, task, method.put);
  }

  async removeTask(id) {
    await this.httpSerivce.request(`${apiHost}/${id}`, '', method.delete);
  }
}
