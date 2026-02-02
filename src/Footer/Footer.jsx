import React from "react";
import styles from "../Style/footer.module.css";
import Button from "../Components/Button";


const Footer =() => {
    return(
        <div className={styles.box}>
            {/* <div className={styles.line}></div> */}
            <div className={styles.row}>
                <div className={styles.column1}>
                    <p className={styles.heading}>Contact Us</p>
                    <a className={styles.listitems} id="mail" href="" target="_blank">info@indicoffeeco.co.za</a>
                    <br/>
                    <a className={styles.listitems} href="" target="_blank">FAQ's</a>
                </div>
                <div className={styles.column2}>
                    <p className={styles.heading}>Legal</p>
                    <a className={styles.listitems} id="mail" href="/Footer/TermsAndConditions" target="_blank">Terms & Conditions</a>
                    <br/>
                    <a className={styles.listitems} href="/Footer/PrivacyPolicy" target="_blank">Privacy Policy</a>
                </div>
                <div className={styles.column3}>
                    <p className={styles.heading}>Retail Locations</p>
                    <a className={styles.listitems} id="mail" href="" target="_blank">Pretoria</a>
                    <br/>
                    <a className={styles.listitems} href="" target="_blank">Johannesburg</a>
                </div>
                <div className={styles.column4}>
                    <p className={styles.heading}>2026 Indi Coffee Co</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;