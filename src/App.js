
import { Button, Stack, TextField } from '@mui/material';
import './App.css';
import { useState } from 'react';

function App() {

  const [principle, setPrinciple] = useState("")
  const [rate, setRate] = useState("")
  const [year, setYear] = useState("")
  const [interest, setInterest] = useState(0)



  // to submit the form
  const calculateInterest = (e) => {

    // to stop reload on submitting
    e.preventDefault()

    console.log(principle, rate, year);

    // if there is no content in form, form not need to be submitted
    if (!principle || !rate || !year) {
      alert("please fill the form completly")
    }
    else {
      setInterest(principle * rate * year / 100)
    }


  }

  const resetForm = () => {

    setPrinciple("")
    setRate("")
    setYear("")
    setInterest("0")
  }


  return (
    <>
      <div className="app">

        <div className='container'>


          {/* heading */}
          <div className='heading-text'>
            <h3 className='title'>SIMPLE CALCULATOE</h3>
            <p className='title-para'>CALCULATE YOUR SIMPLE INTEREST</p>
          </div>


          <div className='amount-card'>
            <div className='card-text'>
              <h3 className='total-amount'>₹{interest}</h3>
              <p className='total-para'>Total simole interest</p>
            </div>
          </div>


          <form onSubmit={calculateInterest}>

            {/* to ho;d text field */}
            <div className="text-fields">

              {/* principle amount */}
              <div className="input">

                <TextField value={principle || ""}
                onChange={e => setPrinciple(e.target.value)}
                  className='outlined-basic' id="outlined-basic" label="Principle Amount" variant="outlined" />

              </div>

              <div className="input">

                <TextField value={rate || ""}
                 onChange={e => setRate(e.target.value)}
                  className='outlined-basic' id="outlined-basic" label="Ratr e of Interest (p.a)%" variant="outlined" />

              </div>

              <div className="input">

                <TextField  value={year || ""}
                onChange={e => setYear(e.target.value)}
                  className='outlined-basic' id="outlined-basic" label="Time period(yr)" variant="outlined" />

              </div>


            </div>

            {/* button */}

            <div className="btn-group">

              <Stack direction="row" spacing={2}>
                <Button type='submit' className='btn' style={{ background: 'black' }} variant="contained">Calculate</Button>
                <Button onClick={resetForm}  className='btn' variant="outlined">Reset</Button>
              </Stack>

            </div>


          </form>


        </div>

      </div>
    </>
  );
}

export default App;
