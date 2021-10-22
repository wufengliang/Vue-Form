/*
 * @Descripttion: 
 * @Author: WuFengliang
 * @Date: 2021-10-22 17:17:25
 * @LastEditTime: 2021-10-22 17:23:32
 */
import Vue from 'vue';
import Vuex from 'vuex';

import component from './component';

Vue.use(Vuex);

export default new Vuex.Store({
    module: {
        component,
    }
})

