import checkmark from '../assets/images/icon-complete.svg'

const ThankYou = () => {
    const handleClick = () => {
        location.reload()
    }
  return (
    <div className="complete-container">
        <img src={checkmark} alt="A checkmark sign" />
        <h2>Thank you</h2>
        <p>We've added your card details</p>
        <button className="btn padding-lr" onClick={handleClick}>Continue</button>
    </div>
  )
}

export default ThankYou