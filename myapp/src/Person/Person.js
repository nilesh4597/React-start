import React from 'react' ;

const person = (props) => {
    return <div>
                <p>I am person!  {props.personname}  and I am age of {props.age} </p>
                <p>{props.children}</p>
            </div>
};

export default person;