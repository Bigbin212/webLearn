//将switch作为插件
import uiSwitch from './customSwitch';
uiSwitch.install=(Vue,opts={})=>(Vue.component(uiSwitch.name,uiSwitch));
/*支持用标签的方式引入*/
if(typeof window !=='undefined'&&window.Vue){
  uiSwitch.install(window.Vue);
}
export default uiSwitch;
