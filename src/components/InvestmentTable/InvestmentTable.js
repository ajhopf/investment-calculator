const InvestmentTable = props => {
  return (
    <section className="d-flex justify-content-center">
      <table className="table w-75">
        <thead>
        <tr>
          <th scope="col">Year</th>
          <th scope="col">Savings Begin of Year</th>
          <th scope="col">Yearly Saving</th>
          <th scope="col">Interest (Year)</th>
          <th scope="col">Total Accumulated Interest</th>
          <th scope="col">Invested Capital End of Year</th>
        </tr>
        </thead>
        <tbody>
        {props.yearlyData.map((data, i) => {
          return <tr key={i}>
            <td>{ data.year }</td>
            <td>{ data.savingBeginOfYear }</td>
            <td>{ data.yearlyContribution }</td>
            <td>{ data.yearlyInterest }</td>
            <td>{ data.totalInterest }</td>
            <td>{ data.savingsEndOfYear }</td>
          </tr>})
        }

        </tbody>
      </table>
    </section>

  )
}

export default InvestmentTable;