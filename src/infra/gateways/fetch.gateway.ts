export abstract class FetchGateway {
  private BASE_URL = 'https://jsonplaceholder.typicode.com/'

  async get(query: string) {
    const response = await fetch(this.BASE_URL + query)
    return response.json()
  }
}
