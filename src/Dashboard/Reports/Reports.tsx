import React from 'react';
import {
  StyleSheet,
} from 'react-native';
// @ts-ignore
import { PrimaryView } from '../../common/components/PrimaryView/PrimaryView';
import { useSelector } from 'react-redux';
import { LoadingIndicator } from '../../common/components';
import { storeType } from '../../common/store/types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export const Reports = () => {

  const loading = useSelector((store: storeType) => store.loader.loading);

  return (
    <PrimaryView>
      <LoadingIndicator loading={loading} />
    </PrimaryView>
  );
};
