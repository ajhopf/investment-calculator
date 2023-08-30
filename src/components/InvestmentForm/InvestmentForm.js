import './InvestmentForm.css'
import MyButton from "../../UI/Button/Button";

const InvestmentForm = props => {
  const onResetForm = () => {
    document.getElementById('investmentForm').reset();
    props.setYearlyData([]);
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
    <section className="d-flex justify-content-center my-5">
      <form onSubmit={onSubmit} id="investmentForm" className="form">
        <div className="row">
          <div className="col-6 mb-3">
            <label htmlFor="current-savings" className="form-label">Current Savings ($)</label>
            <input id="current-savings" className="form-control" type="number" step="1" required min={0}/>
          </div>
          <div className="col-6 mb-3">
            <label htmlFor="yearly-savings" className="form-label">Yearly Savings ($)</label>
            <input id="yearly-savings" className="form-control" type="number" step="1" required min={0}/>
          </div>
        </div>

        <div className="row">
          <div className="col-6 mb-3">
            <label htmlFor="expected-interest" className="form-label">Expected Interest (%, PER YEAR)</label>
            <input id="expected-interest" className="form-control" type="number" step="1" required min={0}/>
          </div>
          <div className="col-6 mb-3">
            <label htmlFor="investment-duration" className="form-label">Investment Duration (YEARS)</label>
            <input id="investment-duration" className="form-control" type="number" step="1" required={true} min={1}/>
          </div>
        </div>

        <div className="row">
          <div className="col-6 d-flex justify-content-end">
            <MyButton type="button" className="btn btn-outline-dark" onClick={onResetForm}>Reset</MyButton>
          </div>
          <div className="col-6">
            <MyButton type="submit" className="btn btn-outline-dark">Calculate</MyButton>
          </div>
        </div>
      </form>
    </section>

  );

}

export default InvestmentForm;