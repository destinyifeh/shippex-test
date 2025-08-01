import { useNavigation } from '@react-navigation/native';
import { ArrowLeft } from 'lucide-react-native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {
    COLOUR_BLACK,
    FONT_FAMILY_BODY_BOLD,
    FONT_FAMILY_BODY_SEMIBOLD
} from '../constants';

export default function HeaderWrapper({
  title,
  children,
  contentContainerStyle,
}:{title:string, children:React.ReactNode, contentContainerStyle:any}) {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, backgroundColor:COLOUR_BLACK}}>
      <View style={{marginTop: 40, flex: 1}}>
        {/* <View style={styles.headerTextIconContainer}>
          
          <Text style={styles.headerText}>{title}</Text>
        </View> */}
        <View style={styles.headerViewDesign}></View>

        <View style={[styles.headerMainView, {...contentContainerStyle}]}>
            <View style={{flexDirection:"row", alignItems:"center", gap:2,position:"absolute", left: 15, top:10, zIndex:10
            }}>
                <TouchableOpacity
            style={{}}
            onPress={() => navigation.goBack()}>
 <ArrowLeft size={20} color="black"/> 
        </TouchableOpacity>
         <Text>Cancel</Text>  
            </View>

          {children}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerTextIconContainer: {
    marginBottom: 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 16,
    lineHeight: 18.75,
    fontWeight: '500',
    fontFamily: FONT_FAMILY_BODY_SEMIBOLD,
  },
  headerViewDesign: {
    height: 10,
    width: '93%',
    alignSelf: 'center',
    backgroundColor: 'purple',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  headerMainView: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
    width: '100%',
  },

  headerDayText: {
    fontFamily: FONT_FAMILY_BODY_BOLD,
    fontWeight: '500',
    lineHeight: 20,
    fontSize: 16,
    color: COLOUR_BLACK,
  },
});