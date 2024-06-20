import React from 'react'

const Dropdown = ({ text, currencies, Currency, setCurrency }) => {
    return (
        <div>
            <div className="from">
                <p>{text}</p>
                <div className="select-container">
                    <img className="Image" src="https://flagsapi.com/BE/flat/64.png" />
                    <select value={Currency} onChange={(e) => { setCurrency(e.target.value) }} name="from" >
                        {currencies?.map((curr) => {
                            return (
                                <option key={curr} value={curr}>{curr}</option>

                            )
                        })}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Dropdown
