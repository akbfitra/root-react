import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  Redirect
} from 'react-router-dom'

import Cookies from 'js-cookie'

import { PrivateRouteSurveyor, PrivateRouteResponden } from './components/privateRoute'
import LandingPage from './container/home'
import Login from './container/user/login'
import Register from './container/user/register'
import RegisterSurveyor from './container/user/registerSurveyor'
import SuccessRegister from './container/user/succesRegister'
import LupaPassword from './container/user/forgotPassword'
import AktivasiSuccess from './container/user/successAktivasi'
import SuccessForgotPassword from './container/user/responForgotPassword'
import SyaratDanKetentuan from './container/user/syarat'
import KontakKami from './container/user/kontakKami'
import TentangKami from './container/user/tentangKami'
import TentangSurveyor from './container/user/tentangSurveyor'
import TentangResponden from './container/user/tentangResponden'

import DashboardSurveyor from './container/surveyor/dashboard'
import FormSurveyor from './container/surveyor/form'
import ListStudy from './container/surveyor/listStudy'
import DetailStudySurveyor from './container/surveyor/detailStudy'
import TopUpSurveyor from './container/surveyor/topup'
import ProfileSurveyor from './container/surveyor/profile'
import EditProfileSurveyor from './container/surveyor/editProfile'
import StudyRespondenGetBySurveyor from './container/surveyor/studyResponden'
import CheckOutTopSurveyor from './container/surveyor/checkoutTopUp'
import EditPasswordSurveyor from './container/surveyor/editPassword'
import EditFormSurveyor from './container/surveyor/formEdit'

import DashboardResponden from './container/responden/dashboard'
import AboutUsResponden from './container/responden/aboutus'
import CategoryQuestions from './container/responden/categoryQuestions'
import ProfileResponden from './container/responden/profile'
import SubmissionResponden from './container/responden/submission'
import DetailStudyResponden from './container/responden/detailStudy'
import StudyResponden from './container/responden/study'
import TicketResponden from './container/responden/ticket'
import EditProfileResponden from './container/responden/editProfile'
import TarikSaldo from './container/responden/tarikSaldo'
import StudyCompletedResponden from './container/responden/studyCompleted'
import EditPasswordResponden from './container/responden/editPassword'
import Notification from './container/responden/notification'

import { CekLogin } from './store/actions/userAction'

const App = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    if(Cookies.get('test')) {
      dispatch(CekLogin())
    }
  },[ dispatch ])

  return (
    <Switch>
      <Route path = '/login' component = {Login}/>
      <Route path = '/surveyor/register' component = {RegisterSurveyor}/>
      <Route path = '/register' component = {Register}/>
      <Route path = '/success' component = {SuccessRegister}/>
      <Route path = '/forgotpassword' component = {LupaPassword}/>
      <Route path = '/aktivasisuccess' component = {AktivasiSuccess}/>
      <Route path = '/successforgotpassword' component= {SuccessForgotPassword}/>
      <Route path = '/syaratdanketentuan' component = {SyaratDanKetentuan}/>
      <Route path = '/kontakkami' component = {KontakKami}/>
      <Route path = '/tentangkami' component = {TentangKami}/>
      <Route path = '/tentangsurveyor' component = {TentangSurveyor}/>
      <Route path = '/tentangresponden' component = {TentangResponden}/>

      <PrivateRouteSurveyor path = '/surveyor/form/edit/:studyId' component = {EditFormSurveyor}/>
      <PrivateRouteSurveyor path = '/surveyor/form' component = {FormSurveyor}/>
      <PrivateRouteSurveyor path = '/surveyor/liststudy' component = {ListStudy}/>
      <PrivateRouteSurveyor path = '/surveyor/detailstudy/detailresponden/:studyId/:respondenId' component={StudyRespondenGetBySurveyor} />
      <PrivateRouteSurveyor path = '/surveyor/detailstudy/:studyId' component={DetailStudySurveyor} />
      <PrivateRouteSurveyor path = '/surveyor/profile/editpassword' component = {EditPasswordSurveyor}/>
      <PrivateRouteSurveyor path = '/surveyor/profile/edit' component = {EditProfileSurveyor}/>
      <PrivateRouteSurveyor path = '/surveyor/profile' component = {ProfileSurveyor}/>
      <PrivateRouteSurveyor path = '/surveyor/topup/checkout' component = {CheckOutTopSurveyor}/>
      <PrivateRouteSurveyor path = '/surveyor/topup' component = {TopUpSurveyor}/>
      <PrivateRouteSurveyor path = '/surveyor/notification' component = {Notification}/>
      <PrivateRouteSurveyor path = '/surveyor' component = {DashboardSurveyor}/>

      <PrivateRouteResponden path = '/responden/aboutus' component = {AboutUsResponden}/>
      <PrivateRouteResponden path = '/responden/category/:categoryId' component = {CategoryQuestions}/>
      <PrivateRouteResponden path = '/responden/profile/editpassword' component = {EditPasswordResponden}/>
      <PrivateRouteResponden path = '/responden/profile/edit' component = {EditProfileResponden}/>
      <PrivateRouteResponden path = '/responden/profile' component = {ProfileResponden}/>
      <PrivateRouteResponden path = '/responden/detailstudy/:studyId' component = {DetailStudyResponden}/>
      <PrivateRouteResponden path = '/responden/study/completed/:studyId' component = {StudyCompletedResponden}/>
      <PrivateRouteResponden path = '/responden/study/:studyId' component = {StudyResponden}/>
      <PrivateRouteResponden path = '/responden/submission' component = {SubmissionResponden}/>
      <PrivateRouteResponden path = '/responden/ticket' component = {TicketResponden}/>
      <PrivateRouteResponden path = '/responden/tariksaldo' component = {TarikSaldo}/>
      <PrivateRouteResponden path = '/responden/notification' component = {Notification}/>
      <PrivateRouteResponden path = '/responden' component = {DashboardResponden} />
      <Route exact path ='/' component = {LandingPage}/>
      <Redirect from = '*' to= '/'/>
    </Switch>
  );
}

export default withRouter(App);