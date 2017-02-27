import React from 'react';
import styles from './MineHeader.less';

const mineContent = [
  {
    key:'coin',
    title:"余额",
    label:"元",
    color:"#FF9900"
  },
  {
    key:'coupon',
    title:"优惠",
    label:"个",
    color:"#FF5F3E"
  },
  {
    key:'credit',
    title:"积分",
    label:"分",
    color:"#6AC20B"
  }
];

class MineHeader extends React.Component{
  shouldComponentUpdate(nextprops){
    return JSON.stringify(nextprops) != this.props
  }
  render(){
    const {userData} = this.props
    const {avatar,name,phoneNumber} = userData;
    return (
      <div className={styles.normal}>
        <div className={styles.header}>
          <img className={styles.avatar} src={avatar} />
          <div className={styles.info}>
            <div className={styles.name}>{name}</div>
            <div className={styles.phoneNumber}>{phoneNumber}</div>
          </div>
        </div>
        <div className={styles.content}>
          {
            mineContent.map((item,key)=>{
              return <ContentItem key={key} data={userData[item.key]} {...item}/>
            })
          }
        </div>
      </div>

    )
  }
}

class ContentItem extends React.Component{
  shouldComponentUpdate(nextprops){
    return JSON.stringify(nextprops) != this.props
  }
  render(){
    const {title,color,label,data} = this.props;
    return (
      <div className={styles.contentItem}>
        <div><span className={styles.item} style={{color:color}}>{data}</span>{label}</div>
        <div>{title}</div>
      </div>
    )
  }
}

export default MineHeader;
