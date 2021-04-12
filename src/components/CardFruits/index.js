import React from 'react';
import {
  ComponentTouchableOpacity,
  ContainerInformationFruits,
  ContainerInfo,
  TextTitle,
  TextInformation,
  ImageFruits,
} from './styles';

export default function CardFruits({
  onPress,
  photo,
  name,
  calories,
  protein,
  carbohydrates,
  fiber,
  blubber,
  portion,
}) {
  return (
    <>
      <ComponentTouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        underlayColor="#DDDDDD">
        <ContainerInformationFruits>
          <ImageFruits
            source={{
              uri: photo,
            }}
          />
          <ContainerInfo>
            <TextTitle>{name}</TextTitle>
            <TextInformation>Calorias: {calories}</TextInformation>
            <TextInformation>Proteína: {protein} </TextInformation>
            <TextInformation>Carboidratos: {carbohydrates}</TextInformation>
            <TextInformation>Fibra: {fiber}</TextInformation>
            <TextInformation>Gordura: {blubber}</TextInformation>
            <TextInformation>Porção: {portion}</TextInformation>
          </ContainerInfo>
        </ContainerInformationFruits>
      </ComponentTouchableOpacity>
    </>
  );
}
