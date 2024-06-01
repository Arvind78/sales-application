import React, { useState } from 'react';
import Select from 'react-select';
import { HiDotsHorizontal } from 'react-icons/hi';
import styles from '../Styles/ViewOrderModal.module.css';
/**
 * 🛒 ViewOrderModal Component
 *
 * This component renders a modal for selecting and viewing order details. It features
 * a button to open the modal, a multi-select dropdown to choose products, and displays
 * selected products with options to remove them.
 *
 * Features:
 * - Open and close modal functionality
 * - Multi-select dropdown for products
 * - Display and remove selected products
 */

const ViewOrderModal = ({ id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const openModalHandler = () => setIsOpen(true);
  const closeModalHandler = () => setIsOpen(false);

  const handleChange = (selectedOptions) => {
    setSelectedProducts(selectedOptions || []);
  };

  return (
    <div>
      <button onClick={openModalHandler} className={styles.modalBtn}>
        <HiDotsHorizontal />
      </button>
      {isOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            {/* <button onClick={closeModalHandler} className={styles.closeBtn}>X</button> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewOrderModal;
