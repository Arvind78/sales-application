import React, { useState } from 'react';
import styles from "../Styles/HomePage.module.css"
import OrderModal from '../Orders/OrderModal';
import ActiveOrders from '../Orders/ActiveOrders';
import CompletedOrders from '../Orders/CompletedOrders';
const HomePage = () => {
  const [activeTab,setActiveTab]= useState("Active")

  const tabHandler =(tab)=>{
    setActiveTab(tab);
  }
  return( 
    <div className={styles.mainContainer}>
  <div className={styles.tabsContainer}>
    <div className={styles.tabs}>
    <button onClick={()=>tabHandler("Active")}>Active Sale Order</button>
     <button onClick={()=>tabHandler("Completed")}>completed Sale Order</button>
    </div>
    <div className={styles.model}>
      <OrderModal/>
    </div>
  
  </div>
    <div className={styles.activeTab} >
    {
     activeTab==="Active" && <ActiveOrders/> ||
     activeTab==="Completed" && <CompletedOrders/>
    }
   </div>
   </div>
  );
};

export default HomePage;
