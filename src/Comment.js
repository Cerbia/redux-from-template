//props::
//text - zawartość komentarza
//votes - liczba głosów oddana na komentarz

import React from 'react';

const Comment = ({text, voteUp, voteDown}) => <li>{text} <span>voteUp: {voteUp} voteDown: {voteDown}</span><li/>;

export default Comment;
