import useAxios from 'axios-hooks';
export const useHero = (heroId) => {
  const [{data: hero, loading: isLoadingHero}] = useAxios(`/${heroId}`);
  return {
    hero,
    isLoadingHero,
  };
};
