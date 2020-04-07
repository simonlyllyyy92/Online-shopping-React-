import React from 'react'
import './menu-item.styles.scss'
import {withRouter} from 'react-router-dom' 
// here we don't have to pass the 'history' props from homepage down to here

const MenuItem = ({title, imageUrl,size, history, linkUrl, match}) => {
    // match and history props comes from withRoute
    return (
        <div className={`${size} menu-item`} 
            onClick = {() => history.push(`${match.url}${linkUrl}`)}
        >
            <div 
                className = 'background-image' 
                style={{backgroundImage: `url(${imageUrl})`}}
            >

            </div>
            <div className = 'content'>
                <h1 className = 'title'>{title.toUpperCase()}</h1>
                <span className = 'subtitle'>Shop now</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem)