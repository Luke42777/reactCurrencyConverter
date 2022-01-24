const Dollars = props => {
    const value = (props.amount * props.ratio).toFixed(2);
    return (
        <div>Amount in $: {props.amount > 0 ? value : ""}  </div>)
}

const Euros = props => {
    const value = (props.amount * props.ratio).toFixed(2);
    return (
        <div>Amount in €: { props.amount > 0 ? value : ""} </div>)
}


class CurrencyConverter extends React.Component {
    state = {
        amount: 0,
        ratioDollar: 1.34,
        ratioEuro: 1.19,
    }
    handleChange = e => {
        this.setState({
            amount: e.target.value,
        })
    }
    render() {
        const {amount,ratioDollar,ratioEuro} = this.state;
        return (
            <>
                <label>
                    <input
                        type="number"
                        value={amount}
                        onChange={this.handleChange}
                    />
                    <Dollars ratio={ratioDollar} amount={amount} />
                    <Euros ratio={ratioEuro}  amount={amount} />
                </label>
            </>
        )
    }
}






ReactDOM.render(<React.StrictMode><CurrencyConverter /></React.StrictMode>, document.getElementById("root"));