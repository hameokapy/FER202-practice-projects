const CardImg = ({url = "", classes = ""}) => {
    return (
        <img src={url} alt="FPTU logo" className={classes} />
    )
}

export default CardImg;