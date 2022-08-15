import React, { Component} from "react";
import Car from './Cars';
import MyHeader from "./MyHeader";
import Wrapper from "./Wrapper";

class Mycars extends Component {

    noCopy = () => {
        alert('Merci de ne pas copier le texte');
    }

    addStyle = (e) =>{
        if (e.target.classList.contains('styled')) {
            e.target.classList.remove('styled');  
        } else{
            e.target.classList.add('styled');
        }
    }
    
    state = {
        cars: ["Ford", "Mercedes", "Peugeot"]
    }

    render(){
        return (
            <div >
                <Wrapper >
                    <MyHeader myStyle= {this.props.color}> 
                    {this.props.title} 
                    </MyHeader>
                </Wrapper>

                <h1 onMouseOver={this.addStyle} >Mon catalogue Voitures</h1>

                <p onCopy={this.noCopy}>Lorem lorem lorem lorem lorem lorem</p>

                <Car color="red">{this.state.cars[0]}</Car>
                <Car>{this.state.cars[1]}</Car>
                <Car color="black" >{this.state.cars[2]}</Car>
            </div>
        )
    }
}


export default Mycars;