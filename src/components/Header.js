import styles from './Header.module.css';
import Card from './UI/Card';

const Header = (props) => {
    return <Card className={styles.header}>{props.children}</Card>;
};

export default Header;