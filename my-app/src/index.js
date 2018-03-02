import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import {Menu, Image, Grid, Icon} from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    const itemStyle = { color: "#ccc", fontSize: "22px" };
    return (
    <Menu className='topmenu'>
        <Menu.Item><Image item src='http://courses.ics.hawaii.edu/ics314f17/morea/ui-frameworks/hard-rock-logo.png'/></Menu.Item>
        <Menu.Item style={itemStyle} position="right">CAFES</Menu.Item>
        <Menu.Item style={itemStyle}>HOTELS</Menu.Item>
        <Menu.Item style={itemStyle}>CASINOS</Menu.Item>
        <Menu.Item style={itemStyle}>LIVE</Menu.Item>
        <Menu.Item style={itemStyle}>SHOP</Menu.Item>
        <Menu.Item style={itemStyle}>BLOG</Menu.Item>
        <Menu.Item style={itemStyle}>REWARDS</Menu.Item>
        </Menu>
    );
  }
}

class MidSection extends React.Component {
  render() {
    return (
        <Image fluid src='http://www.hardrock.com/cafes/honolulu/files/2384/Honolulu_Entrance.jpg'/>
  );
  }
}

class Footer extends React.Component {
  render() {
    return (
        <div className="footer-background">
          <Grid container={true} row={2}>
            <Grid.Row classname="footer-one" centered>
              HARD ROCK CAFE HONOLULU
            </Grid.Row>

            <Grid.Row centered>
              <Icon name='phone icon'/> +1-808-955-7383 &nbsp; &nbsp; &nbsp;
              <Icon name='mail icon'/>  Email Us &nbsp; &nbsp; &nbsp;
              <Icon name='home icon'/>        280 Beachwalk, Honolulu, Hawaii 96815 &nbsp; &nbsp; &nbsp;
              <Icon name='twitter icon'/>
              <Icon name='facebook icon'/>
              <Icon name='instagram icon'/>
              <Icon name='pinterest icon'/>
              <Icon name='tripadvisor icon'/>
            </Grid.Row>
          </Grid>
        </div>


    );
  }
}

class HardRock extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <MidSection/>
          <Footer/>
        </div>
    );
  }
}




ReactDOM.render(<HardRock/>, document.getElementById('root'));