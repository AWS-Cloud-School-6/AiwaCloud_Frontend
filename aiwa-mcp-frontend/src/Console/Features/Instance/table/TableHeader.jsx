import React from 'react';
import styles from './EC2Table.module.css';

function TableHeader({ onSelectAll, allSelected }) {
  return (
    <div className={`${styles.tableRow} ${styles.tableHeaderRow}`} style={{ textAlign: 'center' }}>
      <div className={`${styles.cell} ${styles.checkboxCell}`} >
        <input
          type="checkbox"
          checked={allSelected}
          onChange={onSelectAll}
          className={styles.checkbox}
        />
      </div>
      <div className={`${styles.cell} ${styles.idCell}`} style={{ width: '10%' }}>#</div>
      <div className={`${styles.cell} ${styles.nameCell}`} style={{ width: '5%' }}>Name</div>
      <div className={`${styles.cell} ${styles.descriptionCell}`} style={{ width: '20%' }}>Description</div>
      <div className={`${styles.cell} ${styles.statusCell}`} style={{ width: '10%' }}>Status</div>
      <div className={`${styles.cell} ${styles.cidrCell}`} style={{ width: '15%' }}>CIDR</div>
      <div className={`${styles.cell} ${styles.routingTableCell}`} style={{ width: '30%' }}>Routing Table</div>
    </div>
  );
}

export default TableHeader;