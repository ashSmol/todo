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
import Cookies from 'universal-cookie';


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
    const headers = this.getHeaders();

    axios.get('http://127.0.0.1:8000/users/', { headers })
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

    axios.get('http://127.0.0.1:8000/todos/', { headers })
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

    axios.get('http://127.0.0.1:8000/projects/', { headers })
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

  clearAllData() {
    this.setState({
      'users': [],
      'todos': [],
      'projects': [],
    })
  }

  setToken(token) {
    const cookies = new Cookies()
    cookies.set('token', token)
    this.setState({ 'token': token }, () => this.loadData())
  }

  isAuthenticated() {
    return this.state.token != ''
  }

  logout() {
    this.setToken('');
    this.clearAllData();
  }

  getHeaders() {
    let headers = {
      'Content-Type': 'application/json'
    }
    if (this.isAuthenticated()) {
      headers['Authorization'] = 'Token ' + this.state.token
    }
    return headers
  }

  getTokenFromApi(username, password) {
    axios.post('http://127.0.0.1:8000/api-token-auth/', { 'username': username, 'password': password }).
      then(response => this.setToken(response.data['token'])).
      catch(error => alert("Не удалось получить токен авторизации", error));
  }

  getTokenFromCookies() {
    const cookies = new Cookies();
    const token = cookies.get('token');
    this.setState({ 'token': token }, () => this.loadData());
  }

  componentDidMount() {
    this.getTokenFromCookies();
  }

  render() {
    return (
      <div>


        <BrowserRouter>
          <Header isAuthenticated={() => this.isAuthenticated()} logout={() => this.logout()} />

          <Routes>

            <Route exact path='/' element={<UserList users={this.state.users} />} />


            <Route exact path='/projects' element={<ProjectsList projects={this.state.projects} />} />


            <Route exact path='/todos' element={<TodosList todos={this.state.todos} />} />
            <Route exact path='/login' element={<LoginForm getTokenFromApi={(username, password) => this.getTokenFromApi(username, password)} />} />

          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    )

  }
}
export default App;