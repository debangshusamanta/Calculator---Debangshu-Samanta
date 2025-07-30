import React, { useState } from 'react'
import './Calculator.css'

const Calculator = () => {

    const [result, setresult] = useState(null)
    const [input, setinput] = useState('')


    const handleclick = (value) => {

        setinput(prev => prev + value)
    }

    const handleEqual = () => {
        const value = input.match(/(\d+(?:\.\d+)?)([+\-*/%])(\d+(?:\.\d+)?)/);

        if (value) {
            const number1 = parseFloat(value[1])
            const operator = value[2]
            const number2 = parseFloat(value[3])


            console.log(number1, operator, number2)
            console.log('Equal is running!')

            calculate(number1, operator, number2)
        }
    }

    const handleClear = () => {
        setresult(0)
        setinput('')
    }

    const handleDel = () => {
        setinput(prev => prev.slice(0, -1));
    };




    const calculate = (number1, operator, number2) => {
        const number1st = number1;
        const Operator = operator;
        const number2nd = number2;

        if (Operator === '/') {
            if (number1st > number2nd) {
                const result = number1st / number2nd;
                setresult(result)
                console.log(result)
            }
            else {
                const result = number2nd / number1st;
                setresult(result)
                console.log(result)
            }
        }
        else if (Operator === '*') {
            const result = number1st * number2nd;
            setresult(result)
            console.log(result)
        }
        else if (Operator === '+') {
            const result = number1st + number2nd;
            setresult(result)
            console.log(result)
        }
        else if (Operator === '-') {
            const result = number1st - number2nd;
            setresult(result)
            console.log(result)
        }
        else if (Operator === '%') {
            const result = number1st % number2nd;
            setresult(result)
            console.log(result)
        }
    }




    return (
        <>
            <div className='main'>
                <h1 className='heading'>CALCULATOR</h1>

                <div className='container'>

                    <div className='result-screen'>

                        {result ? result : input}
                    </div>

                    <div className='head'>
                        <div className="box green" onClick={() => { handleClear() }}>AC</div>
                        <div className="box green" onClick={() => { handleDel() }}>DEL</div>
                        <div className="box green" onClick={() => { handleclick('%') }}>%</div>
                        <div className="box green" onClick={() => { handleclick('/') }}>/</div>
                    </div>
                    <div className='head'>
                        <div className="box" onClick={() => { handleclick('7') }}>7</div>
                        <div className="box" onClick={() => { handleclick('8') }}>8</div>
                        <div className="box" onClick={() => { handleclick('9') }}>9</div>
                        <div className="box green" onClick={() => { handleclick('*') }}>*</div>
                    </div>
                    <div className='head'>
                        <div className="box" onClick={() => { handleclick('4') }}>4</div>
                        <div className="box" onClick={() => { handleclick('5') }}>5</div>
                        <div className="box" onClick={() => { handleclick('6') }}>6</div>
                        <div className="box green" onClick={() => { handleclick('-') }}>-</div>
                    </div>
                    <div className='head'>
                        <div className="box" onClick={() => { handleclick('1') }}>1</div>
                        <div className="box" onClick={() => { handleclick('2') }}>2</div>
                        <div className="box" onClick={() => { handleclick('3') }}>3</div>
                        <div className="box green" onClick={() => { handleclick('+') }}>+</div>
                    </div>
                    <div className='head'>
                        <div className="box zero" onClick={() => { handleclick('0') }}>0</div>
                        <div className="box" onClick={() => { handleclick('.') }}>.</div>
                        <div className="box" onClick={() => { handleEqual() }}>=</div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Calculator
