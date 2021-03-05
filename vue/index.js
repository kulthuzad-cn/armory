import {assert} from '../lib/assert';
import {d2l} from '../lib/dataToList';

export default {
  install(Vue, options) {
    Vue.prototype.$assert = assert;
    Vue.prototype.$d2l = d2l
  }
}
