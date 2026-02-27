
import { BrowserRouter, Form, Route, Routes } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css';
// import FormUI from './componenet/FormUI'
import Nav from './componenet/Header/Nav'
import Header from './componenet/Header/Header'
import Services from './componenet/Services/Services'
import QnA from './componenet/Services/QnA'
import Team from './componenet/Services/Team'
import Testimonial from './componenet/Testimonial/Testimonial'
import Formm from './componenet/Testimonial/Formm';
import Footer from './componenet/Footer/Footer';


function App() {
 

  return (
    <>
     

      <BrowserRouter>
      <Routes>
        {/* <Route path="form" element={<FormUI />} /> */}
        <Route path="/" element={< Nav/>} />
       
      </Routes>
      </BrowserRouter>
       <Header/>
       <Services/>
       <QnA/>
       <Team/>
       <Testimonial/>
      <Formm/>
      <Footer/>
    </>
  )
}

export default App
