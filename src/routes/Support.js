import React from 'react';
import { connect } from 'dva';
import styles from './Support.less';

function Support() {
  return (
    <div className={styles.normal}>
      <div className={styles.banner}>龙诚修客服</div>
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Support);
