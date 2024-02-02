import { FlatList, Text, View , Image, Pressable } from "react-native";
import { colors, recipeList } from "../Screens/Constant";
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const Recipecard = () => {
    const navigation=useNavigation();
    return ( 
        <View>
            <FlatList data={recipeList} renderItem={({item})=>
            <Pressable onPress={()=>navigation.navigate("recipedetails",{item:item})} style={{
                backgroundColor: colors.COLOR_LIGHT,
							shadowColor: "#000",
							shadowOffset: { width: 0, height: 4 },
							shadowOpacity: 0.1,
							shadowRadius: 7,
							borderRadius: 16,
						
							alignItems: "center",
							paddingHorizontal: 8,
							paddingVertical: 26,
                            margin:5
                }}>
                <Image source={item.image} style={{height:150, width:150,resizeMode:"center"}}/>
                <Text>{item.name}</Text>
                <View style={{flexDirection:"row", marginTop:10}}>
            <Text style={{marginRight:10}}>{item.time}</Text>
            <Text style={{marginRight:10}}>{item.rating}</Text>
            <FontAwesome  name="star" size={20} color={colors.COLOR_PRIMARY}/>

          </View>
            </Pressable>} numColumns={2}
               
                columnWrapperStyle={{
                  justifyContent: "space-between",
                }}
                showsVerticalScrollIndicator={false}
            />
        </View>
     );
}
 

export default Recipecard;


