import { ScrollView, Text, View } from "react-native";
import { categories, colors } from "../Screens/Constant";
const Categoryfilter = () => {
    return ( 
        <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {categories.map((category,index)=>{
                    return(
                        <View style={{backgroundColor: index===0 ?colors.COLOR_PRIMARY:colors.COLOR_LIGHT, marginRight:30, marginTop:10, borderRadius:10,padding:10}}> 

                            <Text style={{color:index==0 && colors.COLOR_LIGHT}}>{category.category}</Text>
                        </View>
                    )

                })}
            
            </ScrollView>
            
        </View>
     );
}
 
export default Categoryfilter;