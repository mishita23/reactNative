export const formatHealthDataForShare = (data :any) => {
  return `
*Health Profile*

*Basic Information*
• Name: ${data.basic.name}
• Age: ${data.basic.age}
• Gender: ${data.basic.gender}
• Blood Group: ${data.basic.bloodGroup}
• Emergency Contact: ${data.basic.emergencyContact}

*Vitals*
• Height: ${data.vitals.height}
• Weight: ${data.vitals.weight}
• BP: ${data.vitals.bp}
• Heart Rate: ${data.vitals.heartRate}

*Medical Information*
• Allergies: ${data.medical.allergies}
• Conditions: ${data.medical.conditions}
• Medications: ${data.medical.medications}

*Lifestyle*
• Smoking: ${data.lifestyle.smoking}
• Alcohol: ${data.lifestyle.alcohol}
• Exercise: ${data.lifestyle.exercise}
• Diet: ${data.lifestyle.diet}
`;
};
