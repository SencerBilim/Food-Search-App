import React from 'react';
import { View, StyleSheet, TextInput} from 'react-native';
import Feather from '@expo/vector-icons/Feather';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return <View style={styles.backgroundStyle}>
        <Feather name="search" style={styles.iconStyle} />
        <TextInput 
        autoCorrect= {false}
        autoCapitalize="none"
        placeholder="Search"
        style={styles.inputStyle}
        value= {term}
        onChangeText= {onTermChange}
        onEndEditing={onTermSubmit}
        />
    </View>
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: "#E3E2E2",
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginTop: 15,
        flexDirection: "row",
        
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        color: "black",
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 15,

    }
});


export default SearchBar;