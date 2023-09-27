import './index.css'

const TransactionItem = props => {
  const {details, deleteHistory} = props
  const {title, amount, optionId, id} = details

  const deleteButton = () => {
    deleteHistory(id)
  }

  return (
    <li className="list">
      <p className="history-title">{title}</p>
      <p className="history-title"> Rs {amount}</p>
      <p className="history-title">{optionId}</p>
      <button type="button" onClick={deleteButton} data-testid="delete">
        <img
          alt="delete"
          className="delete"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
        />
      </button>
    </li>
  )
}

export default TransactionItem
