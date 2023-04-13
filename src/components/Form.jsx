

const Form = ({values, handleChange, handleSubmit, errors, handleChangeEvent}) => {
  const {name, cardNumber, month, year, cvc} = values
  return (
    <div className="form-control">
      <form onSubmit={handleSubmit}>
        <div className="form-inputs">
          <label htmlFor="name">Cardholder Name</label>
          <input
            type="text"
            placeholder="e.g. Jane Appleseed"
            name="name"
            value={name}
            onChange={handleChange}
            onKeyUp={handleChangeEvent}
            className={errors.name ? 'error' : ''}
            maxLength="16"
          />
          <span className="error">{errors.name}</span>
        </div>
        <div className="form-inputs">
          <label htmlFor="card-number">Card Number</label>
          <input
            type="text"
            placeholder="e.g. 1234 5678 9123 0000"
            name="cardNumber"
            maxLength="19"
            value={cardNumber
              .replace(/\s/g, '')
              .replace(/(\d{4})/g, '$1 ')
              .trim()}
            onChange={handleChange}
            onKeyUp={handleChangeEvent}
            className={errors.cardNumber ? 'error' : ''}
          />
          <span className="error">{errors.cardNumber}</span>
        </div>
        <div className="form-inputs">
          <div className="bottom-inputs">
            <div className="bottom-one">
              <label htmlFor="month">exp. date(MM/YY)</label>
              <div className="inputs">
                <input
                  className={errors.month ? 'error' : ''}
                  type="text"
                  placeholder="MM"
                  name="month"
                  value={month}
                  onChange={handleChange}
                  // onKeyUp={handleChangeEvent}
                  maxLength={2}
                />
                <input
                  className={errors.year ? 'error' : ''}
                  type="text"
                  placeholder="YY"
                  name="year"
                  value={year}
                  onChange={handleChange}
                  onKeyUp={handleChangeEvent}
                  maxLength={2}
                />
              </div>
              <span className="error">{errors.month || errors.year}</span>
            </div>
            <div className="bottom-two">
              <label htmlFor="cvc">cvc</label>
              <input
                className={errors.cvc ? 'error' : ''}
                type="text"
                placeholder="e.g. 123"
                name="cvc"
                maxLength={3}
                onChange={handleChange}
                onKeyUp={handleChangeEvent}
                value={cvc}
              />
              <span className="error">{errors.cvc}</span>
            </div>
          </div>
        </div>
        <button type="submit">Confirm</button>
      </form>
    </div>
  )
}

export default Form
