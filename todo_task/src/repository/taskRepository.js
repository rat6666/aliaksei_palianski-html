export class TasksRepository {
  constructor(httpService) {
    this.httpSerivce = httpService;
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
  }

  async getTasks() {
    return await this.httpSerivce.request(this.apiHost);
  }

  async postTasks(task) {
    return await this.httpSerivce.request(this.apiHost, task, this.method.post);
  }

  async doneTasks(id) {
    return await this.httpSerivce.request(
      `${this.apiHost}/${id}`,
      { done: this.taskStatus.done },
      this.method.put
    );
  }

  async editTasks(id, task) {
    return await this.httpSerivce.request(`${this.apiHost}/${id}`, task, this.method.put);
  }

  async removeTask(id) {
    await this.httpSerivce.request(`${this.apiHost}/${id}`, '', this.method.delete);
  }
}
