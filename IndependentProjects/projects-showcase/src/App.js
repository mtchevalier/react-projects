import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectCard from './ProjectCard/ProjectCard';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

class App extends Component {
  state = {
    projects : [
      { name:'shoppingList', tags: ['basic-syntax','user-input','intro','utility'] },
      { name:'highCard', tags: ['game','user-input']}
    ]
  }
  render() {

    let projectCards = null;
    projectCards = (
      <div>
        {this.state.projects.map((project, index) => {
          return <ProjectCard
            name={project.name}
            tags={project.tags.join(' ')}/>
        })}
      </div>
    );
    return (
      <div className="App">
        <Jumbotron>
        <h1>Hello, Recruiters, Technical Leads and the like!</h1>
        <p>
          This is my presentation platform for all of my personal React work.
        </p>
        <p>
          <Button 
            variant="primary"
            href="https://www.linkedin.com/in/matthew-chevalier"
            target="_blank"
            >LinkedIn Page</Button>
        </p>
        </Jumbotron>
        {projectCards}
      </div>
    );
  }
}

export default App;
