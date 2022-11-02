import styles from "./Homepage.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Header from "../Header";

const Homepage = (props) => {
  const switchToNew = () => {
    props.setPage('New');
  };

  const switchToAll = () => {
    props.setPage('All');
  };

  const switchToSearch = () => {
    return null;
  };

  return (
    <>
      <Header>
        <h1>{props.headerTitle}</h1>
      </Header>
      <Card className={styles.cardButtons}>
        <Button className={styles.buttonHome} onClick={switchToNew}>New</Button>
        <Button className={styles.buttonHome} onClick={switchToAll}>All</Button>
        <Button className={styles.buttonHome} onClick={switchToSearch}>Search</Button>
      </Card>
    </>
  );
};

export default Homepage;
