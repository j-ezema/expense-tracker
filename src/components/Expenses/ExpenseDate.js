import './ExpenseDate.css';

const ExpenseDate = (props) => {
    const month = props.date.toLocaleString('en-US',{month:'long'});
    const day = props.date.toLocaleString('en-US',{days:'2-digit'});
    const year = props.date.getFullYear();

    return (
        <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__month">{year}</div>
        <div className="expense-date__day">{day}</div>
      </div>
    )
}

export default ExpenseDate;