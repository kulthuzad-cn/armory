import {assert} from '../lib/assert';

export default {
  install(Vue, options) {
    Vue.prototype.$assert = assert
  }
}
