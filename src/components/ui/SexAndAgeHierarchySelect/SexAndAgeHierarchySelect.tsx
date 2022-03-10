/* eslint-disable react/jsx-handler-names */
import type { FC, Reducer } from 'react';
import React, { useReducer } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { Button } from '~/components/ui/Button';
import { View } from '~/components/ui/View';

const sex_button_group = [
  { index: 1, label: '男性' },
  { index: 2, label: '女性' },
];

const age_button_group = [
  { index: 1, label: '〜19歳' },
  { index: 2, label: '20歳〜' },
  { index: 3, label: '25歳〜' },
  { index: 4, label: '30歳〜' },
  { index: 5, label: '35歳〜' },
  { index: 6, label: '40歳〜' },
  { index: 7, label: '45歳〜' },
  { index: 8, label: '50歳〜' },
  { index: 9, label: '55歳〜' },
  { index: 10, label: '60歳〜' },
  { index: 11, label: '65歳〜' },
  { index: 12, label: '70歳〜' },
  { index: 13, label: '75歳〜' },
];

const initialState = {
  sex: 1,
  ageHierarchy: 1,
};

type Store = typeof initialState;
type Action =
  | { type: 'SELECT_SEX'; value: number }
  | { type: 'SELECT_AGE_HIERARCHY'; value: number };

const reducerFunc: Reducer<Store, Action> = (state, action) => {
  switch (action.type) {
    case 'SELECT_SEX':
      return { ...state, sex: action.value };
    case 'SELECT_AGE_HIERARCHY':
      return { ...state, ageHierarchy: action.value };
    default:
      return state;
  }
};

export const SexAndAgeHierarchySelect: FC = () => {
  const [filter, dispatch] = useReducer(reducerFunc, initialState);

  return (
    <View>
      <View style={style.sex_button_group}>
        {sex_button_group.map(({ index, label }) => (
          <Button
            key={index}
            label={label}
            isBorder
            bg={filter.sex === index ? 'primary' : 'bg2'}
            color={filter.sex === index ? 'white' : 'color1'}
            textStyle={style.sex_button_text}
            viewStyle={style.sex_button_bg}
            outlineStyle={style.sex_button_outline}
            onPress={() => dispatch({ type: 'SELECT_SEX', value: index })}
          />
        ))}
      </View>

      <FlatList
        data={age_button_group}
        style={style.age_button_group}
        scrollsToTop
        keyExtractor={(item) => String(item.index)}
        horizontal={true}
        renderItem={({ item: { index, label } }) => {
          return (
            <Button
              key={index}
              label={label}
              isBorder
              bg={filter.ageHierarchy === index ? 'primary' : 'bg2'}
              color={filter.ageHierarchy === index ? 'white' : 'color1'}
              textStyle={style.age_button_text}
              viewStyle={style.age_button_bg}
              outlineStyle={style.age_button_outline}
              onPress={() => dispatch({ type: 'SELECT_AGE_HIERARCHY', value: index })}
            />
          );
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  sex_button_group: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '2%',
    marginBottom: '1%',
  },
  sex_button_outline: {
    width: '48%',
  },
  sex_button_bg: {
    paddingVertical: 8,
  },
  sex_button_text: {
    fontSize: 14,
  },

  age_button_group: {
    marginTop: '1%',
    marginBottom: '4%',
  },
  age_button_outline: {
    width: 100,
    marginRight: 15,
  },
  age_button_bg: {
    paddingVertical: 6,
  },
  age_button_text: {
    fontSize: 14,
  },
});
