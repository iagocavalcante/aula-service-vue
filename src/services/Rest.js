export default class Rest {
  constructor (url, http) {
    this.url = url
    this.http = http
  }

  async list () {
    try {
      return await this.http.get(this.url)
    } catch (error) {
      throw Error(error, 'falha ao usar recurso list')
    }
  }

  async show ($id) {
    try {
      return await this.http.get(this.url, {
        params: $id
      })
    } catch (error) {
      throw Error(error, 'falha ao usar recurso show')
    }
  }
  
  async store ($data) {
    try {
      return await this.http.post(this.url, $data)
    } catch (error) {
      throw Error(error, 'falha ao usar recurso store')
    }
  }
  
  async update ($id, $data) {
    try {
      return await this.http.put(`${this.url}/${$id}`, $data)
    } catch (error) {
      throw Error(error, 'falha ao usar recurso update')
    }
  }
  async delete ($id) {
    try {
      return await this.http.put(`${this.url}/${$id}`)
    } catch (error) {
      throw Error(error, 'falha ao usar recurso delete')
    }
  }
}