import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Image, List } from 'semantic-ui-react';
import PropType from 'prop-types';
import BarberChat from './BarberChat';

class BarberDashboard extends Component {
  constructor(props) {
    super(props);

    console.log('profile', props.profile);
    this.state = {
      name: `${props.profile.fname}${props.profile.lname}`,
    };
  }
  render() {
    return (
      <div>
        <nav className="snyp-menu" />
        <Grid>
          <Row className="show-grid">
            <Col xs={6} md={4}><code>
              <Image className="snyppr-img" src="https://d1w2poirtb3as9.cloudfront.net/4d3bab3df8c05d96ddf9.jpeg" size="small" shape="circular" />
              <List size="small" selection verticalAlign="middle">

                <List.Item>
                  <List.Content>
                    <List.Header>Home</List.Header>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header>Profile</List.Header>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header>Payment</List.Header>
                  </List.Content>
                </List.Item>
                <List.Item onClick={this.props.logout}>
                  <List.Content>
                    <List.Header onClick={this.props.logout} >Log Out</List.Header>
                  </List.Content>
                </List.Item>
              </List>
            </code></Col>
          </Row>
          <img alt="chat-svg" className="chat-svg" src="/public/assets/speech-bubble.svg" />
          <BarberChat name={this.state.name} />
        </Grid>
        <div className="snyp-footer" />
      </div>
    );
  }
}

BarberDashboard.propTypes = {
  logout: PropType.func.isRequired,
  profile: PropType.string.isRequired,
};

export default BarberDashboard;
