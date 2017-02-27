import React from 'react';
import { connect } from 'dva';
import {routerRedux} from 'dva/router'
import MineHeader from '../components/MineHeader'
import LinkList from '../components/LinkList'
import styles from './Mine.css';

const list = [
  {
    title:"我的订单",
    link:"/home"
  }, {
    title:"积分商城",
    link:"/home"
  },
];

function Mine({dispatch,userData}) {
  return (
    <div className={styles.normal}>
      <MineHeader userData={userData}/>
      <div className={styles.list}>
        <LinkList dataSource={list} onClick={listClick}/>
      </div>
    </div>
  );

  function listClick(route){
    dispatch(routerRedux.push(route))
  }
}

function mapStateToProps({user:{userData}}) {
  return {userData};
}

export default connect(mapStateToProps)(Mine);
