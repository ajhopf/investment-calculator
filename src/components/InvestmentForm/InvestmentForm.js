import {Button} from "react-bootstrap";

const InvestmentForm = props => {
  const onResetForm = () => {
    document.getElementById('investmentForm').reset();
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const userInput = {
      currentSavings: event.target['current-savings'].value,
      yearlySavings: event.target['yearly-savings'].value,
      expectedInterest: event.target['expected-interest'].value,
      investmentDuration: event.target['investment-duration'].value
    };
    event.target.reset();
    props.calculateInvestment(userInput);
  };

  return (
    <form onSubmit={onSubmit} id="investmentForm">
      <div>
        <label htmlFor="current-savings" className="form-label">Current Savings ($)</label>
        <input id="current-savings" className="form-control" type="number" step="1" required min={0}/>
      </div>
      <div>
        <label htmlFor="yearly-savings" className="form-label">Yearly Savings ($)</label>
        <input id="yearly-savings" className="form-control" type="number" step="1" required min={0}/>
      </div>
      <div>
        <label htmlFor="expected-interest" className="form-label">Expected Interest (%, PER YEAR)</label>
        <input id="expected-interest" className="form-control" type="number" step="1" required min={0}/>
      </div>
      <div>
        <label htmlFor="investment-duration" className="form-label">Investment Duration (YEARS)</label>
        <input id="investment-duration" className="form-control" type="number" step="1" required={true} min={1}/>
      </div>
      <Button type="button" onClick={onResetForm}>Reset</Button>
      <Button type="submit">Calculate</Button>
    </form>
  );

}

export default InvestmentForm;