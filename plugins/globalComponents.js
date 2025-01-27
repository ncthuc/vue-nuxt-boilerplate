import Vue from 'vue';

import Page403 from '../components/exception/403';
import Page404 from '../components/exception/404';
import Page500 from '../components/exception/500';
import PageView from '../components/PageView';

Vue.component(PageView.name, PageView);
Vue.component('page-403', Page403);
Vue.component('page-404', Page404);
Vue.component('page-500', Page500);
