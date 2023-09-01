import logo from './assets/investment-calculator-logo.png';
import './App.css';
import InvestmentForm from "./components/InvestmentForm/InvestmentForm";
import {useState} from "react";
import InvestmentTable from "./components/InvestmentTable/InvestmentTable";

function App() {
  const [yearlyData, setYearlyData] = useState([]);
  
  const calculateInvestment = (userInput) => {
    setYearlyData([]);

    const data = [];

    let currentSavings = +userInput.currentSavings;
    const yearlyContribution = +userInput.yearlySavings;
    const expectedReturn = +userInput.expectedInterest / 100;
    const duration = +userInput.investmentDuration;
    let totalInterest = 0;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      totalInterest += yearlyInterest;
      const savingsBeginOfYear = currentSavings;
      currentSavings += yearlyInterest + yearlyContribution;
      data.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        savingBeginOfYear: savingsBeginOfYear,
        totalInterest: totalInterest,
        yearlyContribution: yearlyContribution,
      });
    }

    setYearlyData(data)
  }

  return (
    <main>
      <header className="text-center">
        <img src={logo} className="header-logo" alt="logo" />
        <h1>Investment Calculator</h1>
      </header>
      <InvestmentForm calculateInvestment={calculateInvestment} setYearlyData={setYearlyData}></InvestmentForm>
      {yearlyData.length > 0 && <InvestmentTable yearlyData={yearlyData}/>}
    </main>
  );
}

export default App;
