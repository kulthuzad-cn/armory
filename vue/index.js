import {assert} from '../lib/assert';
import {d2l} from '../lib/dataToList';
import arrExtend from '../lib/arrayExtend';
import stringExtend from '../lib/stringExtend';
import dateExtend from '../lib/dateExtend';

export default {
  install(Vue, options) {
    Vue.prototype.$assert = assert;
    Vue.prototype.$d2l = d2l;
    Vue.prototype.$arr = arrExtend
    Vue.prototype.$str = stringExtend
    Vue.prototype.$date = dateExtend
  }
}
