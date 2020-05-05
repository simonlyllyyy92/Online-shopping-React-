import React from 'react'

import './back-drop.styles.scss'

const BackDrop = (props) => (
    <div className = 'backdrop' onClick = {props.click}></div>
)

export default BackDrop;