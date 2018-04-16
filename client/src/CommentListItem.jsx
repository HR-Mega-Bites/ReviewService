import React from 'react';

const CommentListItem = (props) => (
  <div>
    {/* <span>{props.comments.id}</span> */}
    {/* <span>{props.comments.comments[0].fullName}</span>
    <span>{props.comments.comments[0].commentsText}</span> */}
    <img src={props.comments.comments[0].image}></img>
    {/* <span>{props.comments.comments[0].image}</span> */}
  </div>
)


export default CommentListItem;