/**
 * Created by Administrator on 2017/6/6.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(vuex);

import actions from './actions'
import getters from './getters'
import mutations from './mutations'



export default new Vuex.store({
        actions,
        getters,
        mutations
});