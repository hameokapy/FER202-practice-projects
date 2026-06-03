const CardDesc = ({description = "Empty description", classes = ""}) => {
    return (
        <p className={classes}>{description}</p>
    )
}

export default CardDesc;