import { StyleSheet, Text, View,Image, TextInput,Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import themes from '../../themes';
const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={{height:'50%',width:"50%"}} resizeMode='contain' source={require('../Images/logo/dntulogo.png')}/>
      </View>
      <View style={styles.loginContainer}>
        <View style={[styles.textInput,{marginBottom:20}]}>
            <View style={{width:"14%",height:"100%",alignItems:'center',justifyContent:"center"}}>
                <Ionicons name='person' size={20} color={themes.red}/>
            </View>
            <View style={{width:"72%",height:"100%"}}>
                <TextInput style={{height:"100%",width:"100%"}} placeholder='User name'/>
            </View>
            <View style={{width:"14%",height:"100%"}}>

            </View>
        </View>
        <View style={styles.textInput}>
            <View style={{width:"14%",height:"100%",alignItems:'center',justifyContent:"center"}}>
                <Ionicons name='key' size={20} color={themes.red}/>
            </View>
            <View style={{width:"72%",height:"100%"}}>
                <TextInput style={{height:"100%",width:"100%"}} placeholder='Password'/>
            </View>
            <View style={{width:"14%",height:"100%"}}>
            </View>
        </View>
        <View style={{width:"90%",alignItems:'flex-end',justifyContent:"center",marginTop:10}}>
            <TouchableOpacity>
                <Text style={{fontSize:12,fontWeight:'500',color:"#ee243c"}}>Quên mật khẩu?</Text>
            </TouchableOpacity>
        </View>
        <View style={{width:"90%",height:"9%",justifyContent:"center",alignItems:"center",marginTop:20}}>
            <TouchableOpacity style={{width:"60%",height:"100%",backgroundColor:themes.red1,borderRadius:10,justifyContent:"center",alignItems:"center"}}>
                <Text style={{fontSize:14,fontWeight:"500",color:"white"}}>Đăng nhập</Text>
            </TouchableOpacity>
        </View>
        <View style={{width:"90%",height:"9%",justifyContent:"center",alignItems:"center",marginTop:20}}>
            <TouchableOpacity style={{width:"60%",height:"100%",backgroundColor:themes.gray,borderRadius:10,justifyContent:"center",alignItems:"center"}}>
                <Text style={{fontSize:14,fontWeight:"500",color:"white"}}>Đăng ký</Text>
            </TouchableOpacity>
        </View>
        <View style={{flex:1,width:'100%',alignItems:'center',justifyContent:"flex-end",marginBottom:"20%"}}>
            <TouchableOpacity onPress={()=>navigation.navigate('Search')}>
                <Text style={{fontSize:14,fontWeight:"600",color:themes.red}}>Chuyển sang trang Search </Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        height:windowHeight,
        width:windowWidth,
    },
    logoContainer:{
        height:"26%",
        width:"100%",
        justifyContent:"flex-end",
        alignItems:"center"
    },
    loginContainer:{
        flex:1,
        width:"100%",
        alignItems:"center",
        paddingTop:'16%'
    },
    textInput:{
        height:"8%",
        width:"90%",
        borderRadius:10,
        borderWidth:1,
        borderColor:'#fc95a1',
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
    }
})