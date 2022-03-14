import React from 'react'
// import {Button} from './Button';
import '../App.css';

function FirstSection() {
    return (
        <div className='first-container'>
            <img className="firstimage" src={require('../images/img-bg.jpg')} alt='Adriana Pundavela Malto' />
            <h1> WELCOME TO ADRIANA'S PROFILE </h1>
            <p>
            Adriana is an Information Technology student, <br/>
            but dreams to be a certified scuba and free diver. <br/><br/>
            Do you want to know more about her? Scroll to discover her. <br/>
            </p>
            <div className="first-btns"> 
                {/* <Button className="btns" buttonStyle="btn--outline"
                buttonSize="btn--large"> GET STARTED </Button> */}
            
            </div>
        </div>
    )
}

export default FirstSection