import {Component} from 'react'
import {v4} from 'uuid'
import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    historyList: [],
    title: '',
    amount: '',
    optionId: transactionTypeOptions[0].optionId,
  }

  getTitle = event => {
    this.setState({title: event.target.value})
  }

  getAmount = event => {
    this.setState({amount: event.target.value})
  }

  selectType = event => {
    this.setState({optionId: event.target.value})
  }

  deleteHistory = id => {
    const {historyList} = this.state
    const updatedList = historyList.filter(each => each.id !== id)

    this.setState({historyList: updatedList})
  }

  submitButton = event => {
    event.preventDefault()
    const {title, amount, optionId} = this.state
    const typeOption = transactionTypeOptions.find(
      each => each.optionId === optionId,
    )
    const {displayText} = typeOption
    const newHistory = {
      id: v4(),
      title,
      amount,
      type: displayText,
    }

    this.setState(prevState => ({
      historyList: [...prevState.historyList, newHistory],
      title: '',
      amount: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  getBalance = () => {
    const {historyList} = this.state
    let expenses = 0
    historyList.forEach(list => {
      if (list.type === historyList[1].displayText) {
        expenses += list.amount
      }
    })
    return expenses
  }

  getIncome = () => {
    const {historyList} = this.state
    let income = 0
    historyList.forEach(list => {
      if (list.type === historyList[1].displayText) {
        income += list.amount
      }
    })
    return income
  }

  getBalance = () => {
    const {historyList} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0
    historyList.forEach(each => {
      if (each.type === historyList[0].displayText) {
        incomeAmount += each.amount
      } else {
        expensesAmount += each.amount
      }
    })
    balanceAmount = incomeAmount - expensesAmount
    return balanceAmount
  }

  render() {
    const {historyList, title, amount, optionId} = this.state
    const balanceAmount = this.getBalance()
    const incomeAmount = this.getIncome()
    const expensesAmount = this.getExpenses()
    return (
      <div className="bg-container">
        <div className="name-container">
          <h1 className="name">Hi, Richard</h1>
          <p className="para">
            Welcome back to your <span className="span">Money Manager</span>
          </p>
        </div>
        <ul className="list-container">
          <MoneyDetails
            balanceAmount={balanceAmount}
            incomeAmount={incomeAmount}
            expensesAmount={expensesAmount}
          />
        </ul>
        <div className="form-container">
          <form className="form" onSubmit={this.submitButton}>
            <h1>Add Transaction</h1>
            <div className="title-container">
              <label htmlFor="titleInput">TITLE</label>
              <input
                id="titleInput"
                type="text"
                className="title"
                placeholder="TITLE"
                value={title}
                onChange={this.getTitle}
              />
            </div>
            <div className="title-container">
              <label htmlFor="titleInput">AMOUNT</label>
              <input
                id="titleInput"
                type="text"
                className="title"
                placeholder="AMOUNT"
                value={amount}
                onChange={this.getAmount}
              />
            </div>
            <div className="title-container">
              <label htmlFor="typeInput">TYPE</label>
              <select
                id="typeInput"
                className="title"
                value={optionId}
                onChange={this.selectType}
              >
                {transactionTypeOptions.map(each => (
                  <option key={each.optionId} value={each.optionId}>
                    {each.displayText}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="button">
              Add
            </button>
          </form>
          <div className="form form-2">
            <h1>History</h1>
            <ul className="list-container list-cont-2">
              <li className="list">
                <p className="history-title">Title</p>
                <p className="history-title">Amount</p>
                <p className="history-title">Type</p>
              </li>
              {historyList.map(each => (
                <TransactionItem
                  key={each.id}
                  details={each}
                  deleteHistory={this.deleteHistory}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
