import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from '../Style/productdetail.module.css';
import coffeeCatalogue from '../Utils/products';

const ProductDetail = () => {
  const { id } = useParams();
  const coffee = coffeeCatalogue.find((item) => item.id === id);

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState((coffee?.sizes || ['230g'])[0]);
  const [sizeOpen, setSizeOpen] = useState(false);

  if (!coffee) {
    return (
      <div className={styles.page}>
        <div className={styles.not_found}>
          <h1>Product not found</h1>
          <Link to="/">Back to Products</Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <Link to="/#products" className={styles.back_link}>← Back to Products</Link>
      <div className={styles.wrapper}>
        <div className={styles.image_section}>
          {coffee.badge && (
            <span className={styles.badge_exclusive}>{coffee.badge}</span>
          )}
          <img src={coffee.src} alt={coffee.coffeetitle} className={styles.product_image} />
        </div>

        <div className={styles.details_section}>
          <div className={styles.top_row}>
            <p className={styles.coffee_type}>{coffee.coffeetype}</p>
            {coffee.newDrop && (
              <div className={styles.new_drop_stamp}>NEW<br />DROP</div>
            )}
          </div>

          <h1 className={styles.title}>{coffee.coffeetitle}</h1>
          <p className={styles.price}>R{(coffee.price * quantity).toFixed(2)}</p>
          <p className={styles.notes}>{coffee.coffeenotes}</p>
          <p className={styles.description}>{coffee.description}</p>

          <div className={styles.controls_row}>
            <div className={styles.size_dropdown}>
              <button
                className={styles.size_btn}
                onClick={() => setSizeOpen((o) => !o)}
              >
                {selectedSize} <span className={styles.chevron}>▾</span>
              </button>
              {sizeOpen && (
                <div className={styles.size_options}>
                  {(coffee.sizes || ['230g', '500g']).map((size) => (
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
              <button className={styles.qty_btn} onClick={() => setQuantity((q) => Math.max(1, q - 1))}>−</button>
              <span className={styles.qty_num}>{quantity}</span>
              <button className={styles.qty_btn} onClick={() => setQuantity((q) => q + 1)}>+</button>
            </div>
          </div>

          <button className={styles.add_to_cart}>
            <span>Add to Cart</span>
            <span className={styles.cart_divider}>|</span>
            <span>R{(coffee.price * quantity).toFixed(2)}</span>
          </button>

          <div className={styles.impact_box}>
            <span className={styles.impact_icon}>🌍</span>
            <p className={styles.impact_text}>
              <span className={styles.impact_title}>Choose Your Impact</span>
              At no extra cost, 1% of every order will be donated to support a nonprofit you choose. Add to cart to choose.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
