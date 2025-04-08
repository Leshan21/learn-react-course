import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Card from './Card.jsx'
import Button from './Button/Button.jsx' 
import Student from './Student/Student.jsx'


function App() {
  return(
    <>
      <Student name="Leshan" age={24} isStudent={true}/>
      <Student name="Pasindu" age={44} isStudent={false}/>
    </>
     
  );
}

export default App
