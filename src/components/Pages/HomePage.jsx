import React, { useState } from 'react';
import styles from '../Styles/HomePage.module.css';
import OrderModal from '../Orders/OrderModal';
import ActiveOrders from '../Orders/ActiveOrders';
import CompletedOrders from '../Orders/CompletedOrders';

/**
 * 🏠 HomePage Component
 *
 * This component serves as the main landing page of the application. It features tabs to
 * toggle between active and completed sales orders and includes a button to open an order modal.
 *
 * Key Features:
 * - Tab Navigation: Switches between active and completed sales orders.
 * - Order Modal: Opens a modal for order-related actions.
 * - Conditional Rendering: Displays either active or completed orders based on the selected tab.
 *
 * Components:
 * - OrderModal: A modal component for handling orders.
 * - ActiveOrders: A component displaying active sales orders.
 * - CompletedOrders: A component displaying completed sales orders.
 */


const HomePage = () => {
  const [activeTab, setActiveTab] = useState('Active');

  const tabHandler = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.tabsContainer}>
        <div className={styles.tabs}>
          <button onClick={() => tabHandler('Active')}>
            Active Sale Order
          </button>
          <button onClick={() => tabHandler('Completed')}>
            completed Sale Order
          </button>
        </div>
        <div className={styles.model}>
          <OrderModal />
        </div>
      </div>
      <div className={styles.activeTab}>
        {(activeTab === 'Active' && <ActiveOrders />) ||
          (activeTab === 'Completed' && <CompletedOrders />)}
      </div>
    </div>
  );
};

export default HomePage;
