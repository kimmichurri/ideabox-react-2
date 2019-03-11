import React from 'react';
import PropTypes from 'prop-types'

const IdeaCard = ({ title, body, id, removeIdea }) => {
    //otherwise you could have passed in props and said props.title, props.id, props.body below which is just more typing
    return (
        <div>
            <h3>{ title }</h3>
            <p>{ body }</p>
            <button onClick={() => removeIdea(id)}>x</button>
        </div>
    )
}

IdeaCard.propTypes = {
    removeIdea: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}

export default IdeaCard