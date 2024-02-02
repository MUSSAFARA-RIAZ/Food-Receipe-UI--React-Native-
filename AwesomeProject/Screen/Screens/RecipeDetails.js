import { Text, View , Image, Pressable, ScrollView} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { colors } from "./Constant";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import React from "react";
const RecipeDetails = () => {
    const navigation=useNavigation();
    const route=useRoute();
    const {item}=route.params;
    return ( 
        <View style={{backgroundColor:item.color ,flex:1}}>
<View style={{flexDirection:"row"}}>
            <Pressable style={{flex:1, marginLeft:0}}  onPress={()=>navigation.goBack()}>
            <Ionicons name="arrow-back-circle" size={24} color={colors.COLOR_PRIMARY} />
         

            </Pressable>
            <MaterialIcons style={{marginRight:11}} name="favorite-border" size={24} color="white" />
            </View>
           
            <View style={{backgroundColor:"white",marginTop:150, flex:1, borderTopRightRadius:60, borderTopLeftRadius:60}}>
                <View style={{flex:1,width:300,height:300,position:"absolute",top:-150,left:50 }}>


                <Image source={item.image} style={{width:"100%",height:"100%",resizeMode:"contain"}}/>
                <View style={{marginTop:20}}>
                <Text style={{textAlign:"center",fontWeight:"bold",fontSize:35,marginRight:40,marginTop:-40}}>{item.name}</Text>
                <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={{fontSize:16,marginVertical:16}}>{item.description}</Text>
               
                <View style={{flexDirection:"row", justifyContent:"space-between",marginRight:20}}>
                    <View style={{backgroundColor:"#60BFC1", padding:10, borderRadius:10,alignItems:"center"}}>
                        <Text>⏰</Text>
                        <Text>{item.time}</Text>
                    </View>
                    <View style={{backgroundColor:"#FDB7B9",padding:10,borderRadius:10,alignItems:"center"}}>
                        <Text>🍜</Text>
                        <Text>{item.difficulty}</Text>
                    </View>
                    <View style={{backgroundColor:"#BADFD7",padding:10,borderRadius:10,alignItems:"center"}}>
                        <Text>🔥</Text>
                        <Text>{item.calories}</Text>

                    </View>
                </View>
                <Text style={{fontWeight:"bold",fontSize:24,marginTop:20}}>Ingredients</Text>
                {item.ingredients.map((ingredients,index)=>{
                    return(
                        <View key={index}>
                            <Text key={item.id}>
                            <Entypo name="dot-single" size={24} color="red" />
                                
                                {ingredients}</Text>
                        </View>
                    )
                })}
                    <Text style={{fontWeight:"bold",fontSize:24,marginTop:20}}>Steps</Text>
                {item.steps.map((ingredients,id)=>{
                    return(
                        <View>
                            <Text key={item.id}>
                            <Entypo name="dot-single" size={24} color="red" />
                                
                                {ingredients}</Text>
                        </View>
                    )
                })}
                    </ScrollView> 
                </View>
           
           
                </View>
             
            </View>
           
        </View>
     );
}
 
export default RecipeDetails;