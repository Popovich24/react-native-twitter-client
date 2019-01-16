import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  trend: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    flexDirection: 'row',
    padding: 10,

  },
  trendText: {
    fontSize: 17,
    marginBottom: 5
  },
  trendTextView: {
    flex: 0.9,
    paddingLeft: 10,
  },
  trendNumber: {
    fontSize: 18,
    color: 'grey'
  },
  trendNumberView: {
    flex: 0.1,
    paddingLeft: 7,
  },
  volumeText: {
    fontSize: 15,
    color: 'grey',
  }
});
