import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react';
import NavBar from './component/NavBar.jsx';
import Home from './component/pages/Home.jsx';
import Footer from './component/Footer.jsx';
import SignUpRole from './component/pages/SignUpRole.jsx';
import SignUpForm from './component/pages/SignUpForm.jsx'
import Programming from './component/pages/Programming.jsx';
import Graphics from './component/pages/Graphics.jsx'
import DigitalMarketting from './component/pages/DigitalMarketting.jsx';
import Login from './component/pages/Login.jsx';
import CreateTalent from './component/pages/CreateTalent.jsx';
import axios from 'axios'
import AllTalent from './component/pages/AllTalent.jsx';
import UpdateTalent from './component/pages/UpdateTalent.jsx';


function App() {
  const [SignUprole, setSignUpRole] = useState('')
  const [userRole, setUserRole] = useState('')
  const [talents, setTalents] = useState([])
  const [refetsch, setRefetsch] = useState(false)
  const [oneTalent, setOneTalent] = useState({})


  const getTalents = () => {
    axios.get('http://127.0.0.1:5000/api/talents/getAll').then((response) => {
      console.log(response.data)
      setTalents(response.data)
    })
      .catch((error) => {
        console.log(error)
      })
  }

  const postTalent = (body) => {
    axios.post('http://127.0.0.1:5000/api/talents/add', body).then((response) => {
      console.log('Talent added successfully', response.data)
      setRefetsch(!refetsch)
    })
      .catch((error) => {
        console.log(error)
      })
  }

  const deleteTalent = (id) => {
    axios.delete(`http://127.0.0.1:5000/api/talents/${id}`).then((response) => {
      console.log('Talent deleted successfully', response.data)
      setRefetsch(!refetsch)
    }).catch((error) => { console.log(error) })
  }

  const updateTalent = (id, body) => {
    axios.put(`http://127.0.0.1:5000/api/talents/${id}`, body).then((response) => {
      console.log('Talent updated successfully', response.data)
      setRefetsch(!refetsch)
    }).catch((error) => { console.log(error) })
  }

  const searchByTitle = (title) => {
    axios.get(`http://127.0.0.1:5000/api/talents/title/${title}`).then((response) => {
      console.log(response.data)
      setTalents(response.data)
    })
      .catch((error) => {
        console.log(error)
      })
  }

  const searchByCategory = (category) => {
    axios.get(`http://127.0.0.1:5000/api/talents/category/${category}`).then((response) => {
      console.log(response.data)
      setTalents(response.data)
    })
      .catch((error) => {
        console.log(error)
      })
  }



  useEffect(() => {
    getTalents()
  }, [refetsch])

  const onChange = (talent) => {
    setOneTalent(talent)
  }

  return (
    <Router>
      <NavBar userRole={userRole} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up-role" element={<SignUpRole setSignUpRole={setSignUpRole} role={SignUprole} />} />
        <Route path="/sign-up-form" element={<SignUpForm role={SignUprole} />} />
        <Route path="/sign-up-role" element={<SignUpRole setSignUpRole={setSignUpRole} role={SignUprole} />} />
        <Route path="/sign-up-form" element={<SignUpForm role={SignUprole} />} />
        <Route path="/login" element={<Login userRole={setUserRole} />} />
        <Route path="/programming" element={<Programming />} />
        <Route path="/graphics" element={<Graphics />} />
        <Route path="/digital-marketting" element={<DigitalMarketting />} />
        <Route path="/addtalent" element={<CreateTalent add={postTalent} />}></Route>
        <Route path="/alltalent" element={<AllTalent talents={talents} change={onChange} delete={deleteTalent} />}></Route>
        <Route path="/updatetalent/:id" element={<UpdateTalent talent={oneTalent} update={updateTalent} />}></Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App