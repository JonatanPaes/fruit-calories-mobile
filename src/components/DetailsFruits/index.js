import React from 'react';
import {
  ContainerDetais,
  ContainerCard,
  ImageFruit,
  TextTitle,
  ContainerInformation,
  TextInformation,
} from './styles';

export default function DetailsFruits({
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
      <ContainerDetais>
        <ContainerCard>
          <TextTitle>{name}</TextTitle>
          <ImageFruit
            source={{
              uri: photo,
            }}
          />
          <ContainerInformation>
            <TextInformation>Calorias: {calories}</TextInformation>
            <TextInformation>Proteína: {protein}</TextInformation>
            <TextInformation>Carboidratos: {carbohydrates}</TextInformation>
            <TextInformation>Fibra: {fiber}</TextInformation>
            <TextInformation>Gordura: {blubber}</TextInformation>
            <TextInformation>Porção: {portion}</TextInformation>
          </ContainerInformation>
        </ContainerCard>
      </ContainerDetais>
    </>
  );
}
