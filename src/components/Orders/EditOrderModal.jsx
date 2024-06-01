import React, { useState } from 'react';
import Select from 'react-select';
import { HiDotsHorizontal } from 'react-icons/hi';
import styles from '../Styles/EditOrderModal.module.css';

/**
 * 🛒 EditOrderModal Component
 *
 * This component renders a modal for selecting and viewing order details. 
 * It includes:
 * - A button to open the modal
 * - A multi-select dropdown to choose products
 * - Display of selected products with options to remove them
 *
 * Props:
 * - id: The identifier for the order being edited
 *
 * State:
 * - isOpen: Boolean to track if the modal is open or closed
 * - selectedProducts: Array of selected product objects
 *
 * Features:
 * - Open and close modal functionality
 * - Multi-select dropdown for products
 * - Display and remove selected products
 */

const EditOrderModal = ({ id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);

  // Handler to open the modal
  const openModalHandler = () => setIsOpen(true);

  // Handler to close the modal
  const closeModalHandler = () => setIsOpen(false);

  // Handler to manage changes in selected products
  const handleChange = (selectedOptions) => {
    setSelectedProducts(selectedOptions || []);
  };

  return (
    <div>
      {/* Button to open the modal */}
      <button onClick={openModalHandler} className={styles.modalBtn}>
        <HiDotsHorizontal />
      </button>

      {/* Modal content */}
      {isOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            {/* Multi-select dropdown for products */}
            <Select
              id="product-select"
              options={[
                { id: 1, name: 'Product 5', remaining: 104, rate: 324 },
                { id: 2, name: 'Stocked Product I', remaining: 46, rate: 324 },
                { id: 3, name: 'Benoit Saint Denis', remaining: 30, rate: 324 },
                { id: 4, name: 'Anonymous Product', remaining: 80, rate: 324 },
                { id: 5, name: 'Stocked Tea I', remaining: 100, rate: 324 },
              ]}
              isMulti
              getOptionLabel={(option) => option.name}
              getOptionValue={(option) => option.id}
              onChange={handleChange}
            />

            {/* Display selected products */}
            <div className={styles.selectedProducts}>
              {selectedProducts.map((product, index) => (
                <div key={product.id} className={styles.productDetails}>
                  <div className={styles.productHeader}>
                    <span>{index + 1}. {product.name}</span>
                    <button onClick={() => handleRemove(product.id)}>Remove</button>
                  </div>
                  <div className={styles.productInfo}>
                    <label>Selling Rate</label>
                    <input type="number" placeholder="Enter selling rate" />
                    <label>Total Items</label>
                    <input type="number" placeholder="Enter quantity" />
                    <div className={styles.remainingItems}>{product.remaining} Item(s) Remaining</div>
                    <div className={styles.rate}>Rate: ₹ {product.rate}</div>
                  </div>
                </div>
              ))}
            </div>
            {/* Close button for the modal */}
            <button onClick={closeModalHandler} className={styles.closeBtn}>X</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditOrderModal;
