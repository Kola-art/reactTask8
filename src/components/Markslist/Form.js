import React from 'react';
import style from './Markslist.module.style.css';
import { iconTypes } from '../icon/iconTypes';
import { Button } from '../button';

export class SubmitForm extends React.Component {
    
    constructor(props){
        super(props);
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.state = {
            value: ''
        }
    }

    handleChange(e){
        this.setState({value: e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        if(this.state. value){
            this.props.onAdd(
                this.state.value
           );
           this.setState({value: ''});
        }
    }

    render(){
        
        return(
            <div>
           
                <form className="Form" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Insert something" className="inputField" onChange={this.handleChange} value={this.state.value} />
                    <Button type="submit" className="Btns" color="primary" iconTypes={iconTypes.plus} />
                </form>
            </div>
        )
    }
}
