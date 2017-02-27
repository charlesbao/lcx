import React from 'react';
import classnames from 'classnames'
import styles from './BottomTabBar.less';

const bottomIcon = [
  {
    src:require('../assets/home.svg'),
    title:'主页',
    route:'/home'
  },{
    src:require('../assets/home.svg'),
    title:'客服',
    route:'/support'
  },
  {
    src:require('../assets/home.svg'),
    title:'我',
    route:'/mine'
  }
]

class BottomTabBar extends React.Component{
  shouldComponentUpdate(nextprops){
    return nextprops.pathname != this.props.pathname
  }
  render(){
    return (
      <div className={styles.normal}>
        {
          bottomIcon.map((item,key)=>{
            return <Icon key={key} src={item.src}
                         title={item.title}
                         primary={this.props.pathname === item.route}
                         onClick={()=>this.props.onClick(item.route)} />
          })
        }
      </div>
    );
  }
}

function Icon({src,title,primary,onClick}){
  return (
    <div onClick={onClick} className={classnames(styles.iconWrapper,{[styles.active]:primary})}>
      <img className={styles.icon} src={src} />
      <div className={styles.title}>{title}</div>
    </div>
  )
}

export default BottomTabBar;
