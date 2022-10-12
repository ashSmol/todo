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

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error);
    console.log(errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

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
        const users = response.data
        this.setState(
          {
            'users': users,
          }
        )
      }).catch(error => console.log(error))

    axios.get('http://127.0.0.1:8000/todos/')
      .then(response => {
        const todos = response.data
        this.setState(
          {
            'todos': todos,
          }
        )
      }).catch(error => console.log(error))

    axios.get('http://127.0.0.1:8000/projects/')
      .then(response => {
        const projects = response.data
        this.setState(
          {
            'projects': projects,
          }
        )
      }).catch(error => console.log(error))

  }

  render() {
    return (
      <div>

        <Header />
        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <Link to="/">Todos</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            
              <Route exact path='/' element={ <ErrorBoundary> <TodosList todos={this.state.todos} /> </ErrorBoundary>} />
            
            
              <Route exact path='/projects' element={<ErrorBoundary><ProjectsList projects={this.state.projects} /></ErrorBoundary>} />
            
            
              <Route exact path='/users' element={<ErrorBoundary><UserList users={this.state.users} /></ErrorBoundary>} />
            
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    )

  }
}
export default App;