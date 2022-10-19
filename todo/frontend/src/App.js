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
import LoginForm from './components/LoginForm';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'users': [],
      'todos': [],
      'projects': [],
      'token': '',
    }
  }

  loadData() {
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

  setToken(token){
    console.log(token)
  }

  getTokenFromApi(username, password) {
    axios.post('http://127.0.0.1:8000/api-token-auth/', { 'username': username, 'password': password }).
      then(response => this.setToken(response.data['token'])).
      catch(error => alert("Не удалось получить токен авторизации"));
  }

  componentDidMount() {
    this.loadData()
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
            <Route exact path='/login' element={<LoginForm getTokenFromApi={(username, password) => this.getTokenFromApi(username, password) } />} />

          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    )

  }
}
export default App;