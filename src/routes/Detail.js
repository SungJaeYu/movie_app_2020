import React from "react";
import "./Detail.css";

class Detail extends React.Component{
    componentDidMount(){
        const { location, history } = this.props;
        if(location.state === undefined){
            history.push("/");
        }
    }
    render(){
        const { location } = this.props;
        if(location.state){
            return (
                <React.Fragment className="movie__detail">
                    <img src={location.state.poster} alt={location.state.title} title={location.state.title}/>
                    <div className="movie__header">
                        <h3 className="movie__title">{location.state.title}</h3>
                        <h5 className="movie__year">{location.state.year}</h5>
                    </div>
                    <p className="movie__summary">{location.state.summary}</p>
                    <ul className="movie__genres">
                        {location.state.genres.map((genre, index) => ( 
                            <li key={index} className="genres__genre">
                            {genre}
                            </li>
                            )
                        )}
                    </ul>
                </React.Fragment>
                );
        }
        else{
            return null;
        }
    }
}

export default Detail;