import React from 'react';
import styles from "../Styles/Loading.module.css";

/**
 * 🌀 Loading Component
 *
 * This component renders a full-screen loading spinner.
 * It uses styles defined in Loading.module.css to display
 * a centered spinner with a semi-transparent background overlay.
 *
 * Features:
 * - Full-screen overlay
 * - Centered spinner animation
 */

const Loading = () => {
  return (
    <div className={styles.SpinnerContainer}>
      <span className={styles.spinner}></span>
    </div>
  );
};

export default Loading;
