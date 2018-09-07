//props::
//text - zawartość komentarza
//votes - liczba głosów oddana na komentarz

import React from 'react';

const Comment = ({text, voteUp, voteDown, id, thumbUpComment, thumbDownComment}) => (
	<li>
	{text} <span>voteUp: {voteUp} voteDown: {voteDown} </span> 
	<button onClick={() => thumbUpComment(id)}>Thumb up</button>
	<button onClick={() => thumbDownComment(id)}>Thumb up</button>
	</li>

	);

export default Comment;
