import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Animated } from 'react-native';

import styles from './styles/ListChuyen.style'

class ProgressBar extends Component {
    componentWillMount() {
        this.animation = new Animated.Value(this.props.progress);
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.progress !== this.props.progress) {
            Animated.timing(this.animation, {
                toValue: this.props.progress,
                duration: this.props.duration
            }).start();
        }
    }
    render() {
        const {
            height,
            borderRadius,
            barColor,
            fillColor,
            row,
            countGheMax,
          } = this.props;
        const widthInterpolated = this.animation.interpolate({
            inputRange: [0, countGheMax],
            outputRange: ["0", ""],
            extrapolate: "clamp"
        });
        return (
            <View style={[{ flexDirection: 'row', height }, row ? { flex: 1 } : undefined]}>
                <View style={{ flex: 1, borderRadius }}>
                    <View style={[StyleSheet.absoluteFill, { backgroundColor: fillColor }]} />
                    <Animated.View
                        style={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            bottom: 0,
                            width: widthInterpolated,
                            backgroundColor: barColor
                        }} />
                    <View style={{ position: 'absolute', top: 0, bottom: 0, left: '20%' }}>
                        <Text style={{ fontSize: 15, color: '#fff', fontWeight: 100 }}>
                            {this.props.progress < countGheMax ? `Đã đặt ${this.props.progress}` : `Hết chỗ`}
                        </Text>
                    </View>

                </View>
            </View>
        );

    }
}
ProgressBar.defaultProps = {
    height: 23,
    borderRadius: 7,
    barColor: '#1E9DFB',
    fillColor: 'rgba(128,204,209,0.5)',
    duration: 100
}


class ListChuyenXe extends Component {

    componentDidMount() {
        // load state tu socket len day vao progress bar
    }
    render() {
        const { listchuyenxe } = this.props;
        return (
            <View style={styles.root}>
                <View style={styles.titleConatiner}>
                    <Text style={styles.title}>Chuyen xe kha dung</Text>
                </View>
                <View style={styles.contentContainer}>
                    <ScrollView>
                        {listchuyenxe.map((chuyenxe, i) => (
                            <View key={i} style={styles.chuyenxeCard}>
                                <View style={styles.chuyenxeCardTopContainer}>
                                    <Text style={styles.chuyenxeCardTitle}>
                                        {chuyenxe.tenchuyen}
                                    </Text>
                                </View>
                                //
                                <View style={styles.CardContentContainer}>
                                    <View style={styles.ChuyenxeInfo}>
                                        <View style={styles.ChuyenxeInfoText}>
                                            <Text style={styles.textContent}>Thoi gian: {chuyenxe.thoigian}</Text>
                                            <Text style={styles.textContent}>Lo Trinh: {chuyenxe.lotrinh}</Text>
                                        </View>
                                        //
                                        <View style={styles.buttonContainer}>
                                            <TouchableOpacity disabled={chuyenxe.soghehientai < chuyenxe.soghe ? false : true}
                                            style={styles.button}>
                                                <Text style={styles.textButton}>Dat Ve</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    //
                                    <View style={styles.progressContainer}>
                                        <ProgressBar
                                            row
                                            countGheMax={chuyenxe.soghe}
                                            progress={this.state.soghehientai}
                                            duration={200}
                                        />
                                    </View>

                                </View>
                            </View>
                        ))
                        }
                    </ScrollView>
                </View>
            </View>
        )
    }
}
export default ListChuyenXe;
