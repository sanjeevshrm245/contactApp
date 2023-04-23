import React from 'react';

class AddContact extends React.Component{
    temp = 1
    state = {
        Name:'',
        Email:'',
        id:'',
    }
    add=(e)=>{
        
        e.preventDefault();
        if(this.state.Name === "" || this.state.Email ===""){
            alert('All fields are mandatory !');
            return;
        }
        // this.setState({id:this.temp});
        this.state.id=this.temp
        this.temp=this.temp+1
        this.props.addContactHandler(this.state);
        this.setState({Name:"", Email:""});
    }
render(){
    return(
        <div className='ui main'>
            <h2>Add Contact</h2>
            <form className='ui form' onSubmit={this.add}>
                <div className='field'>
                    <label>Name</label>
                    <input type='text' name='name' placeholder='Name' value={this.state.Name} onChange={ (e)=>this.setState({Name:e.target.value})}/>
                </div>
                <div className='field'>
                    <label>Email</label>
                    <input type='text' name='Email' placeholder='Email' value={this.state.Email} onChange={ (e)=>this.setState({Email:e.target.value})}/>
                </div>
                <div className='field'>
                    <label>Id</label>
                    <input type='text' name='id' placeholder='id' value={this.temp} onChange={ (e)=>this.setState({id:e.target.value})}/>
                </div>
                <button className='ui button blue'>Add</button>
            </form>
        </div>
    )
}
}

export default AddContact;