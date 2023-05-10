import React from "react";
import styles from "../styles.module.css";

const Filter = ({ value, onChangeFilter }) => (
  <label className={styles.label}>
    Find contacts by name
    <input
      className={styles.input}
      type="text"
      value={value}
      placeholder="Name"
      onChange={onChangeFilter}
    />
  </label>
);

export default Filter;
