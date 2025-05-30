import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Image,
  StatusBar,
} from 'react-native'
import axiosInstance from './axiosInstance'
import { getItem, setItem } from './page_components/Async'

export default function Predraft(props) {
  const windowWidth = Dimensions.get('window').width
  const windowHeight = Dimensions.get('window').height

  const isLeagueManager = true
  const [onPayout, setonPayout] = useState(false)
  const [onLeagueSetup, setonLeagueSetup] = useState(false)

  const styles = StyleSheet.create({
    title: {
      width: windowWidth,
      textAlign: 'center',
      marginTop: 0.1 * windowHeight,
      fontSize: 25,
      fontWeight: '700',
      alignSelf: 'center',
      marginBottom: 0.01 * windowHeight,
      color: 'rgba(102, 102, 102, 1)',
    },
    input: {
      backgroundColor: '#F6F6F6',
      height: 0.08 * windowHeight,
      borderRadius: 10,
      width: 0.9 * windowWidth,
      paddingLeft: 0.07 * windowWidth,
      fontSize: 30,
      marginTop: 0.04 * windowHeight,
      alignSelf: 'center',
      borderColor: 'rgba(232, 232, 232, 1)',
      borderWidth: '1px',
    },
    link: {
      fontSize: 20,
      color: 'rgba(172, 101, 215, 1)',
      height: 0.03 * windowHeight,
      overflow: 'visible',
      alignContent: 'center',
      justifyContent: 'center',
      marginBottom: -1 * windowHeight,
    },
    button: {
      width: 0.9 * windowWidth,
      height: 0.09 * windowHeight,
      textAlign: 'center',
      backgroundColor: '#ac65d7',
      borderRadius: 30,
      justifyContent: 'center',
      fontSize: 30,
      color: 'white',
      alignSelf: 'center',
      justifySelf: 'center',
      marginBottom: 0.0 * windowHeight,
      marginTop: 0.02 * windowHeight,
      bottom: 0.04 * windowHeight,
    },
    buttonText: {
      textAlign: 'center',
      borderRadius: 30,
      fontSize: 25,
      color: 'white',
      fontWeight: 'bold',
    },
    showPassword: {
      fontSize: 25,
      color: '#ac65d7',
      marginTop: -0.055 * windowHeight,
    },
    popup: {
      width: windowWidth,
      height: windowHeight,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
    },
    modal: {
      width: 0.9 * windowWidth,
      height: 0.5 * windowHeight,
      backgroundColor: 'white',
      borderRadius: 40,
      justifySelf: 'center',
      alignSelf: 'center',
      position: 'absolute',
      alignItems: 'center',
    },
    containerHeader: {
      alignItems: 'center',
      height: 0.05 * windowHeight,
      backgroundColor: 'rgba(172, 101, 214, 1)',
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      borderColor: 'rgba(172, 101, 214, 1)',
      borderWidth: 1,
      justifyContent: 'center',
    },
    containerSubHeader: {
      height: 0.05 * windowHeight,
      display: 'flex',
      flexDirection: 'row',
      gap: '40%',
      borderColor: 'rgba(217, 217, 217, 1)',
      borderWidth: 1,
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    subContainer: {
      height: 0.1 * windowHeight,
      display: 'flex',
      flexDirection: 'column',
      gap: '40%',
      borderColor: 'rgba(217, 217, 217, 1)',
      borderTopColor: 'rgba(217, 217, 217, 0)',
      borderWidth: 1,
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomRightRadius: '20',
      borderBottomLeftRadius: '20',
    },
    header: {
      backgroundColor: '#ac65d7',
      // borderBottomLeftRadius: 0.45*windowWidth,
      // borderBottomRightRadius: 0.45*windowWidth,
      width: 1 * windowWidth,
      height: 0.2 * windowHeight,
    },
    container: {
      width: windowWidth,
      minHeight: 0.1 * windowHeight,
      display: 'flex',
      marginTop: 0.03 * windowHeight,
    },
    player: {
      borderWidth: 1,
      borderColor: 'border: 1px solid rgba(229, 229, 229, 1)',
      fontSize: 18,
      padding: 5,
      paddingLeft: 50,
      fontWeight: '600',
    },
    title2: {
      width: windowWidth,
      textAlign: 'center',
      marginTop: 0.08 * windowHeight,
      fontSize: 40,
      fontWeight: '700',
      alignSelf: 'center',
      marginBottom: 0.01 * windowHeight,
    },
    purpleText: {
      alignSelf: 'center',
      fontSize: 20,
      color: 'rgba(172, 101, 214, 1)',
      fontWeight: '500',
      marginTop: -0.02 * windowHeight,
    },
    buttonNotSelectable: {
      width: 0.9 * windowWidth,
      height: 0.09 * windowHeight,
      textAlign: 'center',
      backgroundColor: '#ac65d7',
      borderRadius: 30,
      justifyContent: 'center',
      fontSize: 30,
      color: 'white',
      alignSelf: 'center',
      justifySelf: 'center',
      marginBottom: 0.0 * windowHeight,
      marginTop: 0.02 * windowHeight,
      bottom: 0.04 * windowHeight,
      opacity: 0.5,
    },
  })

  return (
    <View
      style={{
        opacity: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        flex: 1,
      }}
    >
      <View style={{ backgroundColor: 'white', minHeight: windowHeight }}>
        {!onPayout && !onLeagueSetup && (
          <View>
            <View style={styles.header}>
              <Image
                style={{
                  height: 0.07 * windowHeight,
                  width: 0.24 * windowWidth,
                  alignSelf: 'center',
                  top: 0.097 * windowHeight,
                }}
                resizeMode={'cover'}
                source={require('../assets/mokLogo.png')}
              />
              <Image
                style={{
                  position: 'absolute',
                  height: 0.055 * windowHeight,
                  width: windowWidth,
                  top: 0.2 * windowHeight,
                  alignSelf: 'center',
                }}
                resizeMode={'cover'}
                source={require('../assets/swoop.png')}
              />
            </View>
            <Text style={styles.title}>League ID: 283394</Text>

            <View style={styles.container}>
              <Text style={styles.player}>BigA**Truck (You)</Text>
              <Text style={styles.player}>NavinsJohnson (Navin)</Text>
              <Text style={styles.player}>BigA**Truck (You)</Text>
              <Text style={styles.player}>BigA**Truck (You)</Text>
              <View style={{ marginTop: 0.2 * windowHeight }}>
                {!isLeagueManager && (
                  <View>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => setonPayout(true)}
                    >
                      <Text style={styles.buttonText}>View Payout</Text>
                    </TouchableOpacity>
                    <Text style={styles.purpleText}>
                      Waiting for manager to begin draft...
                    </Text>
                  </View>
                )}

                {isLeagueManager && (
                  <View>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => setonLeagueSetup(true)}
                    >
                      <Text style={styles.buttonText}>League Setup</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonNotSelectable}>
                      <Text style={styles.buttonText}>Begin Draft</Text>
                    </TouchableOpacity>
                    <Text style={styles.purpleText}>
                      You need 2 more members!
                    </Text>
                  </View>
                )}
              </View>
            </View>
          </View>
        )}

        {onPayout && (
          <View>
            <TouchableOpacity
              onPress={() => setonPayout(false)}
              style={{
                position: 'absolute',
                height: 0.05 * windowHeight,
                width: 0.1 * windowWidth,
                top: 0.08 * windowHeight,
                left: 0.1 * windowWidth,
              }}
            >
              <Image
                style={{
                  position: 'absolute',
                  height: 0.05 * windowHeight,
                  width: 0.1 * windowWidth,
                  marginLeft: -0.05 * windowWidth,
                }}
                resizeMode={'cover'}
                source={require('../assets/Login/X.png')}
              />
            </TouchableOpacity>
            <Text style={styles.title2}>Payout</Text>
            {isLeagueManager && (
              <Image
                style={{
                  position: 'absolute',
                  height: 0.8 * windowHeight,
                  width: 0.9 * windowWidth,
                  top: 0.2 * windowHeight,
                  alignSelf: 'center',
                }}
                resizeMode={'cover'}
                source={require('../assets/Login/PayoutLeagueMaster.png')}
              />
            )}
            {!isLeagueManager && (
              <Image
                style={{
                  position: 'absolute',
                  height: 0.8 * windowHeight,
                  width: 0.9 * windowWidth,
                  top: 0.2 * windowHeight,
                  alignSelf: 'center',
                }}
                resizeMode={'cover'}
                source={require('../assets/Login/PayoutLeaguePlayer.png')}
              />
            )}
          </View>
        )}
        {!onPayout && onLeagueSetup && (
          <View>
            <TouchableOpacity
              onPress={() => setonLeagueSetup(false)}
              style={{
                position: 'absolute',
                height: 0.05 * windowHeight,
                width: 0.1 * windowWidth,
                top: 0.08 * windowHeight,
                left: 0.1 * windowWidth,
              }}
            >
              <Image
                style={{
                  position: 'absolute',
                  height: 0.05 * windowHeight,
                  width: 0.1 * windowWidth,
                  marginLeft: -0.05 * windowWidth,
                }}
                resizeMode={'cover'}
                source={require('../assets/Login/X.png')}
              />
            </TouchableOpacity>
            <Text style={styles.title2}>League Setup</Text>
            <View style={{ marginTop: 0.6 * windowHeight }}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => setonPayout(true)}
              >
                <Text style={styles.buttonText}>Payout Settings</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </View>
  )
}
