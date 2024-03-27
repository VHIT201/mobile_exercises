import { StyleSheet, Text, View, ImageBackground, TextInput, Dimensions, TouchableOpacity, ScrollView,Image } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import themes from '../../themes';

const Search = ({navigation}) => {
    const arrayPicture = [
        {   
            letter : 'A',
            link : 'https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {   
            letter : 'B',
            link : 'https://images.pexels.com/photos/2781760/pexels-photo-2781760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {   
            letter : 'C',
            link :         'https://images.pexels.com/photos/2749481/pexels-photo-2749481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {   
            letter : 'D',
            link :   'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
    ]
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>navigation.goBack()} style={{width:"20%",height:"100%",justifyContent:"center",alignItems:"center"}}>
            <Ionicons name='arrow-back-sharp' size={36} color={'white'}/>
        </TouchableOpacity>
        <View style={{height:"100%",width:"60%",alignItems:"center",justifyContent:"center"}}>
            <Text style={{fontSize:20,fontWeight:"500",color:'white'}}>Search</Text>
        </View>
        <View style={{width:"20%",height:"100%",justifyContent:"center",alignItems:"center"}}>
        </View>

      </View>

      <View style={{flex:1, width:windowWidth,paddingLeft:'5%',paddingRight:"5%"}}>
        <View style={[styles.textInput,{marginBottom:20}]}>
                <View style={{width:"14%",height:"100%",alignItems:'center',justifyContent:"center"}}>
                    <Ionicons name='search-sharp' size={20} color={themes.red}/>
                </View>
                <View style={{width:"72%",height:"100%"}}>
                    <TextInput style={{height:"100%",width:"100%"}} placeholder='Tìm kiếm'/>
                </View>
                <View style={{width:"14%",height:"100%"}}>

                </View>
        </View>
        <View style={{height:'16%',width:"100%",borderRadius:20,padding:10,borderWidth:1,borderColor:themes.red1}}>
            <ScrollView horizontal style={{height:"100%",width:"100%",borderRadius:20}}>
                {
                    arrayPicture.map((item) => (
                        <ImageBackground 
                            key={item.link} 
                            source={{ uri: item.link }} 
                            style={styles.image} 
                        />
                ))
                }
            </ScrollView>
        </View>
        <View style={{width:"100%", paddingTop:20,paddingBottom:20,flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:20}}>
            {
                    arrayPicture.map((item) => (
                        <View key={item.letter} style={styles.itemOfList}>
                        <Image
                            key={item.letter} 
                            source={{ uri: item.link }} 
                            style={styles.image1} 
                        />
                        <Text style={{fontSize:14,fontWeight:"500",color:themes.red}}>{item.letter}</Text>
                        </View>
                ))
                }

        </View>
        <View style={{flex:1,width:'100%',alignItems:'center',justifyContent:"flex-end",marginBottom:"20%"}}>
            <TouchableOpacity onPress={()=>navigation.navigate('BottomTabNavigator')}>
                <Text style={{fontSize:14,fontWeight:"600",color:themes.red}}>Chuyển sang trang BottomTab Navigation </Text>
            </TouchableOpacity>
        </View>
      </View>
      
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    container:{
        height:windowHeight,
        width:windowWidth,
    },
    header:{
        height:"8%",
        width:"100%",
        backgroundColor:themes.red1,
        flexDirection:"row"
    },
    textInput:{
        height:"7%",
        width:"100%",
        borderRadius:10,
        borderWidth:1,
        borderColor:'#fc95a1',
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        marginTop:20
    },
    image: {
        width: windowWidth * 0.8, 
        height: '100%', 
        marginBottom: 10, 
        borderRadius: 10, 
        resizeMode: 'cover', 
        marginRight:10
    },
    image1: {
        width: '100%', 
        height: '100%', 
        resizeMode: 'cover', 
    },
    itemOfList:{
        height:windowHeight*0.14,
        width:"22%",
        justifyContent:"center",
        alignItems:"center",
        marginHorizontal:4
    }
})
