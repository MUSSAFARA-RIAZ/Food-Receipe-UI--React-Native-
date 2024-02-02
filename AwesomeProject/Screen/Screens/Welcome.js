import {View,Text,Image,StyleSheet,Dimensions, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
    const navigation = useNavigation();
    return ( 
        <View style={styles.welcome}>
            <Image style={styles.welcomeimg} source={require("../../../AwesomeProject/assets/Images/welcome1.png")}/>
            <Text style={styles.txt}>400K+ Premium Recipes</Text>
            <Text style={styles.txt1}>Code Like A Chef</Text>
            {/*  */}
            <TouchableOpacity  style={styles.button} onPress={()=>navigation.navigate("recipe")}>
        <Text style={styles.buttonText}>Let's Go</Text>
      </TouchableOpacity>

        </View>
     );
}
 
export default Welcome;
const styles=StyleSheet.create({
    welcome:{
        flex:1,
        alignItems:'center',
        width:"auto"

    },
   welcomeimg:{
    width:Dimensions.get("screen").width-20,
    height:390
   },
   txt:{
    color:"crimson",
    fontSize:26,
    fontWeight:"bold"
   },
   txt1:{
    fontSize:32,
    fontWeight:"bold",
    marginTop:50,
   },
   button: {
    backgroundColor: 'crimson',
    paddingVertical: 10,
    paddingHorizontal: 90,
    borderRadius: 10,
    marginTop:40
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },

  
})