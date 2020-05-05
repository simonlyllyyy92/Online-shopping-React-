import React from 'react'

import './directory.styles.scss'
import MenuItem from '../menu-item/menu-item.component'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectDirectorySections} from '../../redux/directory/directory.selector'

const Directory = ({sections}) => {
        return (
            <div className = 'directory-menu'>
                {
                    sections.map(({id, ...otherSectionProps}) => (
                        // a short way to pass all the necessary props to child component
                        <MenuItem key = {id} {...otherSectionProps}/>
                    ))
                }
            </div>
        )
    }


const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})



export default connect(mapStateToProps)(Directory)