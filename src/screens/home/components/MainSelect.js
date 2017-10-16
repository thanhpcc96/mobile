// @flow
import React from 'react';
import { View, TouchableOpacity, Text, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles/MainSelect.style';

const MainSelect = () => (
  <View style={styles.root}>
    <ScrollView>
      <TouchableOpacity style={styles.selectItem}>
        <View style={styles.iconFirt}>
          <MaterialCommunityIcons
            color={'#3E3E3E'}
            name="gesture-tap"
            size={35}
          />
        </View>
        <View style={styles.textContanier}>
          <Text style={styles.textStyleCenter}>Đặt giữ chỗ ngay</Text>
        </View>
        <View style={styles.badgeLabelContainer}>
          <View style={styles.badgeLabel}>
            <Text style={styles.badgeLabelText}>18</Text>
          </View>
        </View>
        <View style={styles.iconArow}>
          <Ionicons color={'#3E3E3E'} name="ios-arrow-forward" size={20} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.selectItem}>
        <View style={styles.iconFirt}>
          <MaterialCommunityIcons color={'#3E3E3E'} name="barcode-scan" size={35} />
        </View>
        <View style={styles.textContanier}>
          <Text style={styles.textStyleCenter}>Vé còn hiệu lực </Text>
        </View>
        <View style={styles.badgeLabelContainer}>
          <View style={styles.badgeLabel}>
            <Text style={styles.badgeLabelText}>3</Text>
          </View>
        </View>
        <View style={styles.iconArow}>
          <Ionicons color={'#3E3E3E'} name="ios-arrow-forward" size={20} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.selectItem}>
        <View style={styles.iconFirt}>
          <Ionicons color={'#3E3E3E'} name="md-person" size={35} />
        </View>
        <View style={styles.textContanier}>
          <Text style={styles.textStyleCenter}> Thông tin cá nhân</Text>
        </View>
        <View style={styles.badgeLabelContainer} />
        <View style={styles.iconArow}>
          <Ionicons color={'#3E3E3E'} name="ios-arrow-forward" size={20} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.selectItem}>
        <View style={styles.iconFirt}>
          <Ionicons color={'#3E3E3E'} name="ios-list-box-outline" size={35} />
        </View>
        <View style={styles.textContanier}>
          <Text style={styles.textStyleCenter}> Lịch sử giao dịch</Text>
        </View>
        <View style={styles.badgeLabelContainer}>
          <View style={styles.badgeLabel}>
            <Text style={styles.badgeLabelText}>9</Text>
          </View>
        </View>
        <View style={styles.iconArow}>
          <Ionicons color={'#3E3E3E'} name="ios-arrow-forward" size={20} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.selectItem}>
        <View style={styles.iconFirt}>
          <Ionicons color={'#3E3E3E'} name="ios-megaphone" size={35} />
        </View>
        <View style={styles.textContanier}>
          <Text style={styles.textStyleCenter}>Khuyến mại cho bạn</Text>
        </View>
        <View style={styles.badgeLabelContainer}>
          <View style={styles.badgeLabel}>
            <Text style={styles.badgeLabelText}>0</Text>
          </View>
        </View>
        <View style={styles.iconArow}>
          <Ionicons color={'#3E3E3E'} name="ios-arrow-forward" size={20} />
        </View>
      </TouchableOpacity>
    </ScrollView>
  </View>
);
export default MainSelect;
