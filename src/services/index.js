import { Http } from './Http'
import ThemesService from './themes/Themes.service'

export default {
  themes: () => new ThemesService(Http)
}