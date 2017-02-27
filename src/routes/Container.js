import React from 'react';
import { connect } from 'dva';
import styles from './Container.css';

class Container extends React.Component{
  getChildContext() {
    return {location: this.props.location};
  }

  render(){
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

Container.childContextTypes = {
  location: React.PropTypes.object
};

function mapStateToProps(props,{location}) {
  return {location};
}

export default connect(mapStateToProps)(Container);
