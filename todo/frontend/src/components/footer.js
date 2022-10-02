import React from 'react'

const style =  {
    position:'fixed',
    bottom:'0',
    left:'0',
    width:'100%',
    height: '90px',
    backgroundColor: '#8ca9e0',
    textAlign: 'center',
  }

const Footer = () => {
    return (
        <div style={style}>
            <p>This is my Footer!!!</p>
            <p>2022. All rights Reserved</p>
        </div>
    )
}

export default Footer;