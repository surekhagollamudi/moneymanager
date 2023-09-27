import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props
  return (
    <>
      <li className="list1">
        <img
          className="balance-img"
          alt="balance"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
        />
        <div>
          <p className="ur-balance">Your Balance</p>
          <p className="balance" data-testid="balanceAmount">
            RS {balanceAmount}
          </p>
        </div>
      </li>

      <li className="list1 list2">
        <img
          className="balance-img"
          alt="income"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
        />
        <div>
          <p className="ur-balance">Your Income</p>
          <p className="balance" data-testid="incomeAmount">
            RS {incomeAmount}
          </p>
        </div>
      </li>

      <li className="list1 list3">
        <img
          className="balance-img"
          alt="expenses"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
        />
        <div>
          <p className="ur-balance">Your Expenses</p>
          <p className="balance" data-testid="expensesAmount">
            Rs {expensesAmount}
          </p>
        </div>
      </li>
    </>
  )
}

export default MoneyDetails
