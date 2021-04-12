import React from 'react';
import DetailsFruits from '../../components/DetailsFruits';

const Detail = ({route}) => {
  const {item} = route.params;
  return (
    <DetailsFruits
      photo={item.photo}
      name={item.name}
      calories={item.calories}
      protein={item.protein}
      carbohydrates={item.carbohydrates}
      fiber={item.fiber}
      blubber={item.blubber}
      portion={item.portion}
    />
  );
};

export default Detail;
