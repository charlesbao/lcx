import React from 'react';
import styles from './LinkList.css';

function LinkList({dataSource,onClick}) {
  return (
    <div className={styles.normal}>
      {dataSource.map((item,key)=>{
        if(item.link){
          return (
            <div key={key} className={styles.item} onClick={()=>onClick(item.link)}>
              <span className={styles.title}>{item.title}</span>
              <img className={styles.nav} src={require('../assets/nav.svg')} />
            </div>
          )
        }else{
          return (
            <div key={key} className={styles.item}>
              <span>{item.title}</span>
            </div>
          )
        }
      })}
    </div>
  );
}

export default LinkList;
