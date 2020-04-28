import React from 'react'

import './responsive-toggle-icon.styles.scss'

const ResponsiveToggleIcon = props => (
    <button className = 'toggle-button' onClick = {props.click}>
        <div className = 'toggle-button__line'/>
        <div className = 'toggle-button__line'/>
        <div className = 'toggle-button__line'/>
    </button>
)

export default ResponsiveToggleIcon