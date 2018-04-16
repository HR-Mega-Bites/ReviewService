import React from 'react';
import CommentListItem from './CommentListItem.jsx';

const CommentList = (props) => (
  <div className="comments">
    <div>{props.comment.length} Comments</div>
      {props.comment.map((comments => <CommentListItem key={comments.id} comments={comments}/> ))}
  </div>
)

export default CommentList;