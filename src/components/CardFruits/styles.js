import styled from 'styled-components/native';
import {colors} from '../../styles/';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const ComponentTouchableOpacity = styled.TouchableHighlight`
  background-color: #fff;
  padding: 20px;
  margin: 10px 20px;
  border-radius: 15px;
`;

export const ContainerInformationFruits = styled.View`
  padding: 2px;
  width: ${wp('84%')};
  height: ${hp('21%')};
`;

export const ImageFruits = styled.Image`
  width: ${wp('20%')};
  height: ${hp('10%')};
  border-radius: ${hp('50%')};
  display: flex;
`;

export const ContainerInfo = styled.View`
  display: flex;
  justify-content: center;
  padding-left: 110px;
  margin: 0px;
  position: absolute;
`;

export const TextTitle = styled.Text`
  font-size: ${wp('4.8%')};
  font-weight: bold;
  color: ${colors.secondary};
`;

export const TextInformation = styled.Text`
  font-size: ${wp('3.2%')};
  font-weight: bold;
  color: ${colors.information};
  padding-top: 2px;
`;
