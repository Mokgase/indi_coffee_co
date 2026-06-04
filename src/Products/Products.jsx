import React from 'react';
import styles from '../Style/products.module.css';
import coffeeCatalogue from '../Utils/products'
import DropDownButton from '../Components/DropDownButton';

const Products = () => {
  return (
        <div id='products' className='w-full h-full'>
            <title>ProductSection</title>
            <meta name="ProductSection" content="This is the Products Section page"/>
            <div className={styles.container}>
                <h1 className={styles.h1}>Meet <span className={styles.color}>Your</span> Coffee</h1>
                <hr className={styles.line} />
                <div className={styles.images_grid}>
                {coffeeCatalogue.map((coffee, index) => (

                    <a href='/'>
                        <div key={index} className={styles.coffee_card}>
                        <img
                        src={coffee.src}
                        alt={coffee.title}
                        className={styles.grid_image}
                        // height={0}
                        // width={0}
                        quality={100}
                        />
                    <div className={styles.coffee_info}>
                        <p className={styles.coffee_type}>{coffee.coffeetype}</p>
                        <p className={styles.coffee_title}>{coffee.coffeetitle}</p>
                        <p className={styles.coffee_notes}>{coffee.coffeenotes}</p>
                        <DropDownButton/>                        
                    </div>
                    </div>
                    </a>
                ))}
                </div>
            </div>
        </div>

  )
};

export default Products;