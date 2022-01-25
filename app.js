
const Currency = props => {
    const value = (props.amount * props.ratio).toFixed(2);

        return (
            <div>{props.name}{ props.amount > 0 ? value : ""} </div>)
}


class CurrencyConverter extends React.Component {
    state = {
        amount: 0,
        product: "petrol",

    }

static defaultProps = {
    currencies : [
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
    ]

}

   
    insertSuffix = (select) => {
        if(select === "electricity") return  <em>kWh</em>
        else if(select === "petrol") return <em>litres</em>
        else if(select === "oranges") return <em>kg</em>
        else{
            return null;
        }
    }

    handleChange = e => {
        this.setState({
            amount: e.target.value,
        })
    }
    handleSelect = e => {
        this.setState({
            product: e.target.value,
        })
    }
    render() {
        const amount = this.state.amount;
        const calculators = defaultProps.currencies.map( c => 
            (
                <Currency key={c.id} ratio={c.ratio} amount={amount} name={c.name} />
            ))
        return (
        <>
            <label style={{fontWeight: "bold"}}>Choose product   
                <select onChange={this.handleSelect} style={{marginLeft: "10px"}}>
                    <option value="electricity">electricity</option>
                    <option value="petrol">petrol</option>
                    <option value="oranges">oranges</option>
                </select>
            </label>
            <br />
            <label>
                <input style={{marginTop: "20px"}}
                        type="number"
                        value={amount}
                        onChange={this.handleChange}
                />
                {this.insertSuffix(this.state.product)}
                {calculators}
            </label>
        </>
        )
    }
}






ReactDOM.render(<React.StrictMode><CurrencyConverter /></React.StrictMode>, document.getElementById("root"))