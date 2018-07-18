//将customInput作为插件
import customInput from './customInput';

customInput.install=(Vue,opts={})=>(Vue.component(customInput.name,customInput));
/*支持用标签的方式引入*/
if(typeof window !=='undefined'&&window.Vue){
  customInput.install(window.Vue);
}
export default customInput;
