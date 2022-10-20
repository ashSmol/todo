import React from 'react'
import { Link } from 'react-router-dom';

const style = {
    top: '0',
    left: '0',
    width: '100%',
    height: '90px',
    backgroundColor: '#8ca9e0',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
}

class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div style={style}>
                <div><Link to="/">Users</Link></div>
                <div><Link to="/todos">Todos</Link></div>
                <div><Link to="/projects">Projects</Link></div>
                <div>{this.props.isAuthenticated() ? <button onClick={() => this.props.logout()}>Logout</button> :
                    <Link to='/login'>Login</Link>}
                </div>
            </div>
        )
    }
}

export default Header;