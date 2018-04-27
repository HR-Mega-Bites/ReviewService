import React from 'react';
import axios from 'axios';
import queryString from 'query-string';
import AddCommentForm from './AddCommentForm.jsx';
import CommentList from './CommentList.jsx';
import About from './About.jsx';
import Header from './Header.jsx';
import Comment from './Comment.jsx';  

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
    this.getComments = this.getComments.bind(this);
    this.postComment = this.postComment.bind(this);
  }

  componentDidMount() {
    const id = window.location.pathname.split('/')[2];
    if (id) {
      this.getComments(id);
    } else {
      this.getComments(1);
    }
  }
  
  getComments(id) {
    axios.get(`http://ec2-18-222-18-162.us-east-2.compute.amazonaws.com/recipes/${id}/comments`)
    .then(comment => this.setState({comments: comment.data[0].comments}))
    .catch(err => console.log(err))
  }
  
  postComment(comment) {
    axios.post('/recipe/:id', comment)
      .then(comment => this.getComments)
      .catch(err => console.log(err) )
  }

  render() {
    return (
      <div className="app">
        <section className="section">
          <div className="tips">
            <Header comments={this.state.comments}/>
            <AddCommentForm postComment={this.postComment}/>
            <CommentList comments={this.state.comments}/>
          </div>
            <About/>
        </section>
      </div>
    );
  }
}

export default App;