import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../Style/products.module.css';
import coffeeCatalogue from '../Utils/products';


const ProductCard = ({ coffee }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState((coffee.sizes || ['230g'])[0]);
  const [sizeOpen, setSizeOpen] = useState(false);

  return (
    <div className={styles.coffee_card}>
      <div className={styles.image_wrapper}>
        <Link to={`/product/${coffee.id}`}>
          <img src={coffee.src} alt={coffee.coffeetitle} className={styles.grid_image} />
        </Link>
        {coffee.badge && (
          <span className={styles.badge_exclusive}>{coffee.badge}</span>
        )}
        {coffee.newDrop && (
          <div className={styles.badge_new_drop}>NEW<br />DROP</div>
        )}
      </div>


      <div className={styles.coffee_info}>
        <div className={styles.meta_row}>
          <span className={styles.coffee_type}>{coffee.coffeetype}</span>
          <div className={styles.roast_row}>
            <span className={styles.roast_label}>ROAST</span>
            <div className={styles.roast_track}>
              <div
                className={styles.roast_thumb}
                style={{ left: `${(coffee.roast || 0.5) * 100}%` }}
              />
            </div>
          </div>
        </div>

        <Link to={`/product/${coffee.id}`} className={styles.coffee_title_link}>
          <p className={styles.coffee_title}>{coffee.coffeetitle}</p>
        </Link>
        <p className={styles.coffee_notes}>{coffee.coffeenotes}</p>

        <div className={styles.controls_row}>
          <div className={styles.size_dropdown}>
            <button
              className={styles.size_btn}
              onClick={() => setSizeOpen(o => !o)}
            >
              {selectedSize} <span className={styles.chevron}>▾</span>
            </button>
            {sizeOpen && (
              <div className={styles.size_options}>
                {(coffee.sizes || ['230g', '500g']).map(size => (
                  <button
                    key={size}
                    className={styles.size_option}
                    onClick={() => { setSelectedSize(size); setSizeOpen(false); }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className={styles.quantity_control}>
            <button className={styles.qty_btn} onClick={() => setQuantity(q => Math.max(1, q - 1))}>−</button>
            <span className={styles.qty_num}>{quantity}</span>
            <button className={styles.qty_btn} onClick={() => setQuantity(q => q + 1)}>+</button>
          </div>
        </div>

        <button className={styles.add_to_cart}>
          <span>Add to Cart</span>
          <span className={styles.cart_divider}>|</span>
          <span>R{coffee.price}</span>
        </button>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <div id='products' className='w-full h-full'>
      <div className={styles.container}>
        <h1 className={styles.h1}>Meet <span className={styles.color}>Your</span> Coffee</h1>
        <div className={styles.images_grid}>
          {coffeeCatalogue.map((coffee, index) => (
            <ProductCard key={index} coffee={coffee} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
