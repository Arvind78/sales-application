import React, { useState } from 'react';
import Select from 'react-select';
import styles from '../Styles/OrderModel.module.css';

/**
 * 🛒 OrderModal Component
 *
 * This component provides a modal interface for selecting products from a list.
 * Users can open the modal by clicking a button, select multiple products from
 * a dropdown menu, and remove selected products if needed.
 *
 * 📝 Features:
 * - Open and close modal functionality
 * - Multi-select dropdown for products
 * - Display selected products with additional details
 * - Remove selected products
 */

const OrderModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const openModalHandler = () => setIsOpen(true);
  const closeModalHandler = () => setIsOpen(false);

  const handleChange = (selectedOptions) => {
    setSelectedProducts(selectedOptions || []);
  };

  const handleRemove = (productId) => {
    setSelectedProducts(
      selectedProducts.filter((product) => product.id !== productId)
    );
  };

  const products = [
    { id: 1, name: 'Product 5', remaining: 104, rate: 324 },
    { id: 2, name: 'Stocked Product I', remaining: 46, rate: 324 },
    { id: 3, name: 'Benoit Saint Denis', remaining: 30, rate: 324 },
    { id: 4, name: 'Anonymous Product', remaining: 80, rate: 324 },
    { id: 5, name: 'Stocked Tea I', remaining: 100, rate: 324 },
  ];

  return (
    <div>
      <button onClick={openModalHandler} className={styles.modalBtn}>
        {' '}
        + Sales
      </button>
      {isOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <div className={styles.closeModelConteiner}>
              <span
                className={styles.closeBtn}
                onClick={closeModalHandler}
              >
                X
              </span>
            </div>
            <Select
              id="product-select"
              options={products}
              isMulti
              getOptionLabel={(option) => option.name}
              getOptionValue={(option) => option.id}
              onChange={handleChange}
              value={selectedProducts}
            />
            <div className={styles.selectedProducts}>
              {selectedProducts.map((product, index) => (
                <div
                  key={product.id}
                  className={styles.productDetails}
                >
                  <div className={styles.productHeader}>
                    <span>
                      {index + 1}. {product.name}
                    </span>
                    <button
                      onClick={() => handleRemove(product.id)}
                      className={styles.removeBtn}
                    >
                      Remove
                    </button>
                  </div>
                  <div className={styles.productInfo}>
                    <label>Selling Rate</label>
                    <input
                      type="number"
                      placeholder="Enter selling rate"
                    />
                    <label>Total Items</label>
                    <input
                      type="number"
                      placeholder="Enter quantity"
                    />
                    <div className={styles.remainingItems}>
                      {product.remaining} Item(s) Remaining
                    </div>
                    <div className={styles.rate}>
                      Rate: ₹ {product.rate}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderModal;
