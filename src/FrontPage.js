import React from 'react';
import {Select, MenuItem} from '@material-ui/core'
import drumhandsup from './images/drumhandsup.png'
import drumhandsdown from './images/drumhandsdown.png'
import pianohandsup from './images/pianohandsup.png'
import pianohandsdown from './images/pianohandsdown.png'
import tablahandsup from './images/tablahandsup.png'
import tablahandsdown from './images/tablahandsdown.png'
import drum from './audio/drum.mp3'

class FrontPage extends React.Component{
    state={
        url:drumhandsup,
        count:0,
        instrument:"drums",
        // visibile:false,
        sound:''
    }
    picClick=()=>{
        if(this.state.instrument==="drums"){
            this.setState({url:drumhandsdown})
            setTimeout(() => {
                this.setState({url:drumhandsup})
            }, 100);
            
        }
        if(this.state.instrument==="piano"){
            this.setState({url:pianohandsdown})
            setTimeout(() => {
                this.setState({url:pianohandsup})
            }, 100);
        }
        if(this.state.instrument==="tabla"){
            this.setState({url:tablahandsdown})
            setTimeout(() => {
                this.setState({url:tablahandsup})
            }, 100);
        }
        
    };
    choose=(event)=>{
        if(event.target.value==="drums"){
            this.setState({url:drumhandsup,instrument:event.target.value});
        }
        if(event.target.value==="piano"){
            this.setState({url:pianohandsup,instrument:event.target.value});
        }
        if(event.target.value==="tabla"){
            this.setState({url:tablahandsup,instrument:event.target.value});
        }
    }
render(){ 
    return (
        <>
        <div className="App" >
          
          <label><b>Choose an instrument</b></label>
          </div>
          <div className="App" >
          <Select 
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={this.state.instrument}
                onChange={this.choose}
                label="Select"
                defaultValue="Drums"
            >
                <MenuItem value="drums">Drums</MenuItem>
                <MenuItem value="piano">Piano</MenuItem>
                <MenuItem value="tabla">Tabla</MenuItem>
            </Select>
          </div>
          <div className="App-image">
            
            <img onClick={this.picClick} src={this.state.url} alt="play"/>
          </div>
          </>
      );
    }
    
};

export default FrontPage;