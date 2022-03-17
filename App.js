import React, { useRef } from 'react';
import { TouchableOpacity,Animated, Dimensions, ScrollView, StyleSheet,StatusBar, View, Text } from 'react-native';

const { width } = Dimensions.get('window');
const itemWidth = (width / 3) * 2;
const padding = (width - itemWidth) / 2;
const offset = itemWidth;
export default function AnimatedTileScrolling() {
    const scrollX = useRef(new Animated.Value(0)).current;
    
    
    return (
        <View style={styles.container}>
            <View style={styles.Header}>
                <Text  style={styles.TextHeader}>Animated Tile Scrolling</Text>
            </View>
            <StatusBar
                backgroundColor="#3a0164" />
        <ScrollView
            horizontal
            pagingEnabled
            decelerationRate="fast"
            contentContainerStyle={styles.scrollView}
            showsHorizontalScrollIndicator={false}
            snapToInterval={offset}
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                useNativeDriver: false,
            })}>
            {[1, 2, 3, 4, 5].map((x, i) => (
                <Item key={x} i={i} scrollX={scrollX} />
            ))}
        </ScrollView>
        <View style={styles.BoxInfor}>
                         <Text style={styles.BoxInforNome}>Feito por Almir Stark  </Text>
                   
                </View>
                
                <TouchableOpacity style={styles.BoxInforGit}>
            <Text style={styles.BtnText}>Git </Text>
            

                         </TouchableOpacity>
        </View>
    );
}

function Item({ i, scrollX }) {
    const scale = scrollX.interpolate({
        inputRange: [-offset + i * offset, i * offset, offset + i * offset],
        outputRange: [0.75, 1, 0.75],
    });
    return <Animated.View style={[styles.item, { transform: [{ scale }] }]} />;
}

const styles = StyleSheet.create({
    Header:{
        backgroundColor: "#4B0082",
        display: "flex",
        paddingLeft: 20,
        paddingTop: 20,
        top: -3,
        paddingBottom: 20,
        textAlignVertical: "center"
    },
    TextHeader:{
        color:"#fff",
        fontSize: 20,
    },
    container: {
        flex: 1,
        backgroundColor: '#0d1117',
    },
    scrollView: {
        paddingHorizontal: padding,
        alignItems: 'center',
    },
    item: {
        height: itemWidth,
        width: itemWidth,
        backgroundColor: '#238636',
        borderRadius: 10,
    },
    BoxInfor:{
        backgroundColor: "#000",
        height: 30,
        bottom:-5,
        alignItems: 'center',
        display: 'flex',
        width: "100%",
        textAlign: 'center',
        
        elevation: 1,
    },
    BoxInforNome:{
        color: "#fff",
        top: 5,
    },
    BoxInforGit:{
        backgroundColor:"#4B0082",
        display: "flex",
        alignItems: "center",
        paddingVertical: 10,
        position: "absolute",
        width: 60,
        height: 60,
        bottom: 5,
        right: 5,
        borderRadius: 50,
        elevation: 10,
        shadowOffset:{
            width:2,
            height:2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
    },
    BtnText:{
        color: "#fff",
        fontSize: 22,
        top: 5,
    }
});