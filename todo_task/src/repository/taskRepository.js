export class TasksRepository {
  constructor(httpService) {
    this.httpSerivce = httpService;
    this.apiHost = 'https://5e9162352810f4001648b889.mockapi.io/api/v1/tasks';
    this.method = {
      post: 'POST',
      delete: 'DELETE',
      put: 'PUT',
    };
  }

  async getTasks() {
    return await this.httpSerivce.request(this.apiHost);
  }

  async postTasks(task) {
    return await this.httpSerivce.request(this.apiHost, task, this.method.post);
  }
  // editTask(task, newData)...

  async removeTask(id) {
    await this.httpSerivce.request(`${this.apiHost}/${id}`, '', this.method.delete);
  }
}
