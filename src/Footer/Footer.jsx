import React from "react";
import styles from "../Style/footer.module.css";
import Button from "../Components/Button";


const Footer =() => {
    return(
        <div className={styles.box}>
            <div className={styles.row}>
                <div className={styles.column1}>
                    <h1 className={styles.heading}>Cookies</h1>
                </div>
                <div className={styles.column2}>
                    <h1 className={styles.heading}>Terms & Conditions</h1>
                </div>
                <div className={styles.column3}>
                    <h1 className={styles.heading}>Retail Locations</h1>
                </div>
                <div className={styles.column4}>
                    <h1 className={styles.heading}>2025 Indi Coffee Co</h1>
                </div>
            </div>
        </div>
    )
}

export default Footer;