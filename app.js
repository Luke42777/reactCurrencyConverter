
const Currency = props => {
    const value = (props.amount * props.ratio* props.price).toFixed(2);

        return (
            <div>{props.name}{ props.amount > 0 ? value : ""} </div>)
}


class CurrencyConverter extends React.Component {
    state = {
        amount: "",
        product: "",
    }

static defaultProps = {
    currencies: [
        {
            id: 0,
            name: "Pounds: ",
            ratio: 1,
        },

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
    ],
    prices: {
        electricity: 0.17,
        petrol: 1.48,
        oranges: 2, 
    }

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
            amount: "",
            product: e.target.value,   
        })
    }

    selectPrice = product => {
        return this.props.prices[product];
    }
    render() {
        const {amount,product} = this.state;
        const calculators = this.props.currencies.map( c => 
            (
                <Currency key={c.id} ratio={c.ratio} amount={amount} name={c.name} price={this.selectPrice(product)} />
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