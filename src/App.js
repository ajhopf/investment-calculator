import logo from './assets/investment-calculator-logo.png';
import './App.css';
import InvestmentForm from "./components/InvestmentForm/InvestmentForm";
import {useState} from "react";
import InvestmentTable from "./components/InvestmentTable/InvestmentTable";

function App() {
  const [yearlyData, setYearlyData] = useState([]);
  
  const calculateInvestment = (userInput) => {
    setYearlyData([]); // per-year results

    let currentSavings = +userInput.currentSavings; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput.yearlySavings; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput.expectedInterest / 100;
    const duration = +userInput.investmentDuration;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    setYearlyData(yearlyData)
    console.log(yearlyData.length);
  }

  return (
    <main>
      <header className="text-center">
        <img src={logo} className="header-logo" alt="logo" />
        <h1>Investment Calculator</h1>
      </header>
      <InvestmentForm calculateInvestment={calculateInvestment}></InvestmentForm>
      {yearlyData.length > 0 && <InvestmentTable yearlyData={yearlyData}/>}
    </main>
  );
}

export default App;
