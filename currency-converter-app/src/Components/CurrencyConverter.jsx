import React, { useEffect } from 'react'
import { useState } from 'react'

const CurrencyConverter = () => {
    const [Currencies, setCurrencies] = useState();
    const [Currency, setCurrency] = useState();
    const currencies = "https://api.frankfurter.app/currencies"
    const currency = "https://api.frankfurter.app/latest?amount=10&from=USD&to=TRY"
    const GetCurrenciesList = async () => {
        try {
            const response = await fetch(currencies);
            const data = await response.json();
            setCurrencies("Currencies List", data)
            console.log(data)
            setCurrencies(data)
        } catch (error) {
            console.log("error while fetching currencies", error)
        }
    }
    const GetCurrency = async () => {
        try {
            const result = await fetch(currency);
            const data = await result.json();
            console.log("Get one Currency rate", data);
            setCurrency(data)
        } catch (error) {
            console.log("error while getting the currencies", error)
        }

    }
    useEffect(() => {
        GetCurrenciesList();
        GetCurrency();
    }, [])
    return (
        <div className="container">
            <h2>Currency Converter</h2>
            <div className="main">
                <form>
                    <div className="amount">
                        <p className="amount-text">
                            <input type="text" defaultValue={100} className="input-text" />
                        </p>
                    </div>
                    <div className="dropdown">
                        <div className="from">
                            <p>From</p>
                            <div className="select-container">
                                <img className="Image" src="https://flagsapi.com/BE/flat/64.png" />
                                <select name="from">
                                    <option value="PK" selected>PAK</option>
                                    <option value="PK">AUS</option>
                                    <option value="PK">US</option>
                                </select>
                            </div>
                        </div>
                        <i className="fa-solid fa-arrow-right-arrow-left" />
                        <div className="from">
                            <p>To</p>
                            <div className="select-container">
                                <img className="Image" src="https://flagsapi.com/BE/flat/64.png" />
                                <select name="from">
                                    <option value="PK" selected>PAK</option>
                                    <option value="PK">AUS</option>
                                    <option value="PK">US</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <h3 className="msg">1 USD to 265 PKR</h3>
                    <button className="btn">Get Rates</button>
                </form>
            </div>
        </div>

    )
}

export default CurrencyConverter
