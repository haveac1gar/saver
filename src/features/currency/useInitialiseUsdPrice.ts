import { useCallback, useEffect } from 'react';
import {
  doc,
  onSnapshot,
  serverTimestamp,
  setDoc,
  Timestamp,
  WithFieldValue,
} from 'firebase/firestore';

import { currenciesCollection, db } from '../../core';
import { useSetUsdPrice } from './state';

const ENDPOINT =
  'http://data.fixer.io/api/latest?access_key=f974c9657e67d94695c166da2be68f55&base=EUR&symbols=RUB,USD';

type ApiResponse =
  | {
      success: false;
      error: {
        code: number;
        type: string;
        info: string;
      };
    }
  | {
      success: true;
      base: 'EUR';
      rates: {
        RUB: number;
        USD: number;
      };
    };

const usdPriceName = 'usd',
  usdPriceDoc = doc(db, currenciesCollection, usdPriceName);

type PriceData = {
  name: string;
  value: number;
  lastUpdated: Timestamp;
};
export const useInitialiseUsdPrice = () => {
  const setUsdPrice = useSetUsdPrice();

  const updatePriceData = useCallback(async () => {
    const res = (await fetch(ENDPOINT).then(res => res.json())) as ApiResponse;

    if (!res.success) {
      return;
    }

    const newPriceData: WithFieldValue<PriceData> = {
      name: usdPriceName,
      value: res.rates.RUB / res.rates.USD,
      lastUpdated: serverTimestamp(),
    };

    await setDoc(usdPriceDoc, newPriceData);
    console.log('Price updated successfully');
  }, []);

  useEffect(() => {
    const unsub = onSnapshot(usdPriceDoc, async snap => {
      const now = Date.now();

      if (!snap.exists || !snap.data()) {
        console.log('Snapshot not exists. Creating...');
        await updatePriceData();
        return;
      }

      const data = snap.data() as PriceData;
      const lastUpdated = data.lastUpdated?.toDate().getTime();

      if (!lastUpdated) return;

      setUsdPrice(data.value);

      if (now <= lastUpdated + 1000 * 60 * 60 * 24) {
        console.log('Price update not needed');
        return;
      }

      await updatePriceData();
    });

    return () => {
      unsub();
    };
  }, [updatePriceData, setUsdPrice]);
};
