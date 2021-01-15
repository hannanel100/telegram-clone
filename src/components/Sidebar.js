import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import { Avatar, IconButton } from '@material-ui/core'
import './Sidebar.css'
import { BorderColorOutlined, PhoneOutlined, Settings, QuestionAnswerOutlined } from '@material-ui/icons'
import SidebarThread from './SidebarThread'


const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__search">
                    <SearchIcon className="sidebar__searchIcon" />

                    <input placeholder="Search" className="sidebar__input" />
                </div>
                <IconButton variant="outlined">
                    <BorderColorOutlined id="sidebar__button" />
                </IconButton>
            </div>
            <div className="sidebar__threads">
                <SidebarThread />
                <SidebarThread />

            </div>
            <div className="sidebar__bottom">
                <Avatar />
                <IconButton>
                    <PhoneOutlined />
                </IconButton>
                <IconButton>
                    <QuestionAnswerOutlined />
                </IconButton>
                <IconButton>
                    <Settings />
                </IconButton>
            </div>

        </div >
    )
}

export default Sidebar
