import React from 'react';

const Card = ({id, name, email}) => {
    return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <img alt="Photo" src={`https://robohash.org/${id}?set=set5`}/>
            <div>
                <h2>
                    {name}
                </h2>
                {email}
            </div>
    </div>

    );
}

export default Card;