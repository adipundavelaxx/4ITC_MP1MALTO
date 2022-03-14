import React from 'react';
import CardItem from './carditem';
import './cards.css';

function Cards(){
    return(
        <div className='cards'>
            <h1 className='discover_name'> DISCOVER SOME OF HER WORKS </h1>
            <div className='cards__container'>
                <div className='cards_wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src={require('../images/img-1.png')}
                            text='Worked as one of the developers in their Software Engineering Project: iSITE'
                        />
                        <CardItem
                            src={require('../images/img-2.png')}
                            text='Worked as the Project Manager and one of the developers in their Capstone Project: Agri-Shopping'
                        />
                        <CardItem
                            src={require('../images/img-3.png')}
                            text='Works as a Web Designer at AVS Company'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src={require('../images/img-4.png')}
                            text='Worked as a Graphic Designer at Holifit PH'
                        />
                        <CardItem
                            src={require('../images/img-5.png')}
                            text='Former Director for Creatives and Technical at UST ICS Student Council'
                        />
                        <CardItem
                            src={require('../images/img-6.png')}
                            text='Former Creatives and Technical Team Head at UST SITE - CICS: Society of Information Technology Enthusiasts'

                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;