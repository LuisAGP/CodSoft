import React from 'react'
import {Link} from 'react-router-dom'
import '../../static/css/footer.css'

const Footer = () => {
    return (
        <div>
            <footer>
                <h3>CODSOFT</h3>

                <div className="footer-grid">

                    <div>
                        <h4>About us</h4>

                        <p>We are enthusiastic programmers who think about improving the programming field every day.</p>
                    </div>

                    <div>
                        <h4>Contact</h4>
                        <ul>
                            <li>Email: luis.lagp@outlook.com</li>
                            <li>Linkedin: <a href="https://www.linkedin.com/in/luis-angel-god%C3%ADnez-padilla-5659761a5/">Luis GP </a></li>
                        </ul>
                    </div>

                    <div className="nav-options">
                        <h4>Explore</h4>

                        <ul>
                            <li><Link to="/modalmaker">Modal Maker</Link></li>
                            <li><Link to="#">Box-Shadow Calculator</Link></li>
                            <li><Link to="#">Button generator</Link></li>
                            <li><Link to="#">General Ajax function</Link></li>
                            <li><Link to="#">Image Reziser</Link></li>
                            <li><Link to="#">Table Generator</Link></li>
                        </ul>
                    </div>

                </div>
            </footer>
        </div>
    )
}

export default Footer
