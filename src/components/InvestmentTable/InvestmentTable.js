const InvestmentTable = props => {
  return (
    <section className="d-flex justify-content-center">
      <table className="table w-75">
        <thead>
        <tr>
          <th scope="col">Year</th>
          <th scope="col">Total Savings</th>
          <th scope="col">Interest (Year)</th>
          <th scope="col">Total Interest</th>
          <th scope="col">Invested Capital</th>
        </tr>
        </thead>
        <tbody>
        {props.yearlyData.map((data) => {
          return <tr>
            <td>{ data.year }</td>
            <td>{ data.savingsEndOfYear }</td>
            <td>{ data.yearlyInterest }</td>
            <td>ooooo</td>
            <td>{ data.savingsEndOfYear }</td>
          </tr>})
        }

        </tbody>
      </table>
    </section>

  )
}

export default InvestmentTable;