import React from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  Dimensions,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
  StatusBar,
} from 'react-native'
import { StyleSheet } from 'react-native'
import Player from './page_components/Player.js'
import TeamLogo from './page_components/TeamLogo.js'
import StickyBar from './page_components/StickyBar.js'
import axiosInstance from './axiosInstance.js'
import { getItem, setItem } from './page_components/Async.js'
import Team from './page_components/Team.js'
import Game from './page_components/Game.js'
import Predraft from './PreDraft.js'
import { useState, useEffect } from 'react'
export default function HomePage(props) {
  const windowWidth = Dimensions.get('window').width
  const windowHeight = Dimensions.get('window').height
  const predraft = false //IMPLEMENT PREDRAFT CALL
  const [week, setWeek] = useState(1)
  // UpdateGameData()
  if (predraft == true) {
    return <Predraft></Predraft>
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FFFFFF',
      width: '100%',
      height: 'auto',
      minHeight: '100%',
      overflow: 'hidden',
    },
    header: {
      backgroundColor: '#ac65d7',
      // borderBottomLeftRadius: 0.45*windowWidth,
      // borderBottomRightRadius: 0.45*windowWidth,
      width: 1.4 * windowWidth,
      height: 0.15 * windowHeight,
      marginLeft: '-20%',
    },
    BodyContainer: {
      marginTop: 0.07 * windowHeight,
      width: windowWidth,
      alignItems: 'center',
      display: 'flex',
      gap: 20,
    },
    stickyBar: {
      position: 'absolute',
      right: 0,
      top: 0.9 * windowHeight,
      height: 0.1 * windowHeight,
      backgroundColor: '#ac65d7',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      gap: 0.1 * windowWidth,
    },
    Username: {
      textAlign: 'center',
      fontSize: 25,
      fontWeight: 'bold',
    },
    infoContainer: {
      width: 0.9 * windowWidth,
      borderRadius: 20,
    },
    containerHeader: {
      alignItems: 'center',
      height: 0.05 * windowHeight,
      backgroundColor: 'background: rgba(172, 101, 214, 1);',
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
      minHeight: 0.1 * windowHeight,
      display: 'flex',
      flexDirection: 'column',
      gap: '40%',
      borderColor: 'rgba(217, 217, 217, 1)',
      borderTopColor: 'rgba(217, 217, 217, 0)',
      borderWidth: 1,
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerFooter: {
      alignItems: 'center',
      height: 0.05 * windowHeight,
      backgroundColor: 'background: rgba(172, 101, 214, 1);',
      borderBottomRightRadius: 20,
      borderBottomLeftRadius: 20,
      borderColor: 'rgba(172, 101, 214, 1)',
      borderWidth: 1,
      justifyContent: 'center',
    },
  })
  const [gameData, setGameData] = useState([
    { homeTeam: 'KC', awayTeam: 'SF' },
    { homeTeam: 'KC', awayTeam: 'SF' },
  ])
  const UpdateGameData = async () => {
    try {
      console.log('/game/week/' + week)
      const data = await axiosInstance.get('/game/week/' + week)
      console.log(data.data)
      setGameData(data.data['$values'])
      console.log('retrived data')
      console.log(gameData)
    } catch (error) {
      Alert('There was an error loading the page. Please try again later')
      if (error.response) {
        // The request was made, and the server responded with a status code that falls out of the range of 2xx
        console.error('Error response data:', error.response.data)
        console.error('Error response status:', error.response.status)
        console.error('Error response headers:', error.response.headers)
      } else if (error.request) {
        // The request was made, but no response was received
        console.error('Error request:', error.request)
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error message:', error.message)
      }
    }
  }
  useEffect(() => {
    UpdateGameData()
  }, [week])

  const incrementWeek = async () => {
    setWeek(week + 1)
  }

  const decrementWeek = async () => {
    if (week > 1) {
      setWeek(week - 1)
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.header}>
          <Image
            style={{
              position: 'absolute',
              height: 0.05 * windowHeight,
              width: 0.1 * windowWidth,
              left: 0.3 * windowWidth,
              top: 0.06 * windowHeight,
            }}
            resizeMode={'cover'}
            source={require('../assets/Homepage/flag.png')}
          />
          <Image
            style={{
              height: 0.07 * windowHeight,
              width: 0.24 * windowWidth,
              alignSelf: 'center',
              top: 0.06 * windowHeight,
            }}
            resizeMode={'cover'}
            source={require('../assets/mokLogo.png')}
          />
          {/* <Image style = {{position: "absolute", height: 0.055*windowHeight, width: 0.1*windowWidth, right: 0.37*windowWidth, top: 0.1*windowHeight}} resizeMode={'cover'} source = {require('../assets/Homepage/notifications.png')}/>
<Image style = {{position: "absolute", height: 0.055*windowHeight, width: 0.1*windowWidth, right: 0.23*windowWidth, top: 0.1*windowHeight}} resizeMode={'cover'} source = {require('../assets/Homepage/settings.png')}/> */}
          <Image
            style={{
              position: 'absolute',
              height: 0.055 * windowHeight,
              width: windowWidth,
              top: 0.15 * windowHeight,
              alignSelf: 'center',
              zIndex: '99',
            }}
            resizeMode={'cover'}
            source={require('../assets/swoop.png')}
          />
        </View>

        <View style={styles.BodyContainer}>
          <Text style={styles.Username}>Welcome BigAssTruck!</Text>
          {
            // After 11 letters, this has potential to move onto the next line. Either limit to 11 letters or let it go to next line
          }

          <Player
            isSelf={true}
            name='BigAssTruck'
            season='4'
            wk='+6'
            skins='1'
            LOKs='3'
            ranking='#3'
          />

          <Text
            style={{
              fontFamily: 'Poppins',
              fontSize: 20,
              fontWeight: 'bold',
              lineHeight: '24px',
              textAlign: 'left',
              width: 0.8 * windowWidth,
            }}
          >
            Your Stable
          </Text>

          <View
            style={{
              minHeight: 50,
              borderRadius: 20,
              borderColor: 'border: 1px solid rgba(229, 229, 229, 1)',
              borderWidth: 1,
              width: 0.9 * windowWidth,
              marginTop: -0.02 * windowHeight,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              style={{
                position: 'absolute',
                height: 0.06 * windowHeight,
                width: 0.1 * windowWidth,
                alignSelf: 'center',
                top: -0.035 * windowHeight,
              }}
              resizeMode={'cover'}
              source={require('../assets/Homepage/lock.png')}
            />
            <Text
              style={{
                width: 0.9 * windowWidth,
                marginBottom: 0.005 * windowHeight,
                alignSelf: 'center',
                textAlign: 'center',
                fontFamily: 'Poppins',
                fontSize: 19,
                fontWeight: '500',
                marginTop: 0.02 * windowHeight,
                color: 'background: rgba(172, 101, 214, 1);',
              }}
            >
              49:00:00
            </Text>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <Team team='bills' LOKs={4}></Team>
              <Team team='49ers' LOKs={3} selected={true}></Team>
              <Team team='49ers' LOKs={3}></Team>

              <Team team='49ers' LOKs={3}></Team>
              <Team team='49ers' LOKs={3}></Team>
            </View>
          </View>

          <View style={styles.infoContainer}>
            <View style={styles.containerHeader}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'white',
                  fontWeight: 'bold',
                  padding: 2,
                  paddingRight: 5,
                  paddingLeft: 5,
                  overflow: 'hidden',
                  borderRadius: '10px',
                }}
              >
                Week {week}
              </Text>
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  height: 0.03 * windowHeight,
                  width: 0.05 * windowWidth,
                  alignSelf: 'flex-start',
                  left: 0.05 * windowWidth,
                }}
                onPress={decrementWeek}
              >
                <Image
                  style={{
                    position: 'absolute',
                    height: 0.03 * windowHeight,
                    width: 0.05 * windowWidth,
                    alignSelf: 'flex-start',
                  }}
                  resizeMode={'cover'}
                  source={require('../assets/Homepage/leftarrowWhite.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  height: 0.03 * windowHeight,
                  width: 0.05 * windowWidth,
                  alignSelf: 'flex-end',
                  right: 0.05 * windowWidth,
                }}
                onPress={incrementWeek}
              >
                <Image
                  style={{
                    position: 'absolute',
                    height: 0.03 * windowHeight,
                    width: 0.05 * windowWidth,
                    alignSelf: 'flex-end',
                  }}
                  resizeMode={'cover'}
                  source={require('../assets/Homepage/rightarrowWhite.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.subContainer}>
              <View
                style={{
                  paddingTop: 0.02 * windowHeight,
                  paddingBottom: 0.03 * windowHeight,
                  width: 0.85 * windowWidth,
                  gap: 15,
                }}
              >
                {
                  // isLok = false, isFinal = false, win = 0, HS = 0, LOK = 0
                }
                <FlatList
                  data={gameData}
                  renderItem={({ item }) => (
                    <Game team1={item.homeTeam} team2={item.awayTeam} />
                  )}
                  keyExtractor={(item) => item.id}
                />
              </View>
            </View>

            <View style={styles.containerFooter}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'white',
                  fontWeight: 'bold',
                  padding: 2,
                  paddingRight: 5,
                  paddingLeft: 5,
                  overflow: 'hidden',
                  borderRadius: '10px',
                  alignSelf: 'flex-end',
                  marginRight: '10%',
                }}
              >
                6 Points
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            width: 0.9 * windowWidth,
            minHeight: 130,
            borderRadius: 0.1 * windowWidth,
            marginTop: 10,

            alignSelf: 'center',
            paddingBottom: '1000',
          }}
        ></View>
      </ScrollView>

      {/* <View style = {styles.stickyBar}>

      <Image style = {{height: 0.055*windowHeight, width: 0.1*windowWidth}} resizeMode={'cover'} source = {require('../assets/home.png')}/>
      <TouchableOpacity onPress = {goToStable}>
      <Image style = {{height: 0.06*windowHeight, width: 0.15*windowWidth}} resizeMode={'cover'} source = {require('../assets/week.png')}/>
      </TouchableOpacity>
      <TouchableOpacity onPress = {() => (props.properties.navigation.navigate("Standings"))}>
      <Image style = {{height: 0.06*windowHeight, width: 0.15*windowWidth}} resizeMode={'cover'} source = {require('../assets/standings_labelled.png')}/>
      </TouchableOpacity>
      <Image style = {{height: 0.06*windowHeight, width: 0.15*windowWidth}} resizeMode={'cover'} source = {require('../assets/trades.png')}/>



      </View> */}

      <StickyBar properties={props} page='Home'></StickyBar>
    </View>
  )
}
