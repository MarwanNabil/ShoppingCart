import classes from "./Content.module.css";

const Content = (props) => {
    return (
        <div className={classes.content}>
            <div className={classes.items}>
                {props.children}
            </div>
        </div>
    );
};

export default Content;