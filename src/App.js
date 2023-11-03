import LandingPage from './Components/Pages/LandingPage';
import '../src/assets/vendor/css/rtl/core.css'
import '../src/assets/vendor/fonts/tabler-icons.css'
import '../src/assets/vendor/css/rtl/theme-default.css'
import '../src/assets/vendor/css/pages/front-page.css'
import '../src/assets/vendor/libs/node-waves/node-waves.css'
import '../src/assets/vendor/libs/nouislider/nouislider.css'
import '../src/assets/vendor/libs/swiper/swiper.css'
import '../src/assets/vendor/css/pages/front-page-landing.css'
import '../src/assets/vendor/fonts/fontawesome.css'
import '../src/assets/vendor/fonts/flag-icons.css'
import '../src/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css'
import '../src/assets/vendor/libs/typeahead-js/typeahead.css'
import '../src/assets/vendor/libs/@form-validation/umd/styles/index.min.css'
import '../src/assets/vendor/css/pages/page-auth.css'

import Login from './Components/Pages/Login';
import Register from './Components/Pages/Register';
import EmailVerification from './Components/Pages/EmailVerification';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/verification' element={<EmailVerification />} />
        </Routes>
      </Router>
       
 
    </div>
  );
}

export default App;
