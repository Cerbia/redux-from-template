//props:: comments - array, który jest po prostu listą komentarzy

import React from 'react';
import Comment from './CommentContainer';

const CommentsList = ({comments}) => <ul>{comments.map(comment => <Comment key={comment.id} {...comment}/>)}</ul>;

export default CommentsList;
