import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  state = {
    isLoadig: true,
    movies: []
  };
  componentDidMount(){
    setTimeout(()=>{
      this.setState({ isLoadig: false });
    }, 6000);
  }
  render(){
    const { isLoadig } = this.state;
    return <div>{isLoadig ? "Loading..." : "We are ready"}</div>
  }
}

export default App;
