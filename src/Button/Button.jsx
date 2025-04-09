import styles from './Button.module.css'

function Button(){
    const handleClick = () => console.log("ouch!");
    return(
        <button className={styles.button} onClick={handleClick}>click me</button>
    );
}

export default Button