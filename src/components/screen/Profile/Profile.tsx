import type { FC } from 'react';
import React, { useCallback, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { SceneMap } from 'react-native-tab-view';
import { CollapsibleHeaderTabView } from 'react-native-tab-view-collapsible-header';

import { useGetProfile } from '~/components/screen/Profile/useGetProfile';
import { AntDesignIcon } from '~/components/ui/Icon';
import { Image } from '~/components/ui/Image';
import { TabBar } from '~/components/ui/TabBar';
import { Text } from '~/components/ui/Text';
import { TouchableOpacity, View } from '~/components/ui/View';
import { useTabView } from '~/hooks/useTabView';
import type { ProfileScreenProps as Props } from '~/types';

import { CombatHistory } from './CombatHistory';
import { PodiumHistory } from './PodiumHistory';

export type ProfileScreenProps = Props<'ProfileScreen'>;

const routes = [
  { key: 'podium', title: '入賞回数' },
  { key: 'combat', title: '戦歴' },
];

export const Profile: FC<ProfileScreenProps> = (props) => {
  const { userInfo, shoesInfo } = useGetProfile();
  const { layout, index, onIndexChange } = useTabView();

  const renderScene = useMemo(() => {
    return SceneMap({
      podium: () => <PodiumHistory {...props} />,
      combat: () => <CombatHistory {...props} />,
    });
  }, [props]);

  const onProfileEditNavigate = useCallback(() => {
    props.navigation.navigate('ProfileEditScreen');
  }, []);

  const onAvatarEditNavigate = useCallback(() => {
    props.navigation.navigate('AvatarEditScreen');
  }, []);

  return (
    <CollapsibleHeaderTabView
      renderTabBar={TabBar}
      navigationState={{ index, routes }}
      renderScrollHeader={() => {
        return (
          <>
            <View style={style.user_info_box} bg="bg1">
              <View style={style.align_horizontal}>
                <Image source={{ uri: userInfo.avatar }} border="border1" style={style.user_icon} />

                <TouchableOpacity
                  activeOpacity={1}
                  style={style.icon_edit_button}
                  border="border0"
                  onPress={onAvatarEditNavigate}
                >
                  <AntDesignIcon name="pluscircle" size={26} icon="accent" />
                </TouchableOpacity>

                <View style={style.user_info_right}>
                  <Text style={style.total_ranking_title} color="color2">
                    総合ランキング
                  </Text>

                  <View style={style.align_horizontal}>
                    <View style={style.user_ranking_box}>
                      <Text style={style.user_ranking_result}>10</Text>

                      <Text style={style.user_ranking_result_space}>位</Text>

                      <Text style={style.user_age_hierarchy} color="color2">
                        20歳〜
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              <View style={[style.align_horizontal, style.user_name_box]}>
                <Text style={style.user_name}>{userInfo.name}</Text>
                <Text style={style.edit_button} onPress={onProfileEditNavigate} color="accent">
                  編集する
                </Text>
              </View>

              <Text style={style.user_profile}>{userInfo.profile}</Text>

              {shoesInfo ? (
                <Text style={style.user_shoes} color="color2">
                  {`👟 ${shoesInfo.brand} ${shoesInfo.shoes}`}
                </Text>
              ) : null}
            </View>
          </>
        );
      }}
      onIndexChange={onIndexChange}
      initialLayout={{ width: layout.width }}
      renderScene={renderScene}
      scrollEnabled={false}
      isRefreshing={false}
    />
  );
};

const style = StyleSheet.create({
  user_info_box: {
    paddingHorizontal: '6%',
  },
  user_icon: {
    width: 110,
    height: 110,
    borderRadius: 999,
    // borderWidth: 1.25,
  },
  icon_edit_button: {
    position: 'absolute',
    top: 80,
    left: 80,
    borderWidth: 3,
    borderRadius: 999,
  },
  align_horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  user_info_right: {
    flex: 1,
    marginTop: '5%',
    marginLeft: '10%',
  },
  total_ranking_title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: '5%',
  },
  user_ranking_box: {
    width: 'auto',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  user_ranking_result: {
    width: 'auto',
    fontSize: 46,
    fontWeight: '800',
    fontStyle: 'italic',
  },
  user_ranking_result_space: {
    width: 'auto',
    marginLeft: 4,
    fontSize: 22,
    marginBottom: 10,
  },
  user_age_hierarchy: {
    width: 'auto',
    marginLeft: '10%',
    marginBottom: 8,
    fontSize: 18,
    fontWeight: '600',
  },
  user_name_box: {
    marginVertical: '4%',
    alignItems: 'flex-end',
  },
  user_name: {
    width: 'auto',
    fontSize: 24,
    fontWeight: '600',
  },
  edit_button: {
    width: 'auto',
    marginLeft: 10,
    fontWeight: '600',
  },
  user_profile: {
    lineHeight: 20,
  },
  user_shoes: {
    marginTop: '2%',
  },
});
