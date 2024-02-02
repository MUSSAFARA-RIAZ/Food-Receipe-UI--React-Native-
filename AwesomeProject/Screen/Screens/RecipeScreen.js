import { SafeAreaView,StyleSheet, Text,View} from "react-native";
import Header from "../Components/Header";
import Searchfilter from "../Components/Searchfilter";
import Categoryfilter from "../Components/Categoryfilter";
import Recipecard from "../Components/Recipecard";
const RecipeScreen = () => {
    return ( 
        <SafeAreaView style={styles.rscreen}>
            {/* react native */}
     
            <Header HeaderText={"Hi, Musafara"} HeaderIcon={"bell-o"}/>
            <Searchfilter/>
            <Text style={{fontWeight:"bold",fontSize:25 , marginTop:10}}>Categories</Text>
            <Categoryfilter/>
            {/* Receipe List */}
        <View style={{flex:1,height:400}}>
            <Text style={{fontWeight:"bold",fontSize:25, marginTop:10}}>Recipe</Text>
            <Recipecard/>
            </View>
           
        </SafeAreaView>
     );
}
 
export default RecipeScreen;
const styles=StyleSheet.create({
    rscreen:{
        margin:10,
        flex:1
        

    }
    

})