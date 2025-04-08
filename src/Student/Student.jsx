import styles from './Student.module.css'

function Student(props){
    return(
        <div className={styles.div}>
            <p>name: {props.name}</p>
            <p>age: {props.age}</p>
            <p>isStudent: {props.isStudent ? "yes": "No"}</p>
        </div>
    );
}

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}

export default Student