import React from 'react';
import {SplitButton, MenuItem} from 'react-bootstrap'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownVal: 'Top',
      dropdownList: ['Top', 'Newest', 'Oldest']
    }
    this.updateTop = this.updateTop.bind(this);
    this.updateNewest = this.updateNewest.bind(this);
  }

  updateTop() {
    this.setState({
      dropdownVal: this.state.dropdownList[0]
    })
  }

  updateNewest() {
    this.setState({
      dropdownVal: this.state.dropdownList[1]
    })
  }

  updateOldest() {
    this.setState({
      dropdownVal: this.state.dropdownList[2]
    })
  }

  render() {
    return (
      <div>
        <h3 className='tipsFrom'>Tips from Head Chefs</h3>
          <div className="header">
            <span className="commentsLength">{this.props.comments.length} Comments</span>
            <span className="split">
            <SplitButton className="top" title={this.state.dropdownVal} pullRight id="split-button-pull-right">
              <MenuItem onClick={() => {this.updateTop(); {this.props.sortByName()}}} eventKey="1">{this.state.dropdownList[0]}</MenuItem>
              <MenuItem onClick={this.updateNewest} eventKey="2">{this.state.dropdownList[1]}</MenuItem>
              <MenuItem onClick={this.updateOldest} eventKey="3">{this.state.dropdownList[2]}</MenuItem>
            </SplitButton>
            </span> 
            <span className="sortBy">Sort by</span>
            <div className="clearLine"></div>
          </div>
      </div>
    )
  }
}

export default Header;