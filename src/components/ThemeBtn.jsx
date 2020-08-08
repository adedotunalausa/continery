import React from 'react'

export const ThemeBtn = (props) => {
    return (
        <div className="theme-button">
            <div className="theme-sign">
                {props.mode === "dark-theme" ? <i className="fas fa-moon"></i> : <i className="fas fa-sun"></i>}
            </div>
            <input id="dark-theme" onClick={props.addTheme} className="theme-input" type="checkbox" />
            <label htmlFor="dark-theme">Theme</label>
        </div>
    )
}
