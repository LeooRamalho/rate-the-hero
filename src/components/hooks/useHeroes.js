import {useEffect} from 'react';
import useAxios from 'axios-hooks';

export const useHeroes = (searchValue) => {
  const [{data: heroes, loading: isLoadingHeroes}, updateHeroes] = useAxios(
      `/search/${searchValue}`,
      {manual: true},
  );
  useEffect(() => {
    updateHeroes();
  }, []);
  return {heroes, isLoadingHeroes, updateHeroes};
};
