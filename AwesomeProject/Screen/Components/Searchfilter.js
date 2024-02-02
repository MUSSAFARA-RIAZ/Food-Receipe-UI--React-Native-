import { TextInput, View, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

const Searchfilter = () => {
    return ( 
        <View style={styles.maincomp}>

         
            <TextInput style={styles.textinp}  placeholder="Enter Your Receipe Name" ></TextInput>
            <FontAwesome style={styles.icon} name="search" size={24} color="crimson" />

        </View>
     );
}
 
export default Searchfilter;
const styles=StyleSheet.create({
    maincomp:{
        flexDirection:"row",
        backgroundColor:'#fff',
        paddingVertical: 5,
        borderRadius:5 ,
       
        alignItems:"center",
        padding:5,
        margin:12

    },
    textinp:{
      
        flex: 1,
        paddingVertical: 5,

    },
    icon: {
        padding: 5,
        
      },
})