import App from '../common/component/App.js'
import PreLoadDiv from '../common/component/preload-content'
import RegistrationForm from '../common/component/RegistrationForm.js'
const routes = [
  {
    path : '/',
    component : App,
    exact : true
  },
  {
    path : "/loading",
    component : PreLoadDiv
  },
  {
    path : "/test",
    component : RegistrationForm
  }
]
export default routes;
