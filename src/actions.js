import uuid from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT';

//kreatory akcji
export function addComment(text) {
	//debugger;
	return ({
		type: 'ADD_COMMENT',
		id: uuid.v4(),
		text
	});
}


export const EDIT_COMMENT = 'EDIT_COMMENT';

export function editComment(id, text) {
	return ({
		type: 'EDIT_COMMENT',
		id,
		text
	});
}


export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export function removeComment(id) {
	return ({
		type: 'REMOVE_COMMENT',
		id
	});
}


export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';

export function thumbUpComment(id) {
	return ({
		type: 'THUMB_UP_COMMENT',
		id
	});
}


export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

export function thumbDownComment(id) {
	return({
		type: 'THUMB_DOWN_COMMENT',
		id
	});
}

export const ADD_USER = 'ADD_USER';

export function addUser(firstName, lastName) {
	return ({
		type: 'ADD_USER',
		id: uuid.v4(),
		firstName: firstName,
		lastName: lastName
	});
}

//dispatch(addComment('New comment'));
// bindActionCreators
//lol - co z tym zrobić?
// const boundAddComment = text => dispatch(addComment(text));
// const boundEditComment = (id, text) => dispatch(editComment(id, text));
// const boundRemoveComment = id => dispatch(removeComment(id));
// const boundThumbUpComment = id => dispatch(thumbUpComment(id));
// const boundThumbDownComment = id => dispatch(thumbDownComment(id));
