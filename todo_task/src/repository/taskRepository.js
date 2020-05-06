import { apiHost, taskStatus, method } from '../config/config.js';

export class TasksRepository {
  constructor(httpService) {
    this.httpSerivce = httpService;
<<<<<<< HEAD
=======
    this.apiHost = 'https://5e9162352810f4001648b889.mockapi.io/api/v1/tasks';
    this.method = {
      post: 'POST',
      delete: 'DELETE',
      put: 'PUT',
    };
    
    this.taskStatus = {
      done: 'true',
      inProgress: 'false',
    };
>>>>>>> ref: something went wrong
  }

  async getTasks() {
    return await this.httpSerivce.request(apiHost);
  }

  async postTasks(task) {
    return await this.httpSerivce.request(apiHost, task, method.post);
  }

  async doneTasks(id) {
    return await this.httpSerivce.request(
      `${this.apiHost}/${id}`,
      { done: taskStatus.done },
      method.put
    );
  }

  async editTasks(id, task) {
    return await this.httpSerivce.request(`${apiHost}/${id}`, task, method.put);
  }

  async removeTask(id) {
    await this.httpSerivce.request(`${apiHost}/${id}`, '', this.method.delete);
  }
}
