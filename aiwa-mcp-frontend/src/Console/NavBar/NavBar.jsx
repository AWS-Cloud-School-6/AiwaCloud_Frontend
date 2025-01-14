import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 임포트
import styles from './NavBar.module.css';
import NavLink from './NavLinks';
import { useUserContext } from '../../UserContext';
import { getCurrentUser, signOut } from 'aws-amplify/auth';

const navLinks = [
];

function NavBar() {
  const [userId, setUserId] = useState('');
  const { currentUser, selectedCompany } = useUserContext();
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수 정의

  useEffect(() => {
    async function fetchUserId() {
      try {
        const userInfo = await getCurrentUser();
        console.log('User Info:', userInfo);
        setUserId(userInfo.userId || userInfo.attributes?.sub || '');
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    }
    fetchUserId();
  }, []);

  const handleLogoClick = () => {
    navigate('/console'); // 로고 클릭 시 /console로 이동
  };

  const handleLogout = async () => {
    try {
      await signOut({ global: true });
      document.cookie.split(';').forEach(cookie => {
        const name = cookie.split('=')[0].trim();
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/';
      });
      window.location.reload();
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <nav className={styles.navBar}>
      <div className={styles.navBarContent}>
        <div className={styles.logoAndLinks}>
          <div
            className={styles.logoContainer}
            onClick={handleLogoClick}
            style={{ cursor: 'pointer' }}
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ec46070fee5581e109f73c1f4f471b76775dbfaa499588d86ce24efd2677724?placeholderIfAbsent=true&apiKey=0aa29cf27c604eac9ac8e5102203c841"
              className={styles.logo}
              alt="AIWA logo"
            />
            <div style={{ marginTop: '10px' }}>AIWA</div> {/* AIWA 글자 아래로 내리기 */}
          </div>

          <div className={styles.navLinks}>
            {navLinks.map((link, index) => (
              <NavLink key={index} text={link.text} href={link.href} />
            ))}
            <div className={styles.searchIcon} role="button" tabIndex="0" aria-label="Search">
              {/* Add your search icon SVG or image here */}
            </div>
          </div>
        </div>
        <div className={styles.userAndLogout}>
          <div className={styles.userIconContainer}>
            <div className={styles.userIcon}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b336f31c57083d1f8335bfaeeabac3ed1120f96e8e9342d246d8eaab917c205e?placeholderIfAbsent=true&apiKey=0aa29cf27c604eac9ac8e5102203c841"
                className={styles.userIconImage}
                alt="User profile"
              />
            </div>
          </div>
          <div className={styles.userInfoContainer}>
            <div className={styles.userInfo}>
              {currentUser && <div className={styles.userId}>{currentUser.id}</div>}
              {selectedCompany && <div className={styles.companyName}>{selectedCompany}</div>}
            </div>
            <div className={styles.logoutContainer}>
              <button className={styles.logoutButton} onClick={handleLogout}>Logout</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
