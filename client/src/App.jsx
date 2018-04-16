import React from 'react';
import AddCommentForm from './AddCommentForm.jsx';
import CommentList from './CommentList.jsx';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: [],
    };
    this.getComment = this.getComment.bind(this);
    this.addComment = this.addComment.bind(this);
  }

  componentDidMount() {
    this.getComment();
  }


  getComment() {
    axios.get('/recipe')
    .then(recipes => this.setState({ comment: recipes.data }))
    .then(recipe => console.log(this.state.comment))
    .catch(err => console.log('Error getting comments', err));
    
  }


  addComment(comment) {
    axios.post('/recipe', comment)
      .then(comment => this.setState({ comment: comment }))
      .catch(err => console.log('Error adding comment', err) )
  }


  render() {
    return (
      <div className="app">
        <h1>Tips from Head Chefs</h1> 
        <CommentList comment={this.state.comment}/>
        <AddCommentForm addComment={this.addComment}/>
      </div>
    );
  }
}

export default App;