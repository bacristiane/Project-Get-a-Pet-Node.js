import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Container from './components/layouts/Container'

//pages
import Login from './components/pages/Auth/Login';
import Register from './components/pages/Auth/Register';
import Home from './components/pages/Home';

//components
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Message from './components/layouts/Message'

//context
import{UserProvider} from './context/UserContext'

function App() {
  return (
    <Router>
      <UserProvider>
      <Navbar />
      <Message />
      <Container>
      <Routes>
        <Route path="/login" element={<Login />} />
          
        <Route path="/register" element={<Register />} />
          
        <Route path="/" element={<Home />} />
      </Routes>
      </Container>
      <Footer />
      </UserProvider>
    </Router>
  )
}

export default App;
