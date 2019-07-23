"use strict";
import Vue from 'vue'
// import 'ant-design-vue/dist/antd.css';
import '../antd-variables.less';
import { Button,Layout,Row,Col,Menu,Icon,Tabs,Input,Select,Dropdown,List,Avatar,Form,Divider,BackTop,Modal,Upload,message,notification,Spin,Badge} from 'ant-design-vue';
Vue.use(Button);
Vue.use(Layout);
Vue.use(Row);
Vue.use(Col),
Vue.use(Menu);
Vue.use(Icon);
Vue.use(Tabs);
Vue.use(Input);
Vue.use(Select);
Vue.use(Dropdown);
Vue.use(List);
Vue.use(Avatar);
Vue.use(Form);
Vue.use(Divider);
Vue.use(BackTop);
Vue.use(Modal);
Vue.use(Upload);
Vue.use(Spin);
Vue.use(Badge);
Vue.prototype.$message = message;
Vue.prototype.$notification = notification;