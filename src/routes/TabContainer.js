import React from 'react';
import { connect } from 'dva';
import {routerRedux} from 'dva/router'
import BottomTabBar from '../components/BottomTabBar'
import styles from './TabContainer.css';

function TabContainer({children,dispatch,location}) {
  return (
    <div className={styles.normal}>
      {children}
      <BottomTabBar pathname={location.pathname}
                    onClick={bottomClickHandle} />
    </div>
  );

  function bottomClickHandle(route){
    dispatch(routerRedux.replace(route))
  }
}

function mapStateToProps({},{location}) {
  return {location};
}

export default connect(mapStateToProps)(TabContainer);
