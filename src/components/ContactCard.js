import React from "react";
import download from '../images/download.png'

const ContactCard = (props) => {
    const {id,Name,Email}=props.contact
return (
    <div className='item' style={{marginTop:'1rem', paddingTop:'1rem'}}>
        <img className="ui avatar image" style={{}} src={download} alt="user" />
                <div className='content'>
                    {/* <div>{contact.id}</div> */}
                    <div className='header' style={{marginLeft:'4rem'}}>{Name}</div>
                    <div style={{marginLeft:'4rem'}}>{Email}</div>
                </div>
                <i className='trash alternate outline icon'
                style={{ color:'red',marginTop:'7px', display:'inline', marginLeft:'10rem'}}
                onClick={()=>props.clickHandler(id)}></i>
    </div>
);
}

export default ContactCard; 