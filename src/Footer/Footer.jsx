import React from "react";
import styles from "../Style/footer.module.css";
import Button from "../Components/Button";


const Footer =() => {
    return(
        <div className={styles.box}>
            {/* <div className={styles.line}></div> */}
            <div className={styles.row}>
                <div className={styles.column1}>
                    <p className={styles.heading}>Cookies</p>
                </div>
                <div className={styles.column2}>
                    <p className={styles.heading}>Terms & Conditions</p>
                </div>
                <div className={styles.column3}>
                    <p className={styles.heading}>Retail Locations</p>
                </div>
                <div className={styles.column4}>
                    <p className={styles.heading}>2025 Indi Coffee Co</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;