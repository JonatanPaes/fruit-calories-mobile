import styled from 'styled-components/native';
import {colors} from '../../styles/';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const ContainerDetais = styled.View`
  background-color: #fff;
  padding: 5px 20px;
  background-color: ${colors.primary};
  width: ${wp('100%')};
  height: ${hp('100%')};
`;

export const ContainerCard = styled.View`
  height: ${hp('90%')};
  background-color: ${colors.font};
  border-radius: 15px;
`;

export const TextTitle = styled.Text`
  font-size: ${wp('6.2%')};
  font-weight: bold;
  display: flex;
  justify-content: center;
  padding: 10px 20px;
  color: ${colors.secondary};
`;

export const ImageFruit = styled.Image`
  width: ${wp('80%')};
  height: ${hp('40%')};
  border-radius: ${hp('50%')};
  display: flex;
  justify-content: center;
  margin: 5px 20px;
`;

export const ContainerInformation = styled.View`
  flex-direction: column;
  padding: 20px;
`;

export const TextInformation = styled.Text`
  font-size: ${wp('4.2%')};
  font-weight: bold;
`;
