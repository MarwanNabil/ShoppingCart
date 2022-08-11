import classes from './Header.module.css';

const Header = (props) => {
    return (
        <div className={classes.nav}>
            {props.children}
        </div>
    );
};

export default Header;