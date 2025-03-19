import React from "react";
import { footerContainer, footerSection, footerSocialMedia } from "../../assets/styles/footer.css";
import { sectionContainer } from "../../assets/styles/core.css";
import facebookIcon from "../../assets/images/facebook-icon.svg";
import instagramIcon from "../../assets/images/instagram-icon.svg";
import linkedinIcon from "../../assets/images/linkedin-icon.svg";
import xIcon from "../../assets/images/x-icon.svg";


const Footer = () => {
    return (
        <footer className={footerSection}>
            <div className={sectionContainer}>
                <div className={footerSocialMedia}>
                    <img
                        src={facebookIcon}
                        alt="Facebook icon"
                    />
                    <img
                        src={instagramIcon}
                        alt="Instagram icon"
                    />
                    <img
                        src={xIcon}
                        alt="X icon"
                    />
                    <img
                        src={linkedinIcon}
                        alt="Linkedin icon"
                    />
                </div>


            </div>
        </footer>
    )
}

export default Footer;