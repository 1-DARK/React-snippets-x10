import React, { useId } from 'react'

const Inp_box = ({ label, amount, onamountchange, oncurrencychange, currencyoptions = [], selectedcurrency = 'usd', amountdisabled = false, currencydisabled = false, className = "" }) => {

    const id = useId()
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className='w-1-2'>
                <label htmlFor={id} className="text-black/40 mb-2 inline-block">{label}</label>
                <input type="number" className='outline-none w-full bg-transparent py-1.5' placeholder='Amount' id={id} disabled={amountdisabled} value={amount} onChange={(e) => { onamountchange && onamountchange(Number(e.target.value)) }} />
            </div>
            <div className='w-1/2 flex flex-wrap justify-end text-right'>
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none" value={selectedcurrency} onChange={(e) => { oncurrencychange && oncurrencychange((e.target.value)) }} disabled={currencydisabled}>
                    {currencyoptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default Inp_box
