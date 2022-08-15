import react, {Component} from 'react';
import Mycars from './components/Mycars';
import './App.css';

class App extends Component {

  state = {
    titre: 'Mon Catalogue Voitures',
    color: 'green'
  }

  changeTitle = (e) =>{
    this.setState({
      titre: 'Mon nouveau titre'
    })
  }

  changeViaParam = (titre) =>{
    this.setState({
      titre
    })
  }

  changeViaBind = (param) => {
    this.setState({
      titre: param 
    })
  }


  changeViaInput = (e) => {

    this.setState({
      titre: e.target.value
    })
    
  }

  render(){
    return (
      <div className="App">
        <Mycars 
         style={{color: 'red'}}    
         color={this.state.color} 
         title={this.state.titre}  
        />

        <button onClick={this.changeTitle}>Changer le nom en dur </button>
        <button onClick={() => this.changeViaParam('Titre via un param')}>Changer le Param </button>
        <button onClick={this.changeViaBind.bind(this, 'Titre Via bind')} >Changer le bind </button>
        <input type='text' onChange={this.changeViaInput} value={this.state.titre}/>

      </div>
    );
  }
  }


export default App;