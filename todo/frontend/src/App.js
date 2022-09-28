import React from 'react';
import './App.css';
import UserList  from './components/users';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'users': []
    }
  }
  componentDidMount() {
    const users = [
      {
        'id': '1',
        'username': 'Fedyan',
        'first_name': 'Фёдор',
        'last_name': 'Достоевский',
        'email': 'ash@topdog.ru.net'
      },
      {
        'id': '2',
        'username': 'Alex',
        'first_name': 'Александр',
        'last_name': 'Пушкин',
        'email': 'ash@topdog123.ru.net'
      },
    ]
    this.setState(
      {
        'users': users
      }
    )
  }
  render() {
    return (
      <div>
        <UserList users={this.state.users} />
      </div>)
  }
}
export default App;