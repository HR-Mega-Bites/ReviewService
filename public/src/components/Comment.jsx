import React from 'react';
import moment from 'moment';

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
      likeMsg: 'Like',
      likeStatus: false,
    }
  }


  toggleLike() {
    if (!this.state.likeStatus) {
      this.setState({ likes: this.state.likes + 1, likeMsg: 'Unlike' })
    } else {
      this.setState({ likes: this.state.likes - 1, likeMsg: 'Like' })
    }
  }

  handleClick() {
    this.setState({ likeStatus: !this.state.likeStatus })
  }


  render() {
    return (
      <div className="comments">
        <div className="info">
          <img className='userImage' src={this.props.comment.userImage} alt='user'></img>
          <span className="fullName">{this.props.comment.fullName}</span>
          <span className='period'> · </span>
          <span className="address">{this.props.comment.city}, {this.props.comment.state}</span>
          <p className="commentsText">{this.props.comment.commentsText}</p>
        </div>
        <div>
          <button className="clickButton" onClick={() => {this.toggleLike(); {this.handleClick()}}}>{this.state.likeMsg}</button>
          <span className='period'> · </span>
          <a className='reply'href='#'>Reply</a>
          <span className='period'> · </span>
          <span><i className="glyphicon glyphicon-thumbs-up"></i></span>
          <span className='likes'>{this.state.likes}</span>
          <span className='period'> · </span>
          <span className="date">{moment(new Date(this.props.comment.created_At)).fromNow()}</span>
        </div>
      </div>
    )
  }  
}

export default Comment;