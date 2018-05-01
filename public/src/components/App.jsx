import React from 'react';
import axios from 'axios';
import queryString from 'query-string';
import AddCommentForm from './AddCommentForm.jsx';
import CommentList from './CommentList.jsx';
import About from './About.jsx';
import Header from './Header.jsx';
import Comment from './Comment.jsx';  
import _ from 'lodash'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      id: 1,
    };
    this.getComments = this.getComments.bind(this);
    this.postComment = this.postComment.bind(this);
    this.sortByName = this.sortByName.bind(this);
  }

  componentDidMount() {
    const id = window.location.pathname.split('/')[2];
    if (id) {
      this.getComments(id);
      this.setState({id: id})
    } else {  
      this.getComments(1);
    }
  }
  
  sortByName() {
    this.setState({
      comments: _.sortBy(this.state.comments, function (node) {
        return - (new Date(node.created_At))
      })
    })
  }

  getComments(id) {

    axios.get(`http://127.0.0.1:5000/recipes/${id}/comments`)
    // axios.get(`http://ec2-18-222-40-189.us-east-2.compute.amazonaws.com/recipes/${id}/comments`)
    // .then(comment => {console.log(comment);console.log(comment.data[0].comments)})
    .then(comment => {this.setState({comments: comment.data[0].comments}); console.log(this.state.comments)})
    .catch(err => console.log(err))
  }
  
  postComment(comment) {

    // axios.post(`http:ec2-18-222-40-189.us-east-2.compute.amazonaws.com/recipes/${this.state.id}/comments`, comment)
    axios.post(`http://127.0.0.1:5000/recipes/${this.state.id}/comments`, comment)
      .then(() => this.getComments(this.state.id))
      .catch(err => console.log(err) )
  }

  render() {
    return (
      <div className="app">
        <section className="section">
          <div className="tips">
            <Header comments={this.state.comments} sortByName={this.sortByName}/>
            <AddCommentForm postComment={this.postComment}/>
            <CommentList comments={this.state.comments} />
          </div>
            <About/>
        </section>
      </div>
    );
  }
}

export default App;