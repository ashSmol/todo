import React from 'react';
import './App.css';
import axios from 'axios';
import UserList from './components/users';
import TodosList from './components/todos';
import ProjectsList from './components/projects';
import Footer from './components/footer';
import Header from './components/main_menu';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'users': [],
      'todos': [],
      'projects': [],
    }
  }
  componentDidMount() {
    axios.get('http://127.0.0.1:8000/users/')
      .then(response => {
        const users = response.data;
        if (users) {
          this.setState(
            {
              'users': users,
            }
          )
        }
      }).catch(error => console.log(error));

    axios.get('http://127.0.0.1:8000/todos/')
      .then(response => {
        const todos = response.data
        if (todos) {
          this.setState(
            {
              'todos': todos,
            }
          )
        }
        else {
          this.setState(
            {
              'todos': [],
            })
        }
      }).catch(error => console.log(error));

    axios.get('http://127.0.0.1:8000/projects/')
      .then(response => {
        const projects = response.data
        if (projects) {
          this.setState(
            {
              'projects': projects,
            }
          )
        }
        else {
          this.setState(
            {
              'projects': [],
            })
        }

      }).catch(error => console.log(error));

  }

  render() {
    return (
      <div>


        <BrowserRouter>
        <Header />

          <Routes>

            <Route exact path='/' element={<UserList users={this.state.users} />} />


            <Route exact path='/projects' element={<ProjectsList projects={this.state.projects} />} />


            <Route exact path='/todos' element={<TodosList todos={this.state.todos} />} />

          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    )

  }
}
export default App;