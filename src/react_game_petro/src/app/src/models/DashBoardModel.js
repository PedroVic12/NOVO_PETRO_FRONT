// src/models/DashboardModel.js

class DashboardModel {
  constructor() {
    this.data = {
      users: 100,
      orders: 50,
      revenue: 10000,
    };
  }

  getData() {
    return this.data;
  }
}

export default DashboardModel;
