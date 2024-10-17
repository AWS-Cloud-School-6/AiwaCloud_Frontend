import React from 'react';
import styles from './SidebarVpc.module.css';

const NavigationLink = ({ icon, label, hasChevron }) => (
  <a href="#" className={styles.navigationLink}>
    <img src={icon} alt="" className={styles.navigationIcon} />
    <span className={styles.navigationLabel}>{label}</span>
    {hasChevron && (
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/07a76a32a67087b95dc53b278c6599d8709b190c8e922c822531e9638958edb4?placeholderIfAbsent=true&apiKey=0aa29cf27c604eac9ac8e5102203c841" alt="" className={styles.chevronIcon} />
    )}
  </a>
);

export default NavigationLink;