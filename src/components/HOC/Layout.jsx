import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import NavBarComponent from '../UI/NavBarComponent';

const Layout = ({ children, match, history }) => {
 
return (
  <Fragment>
        <NavBarComponent match = {match}/>
      <div className="container">{children}</div>
  </Fragment>
);
};
export default withRouter(Layout);