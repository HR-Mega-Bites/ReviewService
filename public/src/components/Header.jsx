import React from 'react';
import {SplitButton, MenuItem} from 'react-bootstrap'

const Header = (props) => (
  <div>
    <h3 className='tipsFrom'>Tips from Head Chefs</h3>
      <div className="header">
        <span className="commentsLength">{props.comments.length} Comments</span>
        <span className="split">
        <SplitButton className="top" title="Top" pullRight id="split-button-pull-right">
          <MenuItem eventKey="1">Top</MenuItem>
          <MenuItem eventKey="2">Newest</MenuItem>
          <MenuItem eventKey="3">Oldest</MenuItem>
        </SplitButton>
        </span> 
        <span className="sortBy">Sort by</span>
        <div className="clearLine"></div>
      </div>
  </div>
)

export default Header;