import CardDesc from "./simplecard/CardDesc";
import CardImg from "./simplecard/CardImg";
import CardTitle from "./simplecard/CardTitle";

const SimpleCard = ({item}) => {

    return (
        <div className="row">
            <CardImg classes="col-4" url={item.url}/>
            <div className="col-8 align-content-center">
                <CardTitle title={item.title} classes="fw-bold"/>
                <CardDesc description={item.desc} />
            </div>
        </div>
    )
}

export default SimpleCard;