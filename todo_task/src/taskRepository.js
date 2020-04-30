export class TasksRepository {
  constructor(httpService) {
    this.httpSerivce = httpService;
    this.apiHost = 'https://5e9162352810f4001648b889.mockapi.io/api/v1/tasks';
  }

  async getTasks() {
    return await this.httpSerivce.request(this.apiHost);
  }
  // editTask(task, newData)...

  async removeTask(id) {
    await this.httpSerivce.request(`${this.apiHost}/${id}`, '', 'DELETE');
  }
}
