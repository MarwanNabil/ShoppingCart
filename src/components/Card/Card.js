import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={classes.card}
      style={{
        backgroundColor: props["background-color"],
        color: props["text-color"],
      }}
    >
        {props.children}
    </div>
  );
};

export default Card;
