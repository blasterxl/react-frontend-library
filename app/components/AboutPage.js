import React from 'react';
import { Container, Divider, List, Grid, Header } from 'semantic-ui-react';

class AboutPage extends React.Component {
  render() {
    return (
      <Container text>
        <Header className='about-header' as='h2'>About</Header>
        <Divider/>
        <p className='about-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem ipsam animi similique iure, delectus nobis velit porro dolor et esse labore, odio quis explicabo provident omnis minima incidunt accusamus repudiandae!</p>
        <p className='about-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate rem ab officiis aliquam ipsam reprehenderit placeat aut culpa quibusdam voluptatibus?</p>
        <Header as='h2'>Used Technologies</Header>
        <Divider/>
        <List className='about-list' bulleted>
          <List.Item>React</List.Item>
          <List.Item>Redux</List.Item>
          <List.Item>React Router</List.Item>
          <List.Item>Firebase</List.Item>
          <List.Item>Semantic UI React</List.Item>
          <List.Item>Webpack</List.Item>
        </List>
      </Container>
    );
  }
}

export default AboutPage;
