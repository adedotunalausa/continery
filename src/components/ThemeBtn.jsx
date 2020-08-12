import React from 'react'

export const ThemeBtn = (props) => {
    return (
        <div className="theme-button">
            <input id="dark-theme" onClick={props.addTheme} className="theme-input" type="checkbox" />
            <label htmlFor="dark-theme">Theme</label>
        </div>
    )
}
