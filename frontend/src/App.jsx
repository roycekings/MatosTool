import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import FormInscrption from './components/FormInscrption'
import FormLogin from './components/FormLogin'
import FormEmploye from './components/FormEmploye'
import FormMatos from './components/FormMatos'
import PrivateRoute from './pages/privateRoute'
import Panier from './components/Test'
import ListeMatos from './components/ListeMatos'
import FormMatosUpdate from './components/FormMatosUpdate'
import Header from './components/Header'
import UserProfile from './components/UserProfile'
import AdminRoute from './pages/AdminRoute'
import Test1 from './components/test1'
import HomeAdmin from './pages/HomeAdmin'
import GestMatos from './pages/GestMatos'
import GestionUser from './pages/GestionUser'
import PageConsult from './pages/PageConsult'
import AdminProfil from './components/AdminPRofil'
import GestionEmAdmin from './pages/GestionEmAdmin'
import DemandeEnattente from './pages/DemandeEnattenteUser'
import EnCours from './pages/EnCours'
import Historique from './pages/Historique'
import HistoriqueUser from './pages/HistoriqueUser'
import EncoursUsers from './pages/EncoursUsers'
import Test3 from './components/Test3'
function App() {
  return (
    <>
    <Header />
     <Routes>
  
          <Route path='/inscription' element = {<FormInscrption/>} />
          <Route path='/login' element = {<FormLogin/>} />
          <Route path='/test' element = {<Test3/>} />
          <Route index element = {<Test1/>} />
        
          

        <Route element = {<PrivateRoute/>}>
          <Route path='/user/profil/:id' element = {<UserProfile/>} />
          <Route path='/home' element = {<Home/>} />
          <Route path='/panier' element = {<Panier/>} />
          <Route path='/addEmploye' element = {<FormEmploye/>} /> 
          <Route path='/user/demandeenattente' element = {<DemandeEnattente/>} /> 
          <Route path='/user/encours' element = {<EncoursUsers/>} /> 
          <Route path='/user/historique' element = {<HistoriqueUser/>} /> 
          
          <Route element = {<AdminRoute/>}>
            
            <Route path='/admin/historique' element = {<Historique/>} /> 
            <Route path='/admin/demandeenattente' element = {<GestionEmAdmin/>} /> 
            <Route path='/admin/gestionencours' element = {<EnCours/>} /> 
            <Route path='/admin' element = {<HomeAdmin/>} />
            <Route path='/addmatos' element = {<FormMatos/>} />
            <Route path='/admin/gestionmatos' element = {<GestMatos/>} />
            <Route path='/materiel/update/:id' element = {<FormMatosUpdate/>} />
            <Route path='/admin/gestionuser' element = {<GestionUser/>} />
            <Route path='/admin/profil/:id' element = {<AdminProfil/>} />
            <Route path='/admin/gestionuser/consultation/:id' element ={<PageConsult />}/>
            <Route path='admin/gestionemprunt' element ={<GestionEmAdmin />}/>
        </Route>
 
        </Route>


      </Routes>
    </>
  )
}

export default App
