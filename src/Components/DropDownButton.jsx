import React from 'react'
import styles from '../Style/roundedDropDownButton.module.css';

const DropDownButton = () => {
    return(
        <div className={styles.paste_button}>
            <button className={styles.button}>size &nbsp; ▼</button>
            <div className={styles.dropdown_content}>
                <a href="#">230g</a>
                <a href="#">500g</a>
                <a id="bottom" href="#">1kg</a>
            </div>
        </div>
    )
}

export default DropDownButton