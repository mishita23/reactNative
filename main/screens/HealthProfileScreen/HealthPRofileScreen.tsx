import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Share,
} from 'react-native';
import HealthBasic from '../../components/HealthBasic/HealthBasic';
import VitalsCard from '../../components/HeathComponents/VitalsCard';
import MedicalInfo from '../../components/HeathComponents/MedicalInfo';
import LifestyleInfo from '../../components/HeathComponents/LifestyleInfo';

import RNPrint from 'react-native-print';
import { formatHealthDataForShare } from '../../utils/health';
import { HealthStackParamList } from '../../navigation/HealthStackNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

type NavigationProp = NativeStackNavigationProp<
  HealthStackParamList,
  'HealthHome'
>;
const HealthProfileScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [editMode, setEditMode] = useState(false);

  const [healthData, setHealthData] = useState({
    basic: {
      name: 'Mishita Arora',
      age: '21',
      gender: 'Female',
      bloodGroup: 'A+',
      emergencyContact: '+9198XXXXXX21',
    },
    vitals: {
      height: '165 cm',
      weight: '55 kg',
      bp: '110/70',
      heartRate: '72 bpm',
    },
    medical: {
      allergies: 'None',
      conditions: 'None',
      medications: 'None',
    },
    lifestyle: {
      smoking: 'No',
      alcohol: 'Occasionally',
      exercise: '3x/week',
      diet: 'Vegetarian',
    },
  });

  const handleChange = (
    section: keyof typeof healthData,
    key: string,
    value: string,
  ) => {
    setHealthData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value,
      },
    }));
  };

  const handleReportPress = () => {
    navigation.navigate("HealthReports")
  };

  const handleDownload = async () => {
    try {
      const html = `
      <html>
        <head>
          <style>
            body {
              font-family: Arial;
              padding: 20px;
            }
            h1 {
              color: #1186c1;
              text-align: center;
            }
            .card {
              border: 1px solid #ddd;
              border-radius: 8px;
              padding: 12px;
              margin-bottom: 12px;
            }
            .label {
              font-weight: bold;
            }
          </style>
        </head>

        <body>
          <h1>Health Profile</h1>

          <div class="card">
            <p><span class="label">Name:</span> ${healthData.basic.name}</p>
            <p><span class="label">Age:</span> ${healthData.basic.age}</p>
            <p><span class="label">Gender:</span> ${healthData.basic.gender}</p>
            <p><span class="label">Blood Group:</span> ${healthData.basic.bloodGroup}</p>
            <p><span class="label">Emergency:</span> ${healthData.basic.emergencyContact}</p>
          </div>

          <div class="card">
            <p><span class="label">Height:</span> ${healthData.vitals.height}</p>
            <p><span class="label">Weight:</span> ${healthData.vitals.weight}</p>
            <p><span class="label">BP:</span> ${healthData.vitals.bp}</p>
            <p><span class="label">Heart Rate:</span> ${healthData.vitals.heartRate}</p>
          </div>

          <div class="card">
            <p><span class="label">Allergies:</span> ${healthData.medical.allergies}</p>
            <p><span class="label">Conditions:</span> ${healthData.medical.conditions}</p>
            <p><span class="label">Medications:</span> ${healthData.medical.medications}</p>
          </div>

          <div class="card">
            <p><span class="label">Smoking:</span> ${healthData.lifestyle.smoking}</p>
            <p><span class="label">Alcohol:</span> ${healthData.lifestyle.alcohol}</p>
            <p><span class="label">Exercise:</span> ${healthData.lifestyle.exercise}</p>
            <p><span class="label">Diet:</span> ${healthData.lifestyle.diet}</p>
          </div>
        </body>
      </html>
    `;

      await RNPrint.print({
        html,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleShare = async () => {
    await Share.share({
      message: formatHealthDataForShare(healthData),
    });
  };

  return (
    <>
      <View style={styles.actionBar}>
        <TouchableOpacity
          style={styles.primaryBtn}
          onPress={() => setEditMode(prev => !prev)}
        >
          <Text style={styles.btnText}>{editMode ? 'Save' : 'Edit'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.primaryBtn} onPress={handleShare}>
          <Text style={styles.btnText}>Share</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.primaryBtn} onPress={handleReportPress}>
          <Text style={styles.btnText}>Reports</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryBtn} onPress={handleDownload}>
          <Text style={styles.btnText}>Download</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <HealthBasic
          data={healthData.basic}
          editable={editMode}
          onChange={(k: any, v: any) => handleChange('basic', k, v)}
        />

        <VitalsCard
          data={healthData.vitals}
          editable={editMode}
          onChange={(k, v) => handleChange('vitals', k, v)}
        />

        <MedicalInfo
          data={healthData.medical}
          editable={editMode}
          onChange={(k, v) => handleChange('medical', k, v)}
        />

        <LifestyleInfo
          data={healthData.lifestyle}
          editable={editMode}
          onChange={(k, v) => handleChange('lifestyle', k, v)}
        />
      </ScrollView>
    </>
  );
};

export default HealthProfileScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 32,
  },
  actionBar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 12,
    gap: 12,
  },
  primaryBtn: {
    backgroundColor: '#1186c1',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  secondaryBtn: {
    backgroundColor: '#6c757d',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  btnText: {
    color: '#fff',
    fontWeight: '600',
  },
});
