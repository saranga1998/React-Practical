import React,{useState} from 'react'
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

function CreditCard() {
    const [number, setNumber] = useState('')
    const [name, setName] = useState('')
    const [expiry, setExpiry] = useState('')
    const [cvc, setCvc] = useState('')
    const [focus, setFocus] = useState('')

  return (
    <div>
      <form>
        <Cards
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focus}
            />

        <input
            type="tel"
            name="number"
            placeholder="Card Number"
            value={number}
            onChange={e => setNumber(e.target.value)}
            onFocus={e => setFocus(e.target.name)}
            />

        <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
            onFocus={e => setFocus(e.target.name)}
            />

        <input
            type="tel"
            name="expiry"
            placeholder="MM/YY Expiry"
            value={expiry}
            onChange={e => setExpiry(e.target.value)}
            onFocus={e => setFocus(e.target.name)}
            />

        <input
            type="tel"
            name="cvc"
            placeholder="CVC"
            value={cvc}
            onChange={e => setCvc(e.target.value)}
            onFocus={e => setFocus(e.target.name)}
            />

      </form>

    </div>
  )
}

export default CreditCard
