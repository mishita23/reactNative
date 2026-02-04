import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
  Image,
} from 'react-native';
import { pick } from '@react-native-documents/picker';
import styles from '../ReportScreen/ReportScreen.styles';

type PickedFile = {
  uri: string;
  name: string;
  size?: number;
  type?: string;
};

type Report = {
  id: string;
  name: string;
  tags: string[];
  file: PickedFile;
};

const ReportScreen = () => {
  const [reportName, setReportName] = useState('');
  const [tags, setTags] = useState('');
  const [pickedFile, setPickedFile] = useState<PickedFile | null>(null);
  const [reports, setReports] = useState<Report[]>([]);
const handlePickFile = async () => {
  try {
    const res = await pick({
      type: ['application/pdf', 'image/*'],
      allowMultiSelection: false,
    });

    const file = res[0];

    setPickedFile({
      uri: file.uri,
      name: file.name ?? 'Unnamed file',
      size: file.size ?? undefined,
      type: file.type  ?? undefined,
    });
  } catch (e: any) {
    if (e?.code === 'DOCUMENT_PICKER_CANCELED') {
      return;
    }

    Alert.alert('Error', 'Unable to pick file');
  }
};

  const handleUploadReport = () => {
    if (!reportName.trim()) {
      Alert.alert('Validation', 'Please enter report name');
      return;
    }

    if (!pickedFile) {
      Alert.alert('Validation', 'Please select a report file');
      return;
    }

    const newReport: Report = {
      id: Date.now().toString(),
      name: reportName.trim(),
      tags: tags
        .split(',')
        .map(tag => tag.trim())
        .filter(Boolean),
      file: pickedFile,
    };

    setReports(prev => [newReport, ...prev]);

    setReportName('');
    setTags('');
    setPickedFile(null);
  };

  const handleDeleteReport = (id: string) => {
    Alert.alert('Delete Report', 'Are you sure you want to delete this report?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () =>
          setReports(prev => prev.filter(report => report.id !== id)),
      },
    ]);
  };

  const renderItem = ({ item }: { item: Report }) => (
    <View style={styles.reportCard}>
      <View style={{ flex: 1 }}>
        <Text style={styles.reportTitle}>{item.name}</Text>
        <Text style={styles.fileName}>{item.file.name}</Text>

        {item.tags.length > 0 && (
          <View style={styles.tagContainer}>
            {item.tags.map((tag, index) => (
              <View key={index} style={styles.tag}>
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            ))}
          </View>
        )}
      </View>

      <TouchableOpacity onPress={() => handleDeleteReport(item.id)}>
          <Image
          source={require('../../assets/icons/bin.png')}
          style={styles.icons}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.uploadCard}>
        <Text style={styles.sectionTitle}>Upload Report</Text>

        <TextInput
          placeholder="Report name"
          value={reportName}
          onChangeText={setReportName}
          style={styles.input}
        />

        <TextInput
          placeholder="Tags (comma separated)"
          value={tags}
          onChangeText={setTags}
          style={styles.input}
        />

        <TouchableOpacity
          style={styles.filePicker}
          onPress={handlePickFile}
        >
       <Image
          source={require('../../assets/icons/choose.png')}
          style={styles.icons}
        />
          <Text style={styles.filePickerText}>
            {pickedFile ? pickedFile.name : 'Choose file'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.uploadButton}
          onPress={handleUploadReport}
        >
           <Image
          source={require('../../assets/icons/upload.png')}
          style={styles.icons}
        />
          <Text style={styles.uploadButtonText}>Upload Report</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Uploaded Reports</Text>

      <FlatList
        data={reports}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No reports uploaded yet</Text>
        }
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

export default ReportScreen;
