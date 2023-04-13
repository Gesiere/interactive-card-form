import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './scss/main.scss'
import Card from './components/Card'
import Form from './components/Form'
import ThankYou from './components/ThankYou'


function App() {
  const [values, setValues] = useState({
    name: '',
    cardNumber: '',
    month: '',
    year: '',
    cvc: '',
  });
  const [errors, setErrors] = useState(false)
  const [confirmSubmit, setConfirmSubmit] = useState(false);
  const noErrors = Object.keys(errors).length === 0 ? true : false  
  const handleSubmit = (e) => {
    e.preventDefault()
    setConfirmSubmit(true)
    setErrors(formValidation(values))
  }
  const handleChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }
  
  const handleChangeEvent = () => {
    if(confirmSubmit){
      setErrors(formValidation(values))
    }
  }

  const formValidation = (value) =>{
    const cardPattern = /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/
    const numberOnly1 = /^\d{2}$/
    const numberOnly2 = /^\d{3}$/
    const errors = {}

    if(!value.name){
      errors.name = 'Name is required'
    }
    if(!value.cardNumber){
      errors.cardNumber = 'Card numbers is required'
    }else if(!cardPattern.test(value.cardNumber)){
      errors.cardNumber ='Wrong format, numbers only'
    } else if (value.cardNumber.length < 19){
      errors.cardNumber = 'Card numbers must be up to 16'
    }

    if(!value.cvc){
      errors.cvc = "Can't be blank"
    } else if(!numberOnly2.test(value.cvc)){
      errors.cvc ='Wrong format, numbers only'
    }

    if (!value.year) {
      errors.year = "Can't be blank"
    } else if (!numberOnly1.test(value.year)) {
      errors.year = 'Wrong format, numbers only'
    }

    if (!value.month) {
      errors.month = "Can't be blank"
    } else if (!numberOnly1.test(value.month)) {
      errors.month = 'Wrong format, numbers only'
    }

    return errors
  }

  return (
    <main>
      <div className="sides">
        <div className="left-side">
          <Card values={values}/>
        </div>
        <div className="right-side">
          <div className="form-container">
            {!noErrors || !confirmSubmit  ?     <Form values={values} handleChange={handleChange} handleSubmit={handleSubmit} errors={errors} handleChangeEvent={handleChangeEvent}/> : <ThankYou />}
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
