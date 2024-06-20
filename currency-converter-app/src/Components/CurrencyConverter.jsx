import React, { useEffect } from 'react'
import Dropdown from './Dropdown'
import { useState } from 'react'

const CurrencyConverter = () => {
    const [CountriesList, setCountriesList] = useState([]);
    const [From, setFrom] = useState("USD");
    const [To, setTo] = useState("TRY");
    const [ConvertedAmount, setConvertedAmount] = useState(null);
    const [Amount, setAmount] = useState(1);
    const currencies = "https://api.frankfurter.app/currencies"
    const GetCurrenciesList = async () => {
        try {
            const response = await fetch(currencies);
            const data = await response.json();
            setCountriesList(Object.keys(data))
        } catch (error) {
            console.log("error while fetching currencies", error)
        }
    }
    const GetCurrency = async () => {
        try {
            if (!Amount) return
            const url = "https://api.frankfurter.app/latest?amount=";
            const result = await fetch(`${url}${Amount}&from=${From}&to=${To}`);
            const data = await result.json();
            setConvertedAmount(data.rates[To])
        } catch (error) {
            console.log("error while getting the currencies", error)
        }

    }
    useEffect(() => {
        GetCurrenciesList();
    }, [])

    const GetCurrencyRates = (e) => {
        e.preventDefault()
        GetCurrency();
    }
    return (
        <div className="container">
            <h2>Currency Converter</h2>
            <div className="main">
                <div className='form-data'>
                    <div className="amount">
                        <p className="amount-text">
                            <input type="text" 
                            onChange={(e) => {  setAmount(e.target.value)
                                value={Amount}
                            }} className="input-text" />
                              <input
                                type="text"
                                onChange={(e) => setAmount(e.target.value)}
                                className="input-text"
                                value={Amount}
                            />
                        </p>
                    </div>
                    <div className="dropdown">
                        <Dropdown
                            text="From"
                            currencies={CountriesList}
                            Currency={From}
                            setCurrency={setFrom} />
                        <i className="fa-solid fa-arrow-right-arrow-left" />
                        <Dropdown
                            text="To"
                            currencies={CountriesList}
                            Currency={To}
                            setCurrency={setTo} />
                    </div>
                    {ConvertedAmount !== null && (
                        <h3 className="msg">
                            {Amount} {From} is equal to {ConvertedAmount} {To}
                        </h3>
                    )}
                    <button onClick={GetCurrencyRates} className="btn">Get Rates</button>
                </div>
            </div>
        </div>

    )
}

export default CurrencyConverter
