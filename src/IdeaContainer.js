import React from 'react';
import IdeaCard from './IdeaCard';
import PropTypes from 'prop-types';

export function IdeaContainer({ ideas, removeIdea }) {
    //map over ideas array and return an idea card for each idea
    const displayIdeas = ideas.map((idea) => ( //implicit return, skips on having to write out "return" but it still returns something
        <IdeaCard key={idea.id} {...idea} removeIdea={removeIdea} />
        //must give each IdeaCard an ID or React will hate you
    ))
    return (
        <div>
            {displayIdeas}
        </div>
    )
    //destructure ideas which is an array
    //so much more clear to see what you are passing down as props, remember this for developer empathy, be explicit, show the names of those props
    //SO, the purpose of destructuring props is to show the names of what you are passing down so your code is most readable
}

IdeaContainer.propTypes = {
    ideas: PropTypes.array.isRequired,
    removeIdea: PropTypes.func.isRequired
}