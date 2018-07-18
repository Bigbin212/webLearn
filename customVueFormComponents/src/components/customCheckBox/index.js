//将customInput作为插件
import customCheckBox from './customCheckBox';

customCheckBox.install=(Vue,opts={})=>(Vue.component(customCheckBox.name,customCheckBox));
/*支持用标签的方式引入*/
if(typeof window !=='undefined'&&window.Vue){
  customCheckBox.install(window.Vue);
}
export default customCheckBox;
