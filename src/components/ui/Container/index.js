import React from "react";
import * as styles from './container.module.scss'

const Container = props => {
    return(
        <div className={`${styles.container} ${props.className}`}>
            {props.children}
        </div>
    )
}
export default Container