import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export default class Booklist extends Component {
    static contextType = ThemeContext;
    render() {
        const {isLightTheme,light,dark} = this.context;
        const theme = isLightTheme ? light: dark;
        return (
            <div className="book-list"
                style={{color:theme.syntax,background:theme.bg}}
            >
                <ul>
                    <li style={{background:theme.bg}}>the name of the wind</li>
                    <li style={{background:theme.bg}}>ender's game</li>
                    <li style={{background:theme.bg}}> absolute sandman</li>
                </ul>
            </div>
        )
    }
}