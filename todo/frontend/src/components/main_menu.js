import React from 'react'
import { Link } from 'react-router-dom';

const style =  {
    top:'0',
    left:'0',
    width:'100%',
    height: '90px',
    backgroundColor: '#8ca9e0',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  }

const Header = () => {
    return (
        <div style={style}>
            <div><Link to="/">Users</Link></div>
            <div><Link to="/todos">Todos</Link></div>
            <div><Link to="/projects">Projects</Link></div>
        </div>
    )
}

export default Header;