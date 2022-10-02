import React from 'react'

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
            <div>Menu Item 1</div>
            <div>Menu Item 2</div>
            <div>Menu Item 3</div>
        </div>
    )
}

export default Header;