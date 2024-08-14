class Header extends React.Component(){
    constructor(props){
        super(props);
        this.state = {favouriteColor: "Red"};
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({favouriteColor: "Blue"})
        },1000)
    }

    render(){
        return (
            <h1>My favourite color is {this.state.favouriteColor}</h1>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />)