import Rest from '@/services/Rest'

export default class ThemesService extends Rest {
  constructor (http) {
    super('/posts', http)
  }
}