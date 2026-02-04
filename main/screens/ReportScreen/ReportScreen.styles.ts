import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    padding: 16,
  },

  uploadCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    elevation: 2,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#212121',
  },

  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
    backgroundColor: '#FAFAFA',
  },

  filePicker: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#1976D2',
    marginBottom: 12,
    gap: 8,
  },

  filePickerText: {
    color: '#1976D2',
    fontWeight: '500',
  },

  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1976D2',
    paddingVertical: 12,
    borderRadius: 8,
    gap: 8,
  },

  uploadButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },

  reportCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 1,
    alignItems: 'center',
  },

  reportTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#212121',
  },

  fileName: {
    fontSize: 12,
    color: '#757575',
    marginTop: 2,
  },

  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
  },

  tag: {
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginRight: 6,
    marginBottom: 6,
  },

  tagText: {
    fontSize: 12,
    color: '#1565C0',
  },

  emptyText: {
    textAlign: 'center',
    marginTop: 30,
    color: '#9E9E9E',
  },
  icons : {
    height : 20,
    width : 20
  }
});

export default styles