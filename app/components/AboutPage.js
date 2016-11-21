import React from 'react';
import { Container, Divider, List, Grid, Header } from 'semantic-ui-react';

class AboutPage extends React.Component {
  render() {
    return (
      <Container text>
        <Header className='about-header' as='h2'>About</Header>
        <Divider/>
        <p className='about-text'>This example project combines React, Redux and Firebase with Auth and Database. This is a good starting point for modern web apps using bunch of awesome new front end technologies includes webpack build system, hot reloading, routing & sass support.</p>
        <p className='about-text'>It demonstrates authentication, navigation, asynchronous data fetching from an API, sorting and searching items, error handling, etc. The app contains a 'locked down' Books page which requires a user to log in up before content will be visible. More information how to install and setup this project you can find in Github repo.</p>
        <Header as='h2'>Used Technologies</Header>
        <Divider/>
        <List className='about-list' bulleted>
          <List.Item>React</List.Item>
          <List.Item>Redux</List.Item>
          <List.Item>Redux Thunk</List.Item>
          <List.Item>React Router</List.Item>
          <List.Item>Firebase</List.Item>
          <List.Item>Semantic UI React</List.Item>
          <List.Item>Babel</List.Item>
          <List.Item>Webpack</List.Item>
        </List>
      </Container>
    );
  }
}

export default AboutPage;
