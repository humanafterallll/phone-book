import styles from './Menu.module.css';
import Card from './UI/Card';
import Button from './UI/Button';

const Menu = (props) => {
    const setButton1Page = () => {
        props.setPage(props.button1);
    }

    const setButton2Page = () => {
        props.setPage(props.button2);
    }

    return (
    <Card className={styles.cardMenu}>
        <Button onClick={setButton1Page}>{props.button1}</Button>
        <Button onClick={setButton2Page}>{props.button2}</Button>
    </Card>
    );
};

export default Menu;