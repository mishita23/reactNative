import { StyleSheet } from "react-native";

const cardStyles = StyleSheet.create({
  card: {
    backgroundColor: '#1f2233',
    borderRadius: 18,
    padding: 16,
    marginBottom: 18,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 6,
  },
   headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },


  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color :"#2bb4e6ff",
    marginBottom: 14,
  },

  avatarWrapper: {
    alignItems: 'center',
    marginBottom: 16,
    padding : 5
  },

  avatar: {
    width: 84,
    height: 84,
    borderRadius: 42,
    borderWidth: 1,
    borderColor: "#2bb4e6ff",
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    justifyContent : "space-between"
  },

  emergencyBox: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  callButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#2ecc71',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 22,
  },

  callIcon: {
    width: 20,
    height: 20,
    tintColor: '#fff',
  },
  inputText : {
    color : "#fff",
  },
  labelText : {
    color :"#3acbffff",
  },
  gridItem: {
  width: '48%',
},
});


export default cardStyles