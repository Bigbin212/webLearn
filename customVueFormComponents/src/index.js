/**
 * 批量将组件作为vue的插件
 */
import uiSwitch from './packages/customSwitch/customSwitch';
import customInput from './packages/customInput/customInput';
import customCheckBox from './packages/customCheckBox/customCheckBox';
import customSelect from './packages/customSelect/customSelect';
import customOption from './packages/customSelect/customOption';

const components=[
  uiSwitch,
  customInput,
  customCheckBox,
  customSelect,
  customOption
];

const install=function (Vue,opts={}) {
  components.map(component=>{
    Vue.component(component.name,component);
  });
};

/*支持用标签的方式引入*/
if(typeof window !=='undefined'&&window.Vue){
  install(window.Vue);
}

export default {
  install
}
