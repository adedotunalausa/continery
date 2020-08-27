import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear()
    
    return (
        <div className="footer">
            <a className="footer-link" href="https://www.linkedin.com/in/adedotun-alausa" rel="noopener noreferrer" target="_blank"><i className="fab fa-linkedin"></i></a>
            <a className="footer-link" href="https://github.com/adedotunalausa" rel="noopener noreferrer" target="_blank"><i className="fab fa-github"></i></a>
            <a className="footer-link" href="https://www.instagram.com/mousebrushstudio/" rel="noopener noreferrer" target="_blank"><i className="fab fa-instagram"></i></a>
            <p>Copyright © {year} <a className="link" href="https://adedotunalausa.com/" rel="noopener noreferrer" target="_blank">Adedotun Alausa</a></p>
        </div>
    )
}

export default Footer
