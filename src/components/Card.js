import React from 'react';

const Card = ({ name, email, id }) => {
    return (
        <div className="tc bg-hot-pink dib pa3 ma2 br3 grow bw2 shadow-5">
            <img alt ='robots' src={`http://robohash.org/${id} size=200x200`} />
            <div>
                <h2 className="f5"> { name } </h2>
                <p>{ email }</p>
            </div>
        </div>
    );
}

export default Card;
