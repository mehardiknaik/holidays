import logo from '../../common/logo.png';
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.Container}>
      <img className={styles.image} src={logo} width={35} height={35} alt=""/>
      <div>
        <h3>
          Holidays <small>(India-Maharashtra)</small> 2022
        </h3>
      </div>
    </div>
  );
};

export default Header;
