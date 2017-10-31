import React from 'react';
import { View, Text, Picker } from 'react-native';

const fakeData = [
  { chuyenxeID: 1, value: 'Ha Noi, Hai Phong' },
  { chuyenxeID: 2, value: 'Hai Phong, Ha Noi' },
  { chuyenxeID: 3, value: 'Thai binh' },
  { chuyenxeID: 4, value: 'Ha Noi, Thai Binh' },
  { chuyenxeID: 5, value: 'Ha Noi, Hai Phong' },
];
let selectedID = 1;
const DropdownListChuyenXe = () => (
  <View style={styles.root}>
    <Picker
      selectedValue={selectedID}
      onValueChange={(itemValue, itemIndex) => {
        selectedID = itemIndex;
        console.log(selectedID);
      }}
    >
      {fakeData.map((faker, i) => (
        <Picker.itemIndex label={faker.value} value={faker.chuyenxeID} />
      ))}
    </Picker>
  </View>
);
export default DropdownListChuyenXe;
