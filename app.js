
const Currency = props => {
    const value = (props.amount * props.ratio).toFixed(2);

        return (
            <div>{props.title}{ props.amount > 0 ? value : ""} </div>)
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
                    <Currency ratio={ratioDollar} amount={amount} title="Amount in dollar: " />
                    <Currency ratio={ratioEuro}  amount={amount}  title="Amount in euro: " />
                </label>
            </>
        )
    }
}






ReactDOM.render(<React.StrictMode><CurrencyConverter /></React.StrictMode>, document.getElementById("root"));