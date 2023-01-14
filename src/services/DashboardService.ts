class DashboardService {
  async getInfo() {
    const response = await fetch(
      'https://laravel-production-9bb9.up.railway.app/api/dashboard'
    ).then((r) => r.json());
    return response.data;
  }
}

export default new DashboardService();
