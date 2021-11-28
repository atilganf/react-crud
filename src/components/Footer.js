import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faDribbble, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import ReactTooltip from 'react-tooltip'
import { Link } from 'react-router-dom'


function Footer() {
    return (
        <div className="container px-0 footer-cont">
            <div className="d-flex justify-content-between">
                <div>
                    <h4 className="custom-green pb-3">Thank you for supporting us!</h4>
                    <h5 className="custom-dark fw-light">Let's get in touch on any of these platforms.</h5>
                </div>
                <div className="d-flex">
                    <a className="btn-social bg-twitter" data-tip="Follow us" href="#" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <ReactTooltip place="top" type="dark" effect="solid" />
                    <a className="btn-social bg-facebook" data-tip="Like us" href="#" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebookSquare} />
                    </a>
                    <a className="btn-social bg-dribble" data-tip="Follow us" href="#" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faDribbble} />

                    </a>
                    <a className="btn-social bg-github" data-tip="Follow us" href="#" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
            </div>
            <hr />
            <div className="footer-bottom d-flex justify-content-between px-2">
                <div className="copyright">
                    ©<b>
                        <span className="custom-dark"> 2018 </span>
                        <span className="custom-green">Şikayetvar</span>
                    </b>
                </div>
                <Link className="text-secondary" to="/"><b>Posts</b></Link>
            </div>
        </div>
    )
}

export default Footer
