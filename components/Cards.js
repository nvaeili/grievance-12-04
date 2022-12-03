import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div id="cardss">
    <div className='cards'>
      <h1>THE TEAM</h1>
      <h2>Supreme Student Council Officers</h2>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/bprofile.png'
              text='lorem ipsum dolor sit amet consectetur adipiscing elit. Fusce consequat lacus ante, nec maximus felis suspicit vitae. Proin quis nibh eros. Proin eu fermentum tellus, at dapibus turpis.'
              label='President'
              // path='/services'
            />
            <CardItem
              src='images/bprofile.png'
              text='lorem ipsum dolor sit amet consectetur adipiscing elit. Fusce consequat lacus ante, nec maximus felis suspicit vitae. Proin quis nibh eros. Proin eu fermentum tellus, at dapibus turpis.'
              label='Vice-President'
             
            />
            <CardItem
              src='images/bprofile.png'
              text='lorem ipsum dolor sit amet consectetur adipiscing elit. Fusce consequat lacus ante, nec maximus felis suspicit vitae. Proin quis nibh eros. Proin eu fermentum tellus, at dapibus turpis.'
              label='Secretary'
              
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/bprofile.png'
              text='lorem ipsum dolor sit amet consectetur adipiscing elit. Fusce consequat lacus ante, nec maximus felis suspicit vitae. Proin quis nibh eros. Proin eu fermentum tellus, at dapibus turpis.'
              label='Member'
              
            />
              <CardItem
              src='images/bprofile.png'
              text='lorem ipsum dolor sit amet consectetur adipiscing elit. Fusce consequat lacus ante, nec maximus felis suspicit vitae. Proin quis nibh eros. Proin eu fermentum tellus, at dapibus turpis.'
              label='Member'
              
            />
            <CardItem
              src='images/bprofile.png'
              text='lorem ipsum dolor sit amet consectetur adipiscing elit. Fusce consequat lacus ante, nec maximus felis suspicit vitae. Proin quis nibh eros. Proin eu fermentum tellus, at dapibus turpis.'
              label='Member'
              
            />
             <CardItem
              src='images/bprofile.png'
              text='lorem ipsum dolor sit amet consectetur adipiscing elit. Fusce consequat lacus ante, nec maximus felis suspicit vitae. Proin quis nibh eros. Proin eu fermentum tellus, at dapibus turpis.'
              label='Member'
              
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/bprofile.png'
              text='lorem ipsum dolor sit amet consectetur adipiscing elit. Fusce consequat lacus ante, nec maximus felis suspicit vitae. Proin quis nibh eros. Proin eu fermentum tellus, at dapibus turpis.'
              label='Member'
             
            />
            <CardItem
              src='images/bprofile.png'
              text='lorem ipsum dolor sit amet consectetur adipiscing elit. Fusce consequat lacus ante, nec maximus felis suspicit vitae. Proin quis nibh eros. Proin eu fermentum tellus, at dapibus turpis.'
              label='Member'
             
            />
            <CardItem
              src='images/bprofile.png'
              text='lorem ipsum dolor sit amet consectetur adipiscing elit. Fusce consequat lacus ante, nec maximus felis suspicit vitae. Proin quis nibh eros. Proin eu fermentum tellus, at dapibus turpis.'
              label='Member'
              
            />
             <CardItem
              src='images/bprofile.png'
              text='lorem ipsum dolor sit amet consectetur adipiscing elit. Fusce consequat lacus ante, nec maximus felis suspicit vitae. Proin quis nibh eros. Proin eu fermentum tellus, at dapibus turpis.'
              label='Member'
             
            />
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Cards;