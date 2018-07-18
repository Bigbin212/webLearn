import customSelect from './customSelect';
import customOption from './customOption';

customSelect.install=(Vue,opts={})=>{
  Vue.component(customSelect.name,customSelect);
  Vue.component(customOption.name,customOption)
};

/*支持用标签的方式引入*/
if(typeof window !=='undefined'&&window.Vue){
  customSelect.install(window.Vue);
}
export default customSelect;
