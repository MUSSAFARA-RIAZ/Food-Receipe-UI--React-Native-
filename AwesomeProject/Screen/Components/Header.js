import {View,Text} from "react-native";
import { FontAwesome } from '@expo/vector-icons';
const Header = ({HeaderText,HeaderIcon}) => {
    return ( 
        <View style={{flexDirection:"row"}}>
            <Text  style={{fontWeight:"bold", fontSize:24, flex:1}} >{HeaderText}</Text>
            <FontAwesome  name={HeaderIcon} size={24} color="crimson" />
        </View>
     );
}
 
export default Header;