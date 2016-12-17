import styles from "./Actor.css";
// import link from "./images/link.jpg";
import join from "join-classnames";

export const Actor = ({actor, direction, walking = false}) => {
    return(
        <div className={join(styles.actor, styles[actor], styles[direction], walking ? styles.walking : styles.standing)}>
        </div>
    )
}

export default Actor;
