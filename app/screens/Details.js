import React from "react";
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../assets/colors/colors";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const height = Dimensions.get("window").height;

const Details = ({ route, navigation }) => {
  const { item } = route.params;
  return (
    <View style={styles.container}>
      <ImageBackground source={item.imageBig} style={styles.backgroundImage}>
        <TouchableOpacity>
          <MaterialCommunityIcons
            style={styles.backIcon}
            name="chevron-left"
            size={30}
            color={colors.white}
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
        <View style={styles.titleWrapper}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <View style={styles.locationWrapper}>
            <MaterialCommunityIcons
              name="map-marker-outline"
              size={20}
              color={colors.white}
            />
            <Text style={styles.locationText}>{item.location}</Text>
          </View>
        </View>
      </ImageBackground>
      

      <View style={styles.descriptionWrapper}>
        <View style={styles.heartWrapper}>
          <MaterialCommunityIcons
            name="heart"
            size={25}
            color={colors.orange}
          />
        </View>

        <ScrollView>
          <View style={styles.descriptionTextWrapper}>
            <Text style={styles.descriptionTitle}>Description</Text>
            <Text style={styles.descriptionText}>{item.description}</Text>
          </View>
          <View style={styles.infoWrapper}>
            <View style={styles.infoItem}>
              <Text style={styles.infoTitle}>PRICE</Text>
              <View style={styles.infoTextWrapper}>
                <Text style={styles.infoText}>${item.price}</Text>
                <Text style={styles.infoSubText}>/person</Text>
              </View>
            </View>

            <View style={styles.infoItem}>
              <Text style={styles.infoTitle}>RATING</Text>
              <View style={styles.infoTextWrapper}>
                <Text style={styles.infoText}>${item.rating}</Text>
                <Text style={styles.infoSubText}>/5</Text>
              </View>
            </View>

            <View style={styles.infoItem}>
              <Text style={styles.infoTitle}>DURATION</Text>
              <View style={styles.infoTextWrapper}>
                <Text style={styles.infoText}>${item.duration}</Text>
                <Text style={styles.infoSubText}> /hours</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={styles.buttonWrapper}
            onPress={() => alert("You booked a Trip")}
          >
            <Text style={styles.buttonText}>Book Now</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  backgroundImage: {
    height: height * 0.6,
    justifyContent: "space-between",
  },
  descriptionWrapper: {
    backgroundColor: colors.white,
    flex: 1,
    marginTop: -20,
    borderRadius: 25,
  },

  backIcon: {
    marginLeft: 15,
    marginTop: 40,
  },
  titleWrapper: {
    marginHorizontal: 20,
    marginBottom: 40,
  },
  itemTitle: {
    fontWeight: "100",
    fontSize: 26,
    color: colors.white,
  },
  locationWrapper: {
    flexDirection: "row",
  },
  locationText: {
    color: colors.white,
    alignItems: "center",
  },
  heartWrapper: {
    position: "absolute",
    right: 40,
    top: -20,
    width: 55,
    height: 55,
    backgroundColor: colors.white,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  descriptionTextWrapper: {
    marginTop: 30,
    marginHorizontal: 20,
  },
  descriptionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  descriptionText: {
    marginTop: 20,
    color: colors.darkGray,
    height: 85,
  },
  infoWrapper: {
    flexDirection: "row",
    margin: 20,
    marginTop: 5,
    justifyContent: "space-between",
  },
  infoItem: {},
  infoTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: colors.gray,
  },
  infoTextWrapper: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    marginTop: 5,
  },
  infoText: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.orange,
  },
  infoSubText: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.gray,
  },
  buttonWrapper: {
    marginHorizontal: 20,
    marginTop: 10,
    backgroundColor: colors.orange,
    alignItems: "center",
    paddingVertical: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.white,
  },
});
