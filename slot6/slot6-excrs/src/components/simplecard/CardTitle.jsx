const CardTitle = ({title = "Empty title", classes = ""}) => {
    return (
        <p className={classes}>{title}</p>
    )
}

export default CardTitle;