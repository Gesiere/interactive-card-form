import cardFront from '../assets/images/bg-card-front.png'
import cardBack from '../assets/images/bg-card-back.png'
import cardLogo from '../assets/images/card-logo.svg'

const Card = ({values}) => {
    const {name, cardNumber, month, year, cvc} = values
  return (
    <div className="cards">
      <div className="card-front">
        <img className="card-img" src={cardFront} alt="A front of a card" />
        <div className="card-contents">
          <img className="card-logo" src={cardLogo} alt="A card logo" />
          <p className="card-numbers">
            {cardNumber ? cardNumber : '0000 0000 0000 0000'}
          </p>
          <div className="card-bottom">
            <span className="card-holder">
              {name ? name : 'Jane Appleseed'}
            </span>
            <small className="card-expiry-date">
              {month ? month : '00'} / {year ? year : '00'}
            </small>
          </div>
        </div>
      </div>
      <div className="card-back">
        <img src={cardBack} alt="A back of a card" />
        <div className="backcode">
          <span>{cvc ? cvc : '000'}</span>
        </div>
      </div>
    </div>
  )
}

export default Card
