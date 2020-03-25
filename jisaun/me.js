import React, { Component } from 'react'
import{View,Text,Image,StyleSheet} from 'react-native'


const styles =StyleSheet.create({
   head:{
       width:'100%',
       height:250,
       backgroundColor:'#f23030',
       justifyContent:'center',
       alignItems:'center'
   },
   img:{
       width:100,
       height:100,
       borderRadius:50
   },
   box2:{
       height:50,
       backgroundColor:'white',
       paddingLeft:10,
       flexDirection:'row',
       alignItems:'center'
   },
   iconStyle:{
        fontFamily:'iconfont',
        fontSize:20,
        lineHeight:40,
        marginLeft:10
    },
   box3:{
       width:'30%',
       height:80,
       justifyContent:'center',
       alignItems:'center'
   },
   t:{
   marginLeft:20
   }
})


export default class Login extends Component {
    render() {
        return (
        <>
            <View style={styles.head}>
                <Image style={styles.img} source={require('../')}  />
                <Text style={{color:'white'}}> BINNU DHILLON</Text>
            </View>
            <View style={styles.box2}>
                <Text style={styles.iconStyle}>{'\ue619'}</Text>
                <Text style={styles.t}>我的个人中心</Text>
            </View>
            <View style={{
                 flexDirection:'row',
                 flexWrap:'wrap',
                 marginTop:1,
                 backgroundColor:'white'
                 }}>
                 <View style={styles.box3}>
                    <Text style={styles.iconStyle}>{'\ue619'}</Text>
                    <Text style={styles.t}>账户管理</Text>
                 </View>
                 <View style={styles.box3}>
                    <Text style={styles.iconStyle}>{'\ue619'}</Text>
                    <Text style={styles.t}>收货地址</Text>
                 </View>
                 <View style={styles.box3}>
                    <Text style={styles.iconStyle}>{'\ue619'}</Text>
                    <Text style={styles.t}>我的信息</Text>
                 </View>
                 <View style={styles.box3}>
                    <Text style={styles.iconStyle}>{'\ue619'}</Text>
                    <Text style={styles.t}>我的订单</Text>
                 </View>
                 <View style={styles.box3}>
                    <Text style={styles.iconStyle}>{'\ue619'}</Text>
                    <Text style={styles.t}>我的二维码</Text>
                 </View>
                 <View style={styles.box3}>
                    <Text style={styles.iconStyle}>{'\ue619'}</Text>
                    <Text style={styles.t}>我的积分</Text>
                 </View>
                 <View style={styles.box3}>
                    <Text style={styles.iconStyle}>{'\ue619'}</Text>
                    <Text style={styles.t}>我的收藏</Text>
                 </View>
            </View>
            <View style={[styles.box2,{marginTop:5}]}>
                <Text style={styles.iconStyle}>{'\ue619'}</Text>
                <Text style={styles.t}>E族服务</Text>
            </View>
            <View style={{
                 flexDirection:'row',
                 // justifyContent:'space-evenly',//水平按比例占比
                 flexWrap:'wrap',//可换行
                 marginTop:1,
                 backgroundColor:'white'
                 }}>
                 <View style={styles.box3}>
                    <Text style={styles.iconStyle}>{'\ue619'}</Text>
                    <Text style={styles.t}>居家维修保养</Text>
                 </View>
                 <View style={styles.box3}>
                    <Text style={styles.iconStyle}>{'\ue619'}</Text>
                    <Text style={styles.t}>出行接送</Text>
                 </View>
                 <View style={styles.box3}>
                    <Text style={styles.iconStyle}>{'\ue619'}</Text>
                    <Text style={styles.t}>我的受赠人</Text>
                 </View>
                 <View style={styles.box3}>
                    <Text style={styles.iconStyle}>{'\ue619'}</Text>
                    <Text style={styles.t}>我的住宿优惠</Text>
                 </View>
                 <View style={styles.box3}>
                    <Text style={styles.iconStyle}>{'\ue619'}</Text>
                    <Text style={styles.t}>我的活动</Text>
                 </View>
                 <View style={styles.box3}>
                    <Text style={styles.iconStyle}>{'\ue619'}</Text>
                    <Text style={styles.t}>我的发布</Text>
                 </View>
            </View>
            <View style={{alignItems:'center'}}>
                <Text style={{marginTop:20,marginBottom:20}}>BINNU DHILLON | 退出</Text>
            </View>
        </>
        )
    }
}

