
const Currency = props => {
    const value = (props.amount * props.ratio).toFixed(2);

        return (
            <div>{props.name}{ props.amount > 0 ? value : ""} </div>)
}


class CurrencyConverter extends React.Component {
    state = {
        amount: 0,
    }

    currencies =[
        {
            id: 1,
            name: "dollar: ",
            ratio: 1.34,
        },
        {
            id: 2,
            name: "euro: ",
            ratio: 1.19,
        },
        {
            id: 3,
            name: "zloty: ",
            ratio: 4.75,
        },
    ];

    handleChange = e => {
        this.setState({
            amount: e.target.value,
        })
    }
    render() {
        const amount = this.state.amount;
        const calculators = this.currencies.map( c => 
            (
                <Currency key={c.id} ratio={c.ratio} amount={amount} name={c.name} />
            ))
        return (
            <>
                <label>
                    <input
                        type="number"
                        value={amount}
                        onChange={this.handleChange}
                    />
                {calculators}
                </label>
            </>
        )
    }
}






ReactDOM.render(<React.StrictMode><CurrencyConverter /></React.StrictMode>, document.getElementById("root"))