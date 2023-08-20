import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import BackgroundTemplate from '../components/templates/BackgroundTemplate';
import TextHeading from '../components/atoms/texts/TextHeading';
import TextBody from '../components/atoms/texts/TextBody';
import { LinearGradient } from 'expo-linear-gradient';
import IconBackwardArrow from '../components/atoms/icons/IconBackwardArrow';
import IconProfileData from '../components/atoms/icons/IconProfileData';

const UserProfileScreen = () => {
  return (
      <BackgroundTemplate>
          <View style={styles.container}>
            <View style={styles.settingContainer}>
                <TouchableOpacity style={styles.settingsIcon}>
                    <Image
                        source={require('../assets/images/profileIcons/settings.png')}
                        style={styles.settingsIcon}
                        />
                </TouchableOpacity>
            </View>

            <View style={styles.profileContainer}>
                <Image
                source={require('../assets/images/profileIcons/profileIcon.png')}
                style={styles.profileImage}
                />
                <TextHeading
                value={'Ravindu Dananjith'}
                textAlign={"center"}
                      lineHeight={39}
                      fontSize={26}
                      fontWeight={600}
                      color={'white'}
                  ></TextHeading>
                  <TextBody
                value={'Ravindu Dananjith'}
                textAlign={"center"}
                      lineHeight={18}
                      fontSize={16}
                      fontWeight={500}
                      color={'white'}
              ></TextBody>
            </View>

            <View style={styles.profileDetailContainer}>
                  <View style={styles.membershipContainer}>
                        <TextBody
                        value={'Membership  '}
                        textAlign={"left"}
                            lineHeight={24}
                            fontSize={16}
                            fontWeight={600}
                            color={'white'}
                        ></TextBody>
                        <TextBody
                        value={'⚫️ Platinum'}
                        textAlign={"left"}
                            lineHeight={24}
                            fontSize={16}
                            fontWeight={500}
                            color={'white'}
                    ></TextBody>
                  </View>
                  <View style={styles.tripSummaryContainer}>
                      <View style={styles.tripCard}>
                      <TextBody
                        value={'Total Trips '}
                        textAlign={"left"}
                            lineHeight={24}
                            fontSize={16}
                            fontWeight={600}
                            color={'white'}
                          ></TextBody>
                          <View style={styles.tripCountCard}>
                            <TextHeading
                            value={'10'}
                            textAlign={"center"}
                                lineHeight={39}
                                fontSize={26}
                                fontWeight={600}
                                color={'white'}
                            ></TextHeading>
                          </View>
                      </View>
                      <View style={styles.distanceCard}>
                      <TextBody
                        value={'Total Distance  '}
                        textAlign={"left"}
                            lineHeight={24}
                            fontSize={16}
                            fontWeight={600}
                            color={'white'}
                          ></TextBody>
                          <View>
                          <LinearGradient
      colors={['#43D2FF', '#4F009E']} // Specify your gradient colors
      style={styles.distanceBlueCard}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
                              >
                             <TextBody
                        value={'Light Years'}
                        textAlign={"left"}
                            lineHeight={24}
                            fontSize={16}
                            fontWeight={600}
                            color={'white'}
                              ></TextBody>
                              <TextHeading
                            value={'48.97 M'}
                            textAlign={"center"}
                                lineHeight={30}
                                fontSize={26}
                                fontWeight={600}
                                color={'white'}
                            ></TextHeading>     
    </LinearGradient>
                          
                          </View>
                      </View>
                  </View>
                  <View style={styles.dashboardContainer}>
                  <TextBody
                        value={'Dashboard'}
                        textAlign={"left"}
                            lineHeight={24}
                            fontSize={16}
                            fontWeight={600}
                          color={'white'}
                          marginBottom={-30}
                      ></TextBody>
                      <View style={styles.dashboardContainer}>
                          <View style={styles.dashboardItem}>
                              <View style={styles.itemIcon}>
                                <IconProfileData
                                        source={require("../assets/images/profileIcons/payment.png")}
                                    />
                              </View>
                              <View style={styles.itemDataContainer}>
                                  <View style={styles.itemName}><TextBody
                                            value={'Payments'}
                                            textAlign={"left"}
                                                lineHeight={24}
                                                fontSize={16}
                                                fontWeight={600}
                                                color={'white'}
                                        ></TextBody>
                                  </View>
                                  <View style={styles.itemBtn1}>
                                      <TouchableOpacity>
                                      <TextBody
                                            value={'4 New >'}
                                            textAlign={"left"}
                                                lineHeight={24}
                                                fontSize={14}
                                                fontWeight={600}
                                                color={'white'}
                                        ></TextBody>
                                      </TouchableOpacity>
                                  </View>
                              </View>
                          </View>
                          <View style={styles.dashboardItem}>
                              <View style={styles.itemIcon}>
                                <IconProfileData
                                        source={require("../assets/images/profileIcons/Achievement.png")}
                                    />
                              </View>
                              <View style={styles.itemDataContainer}>
                                  <View style={styles.itemName}><TextBody
                                            value={'Achievement'}
                                            textAlign={"left"}
                                                lineHeight={24}
                                                fontSize={16}
                                                fontWeight={600}
                                                color={'white'}
                                        ></TextBody>
                                  </View>
                                  <View style={styles.itemBtn2}>
                                      <TouchableOpacity>
                                      <TextBody
                                            value={'>'}
                                            textAlign={"left"}
                                                lineHeight={24}
                                                fontSize={14}
                                                fontWeight={600}
                                                color={'white'}
                                        ></TextBody>
                                      </TouchableOpacity>
                                  </View>
                              </View>
                          </View>
                          <View style={styles.dashboardItem}>
                              <View style={styles.itemIcon}>
                                <IconProfileData
                                        source={require("../assets/images/profileIcons/privacy.png")}
                                    />
                              </View>
                              <View style={styles.itemDataContainer}>
                                  <View style={styles.itemName}><TextBody
                                            value={'Privacy'}
                                            textAlign={"left"}
                                                lineHeight={24}
                                                fontSize={16}
                                                fontWeight={600}
                                                color={'white'}
                                        ></TextBody>
                                  </View>
                                  <View style={styles.itemBtn3}><TouchableOpacity>
                                  <TextBody
                                            value={'Action Needed >'}
                                            textAlign={"left"}
                                                lineHeight={24}
                                                fontSize={14}
                                                fontWeight={600}
                                                color={'white'}
                                        ></TextBody>
                                  </TouchableOpacity></View>
                              </View>
                          </View>
                      </View>
                  </View>
            </View>
            </View>
    </BackgroundTemplate>
  );
};

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'yellow',
        width: '100%',
        height: '100%'
    },
    settingContainer: {
        marginTop: 45,
        paddingRight: 30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
        // backgroundColor: 'red'
    },
    settingsIcon: {
        width: 25,
        height: 26,
  },
  profileContainer: {
      alignItems: 'center',
      marginTop: 1,
  },
  profileImage: {
        width: 98,
        height: 98,
      borderRadius: 69,
        marginBottom: 18
  },
    profileDetailContainer: {
        display: 'flex',
        flexDirection: 'column',
      marginTop: 35,
        marginHorizontal: 30,
      marginBottom: 40,
    },
    membershipContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    tripSummaryContainer: {
        marginTop: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "flex-start"
    },
    tripCard: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "flex-start"
    },
    tripCountCard: {
        textAlignVertical: 'center',
        marginTop: 5,
        height: 60,
        paddingRight: 40,
        paddingTop: 10,
        paddingLeft: 30, 
        borderRadius: 18,
        backgroundColor: 'black'
    },
    distanceCard: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "flex-start",
        marginLeft: 30,
    },
    distanceBlueCard: {
        height: 60,
        marginTop: 5,
        paddingRight: 30,
        paddingTop: 5,
        paddingLeft: 20, 
        borderRadius: 18,
        backgroundColor: 'linear-gradient(135deg, #43D2FF 0%, #4F009E 100%)'
    },
    dashboardContainer: {
        marginTop: 35,
        display: 'flex',
        flexDirection: 'column',
        paddingRight: 40,
    },
    dashboardItem: {
        width: '100%',
        marginBottom: 12,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    itemIcon: {
        marginRight: 20,
    },
    itemDataContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor: 'yellow',
        paddingVertical: 17,
    },
    itemName: {},
    itemBtn1: {
        marginTop: -3,
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: '#4F009E',
        borderRadius: 16,
    },
    itemBtn2: {
        marginTop: -3,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    itemBtn3: {
        marginTop: -3,
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: '#438EFF',
        borderRadius: 16,
    }

});

export default UserProfileScreen;
