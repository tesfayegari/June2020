import * as React from 'react';


const MTMCard = (props) => {
  const imgUrl = '../dist/images/' + props.img;
  return (
    <div className="card">
      <img className="card-img-top" src={imgUrl} alt="Card image cap"></img>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <p className="card-text">{props.description}</p>
        <a href="#" className="card-link">Card link</a>
        <a href="#" className="card-link">Another link</a>
      </div>
    </div>
  );
}

export const MTMJumbotron = (props) =>
  <div className="jumbotron">
    <h1 className="display-4">{props.title}</h1>
    <p className="lead">{props.description}</p>
    <hr className="my-4" />
    <p>{props.subTitle}</p>
    <p className="lead">
      <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </p>
  </div>

export default MTMCard;