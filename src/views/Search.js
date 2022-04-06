import {useState, useEffect} from 'react';
import {useHeroes} from '../components/hooks/useHeroes';

import styled from 'styled-components';
import {Flex, Box} from 'reflexbox';

import {Alert} from '../components/common/Alert';
import {Button} from '../components/common/Button';
import {SearchField} from '../components/common/SearchField';
import {HeroCard} from '../components/HeroCard';
import {Spaces} from '../shared/DesignTokens';
import {HeroCardLoader} from '../components/HeroCard/HeroCardLoader';

const HeroesGrid = styled(Box)`
	display: grid;
	grid-template-columns: 1fr;
	gap: ${Spaces.ONE_HALF};
	@media (min-width: 1024px) {
		grid-template-columns: 1fr 1fr 1fr 1fr;
		gap: ${Spaces.TWO};
	}
`;

export const Search = () => {
  const [search, setSearch] = useState('captain');
  const [doSearch, setDoSearch] = useState(false);
  const {heroes, isLoadingHeroes, updateHeroes} = useHeroes(search);

  useEffect(() => {
    if (doSearch) {
      updateHeroes()
          .then(() => setDoSearch(false));
    }
  }, [doSearch]);

  const handleChangeSearch = ({target: {value}}) => {
    setSearch(value);
  };
  const handleKeyUpSearch = ({key}) => {
    if (key === 'Enter') {
      handleSearch();
    }
  };
  const handleSearch = () => {
    setDoSearch(true);
  };

  return (
    <>
      <Flex
        width={['100%', '600px']}
        mx={[Spaces.None, 'auto']}
        mt={[Spaces.THREE, Spaces.FIVE]}
        px={[Spaces.ONE, Spaces.NONE]}
        mb={[Spaces.TWO, Spaces.FOUR]}
      >
        <Box flexGrow="1">
          <SearchField
            value={search}
            onChange={handleChangeSearch}
            onKeyUp={handleKeyUpSearch}
            placeholder="Digite um nome de herói ou heroína"
          />
        </Box>
        <Box ml={Spaces.TWO}>
          <Button onClick={handleSearch}>Buscar</Button>
        </Box>
      </Flex>
      {!isLoadingHeroes && heroes && heroes.error ?
      (
        <Box px={[Spaces.ONE, Spaces.TWO]} pb={[Spaces.ONE, Spaces.TWO]}>
          <Alert type="info">
            Nenhum registro de herói ou heroína foi encontrado.
          </Alert>
        </Box>
      ) : (
      <HeroesGrid
        px={[Spaces.ONE, Spaces.TWO]}
        pb={[Spaces.ONE, Spaces.TWO]}
      >
        {isLoadingHeroes &&
        <>
          <HeroCardLoader/>
          <HeroCardLoader/>
          <HeroCardLoader/>
          <HeroCardLoader/>
          <HeroCardLoader/>
          <HeroCardLoader/>
          <HeroCardLoader/>
          <HeroCardLoader/>
        </>
        }
        {!isLoadingHeroes && heroes && heroes.results.map((hero) => (
          <HeroCard
            key={hero.id}
            id={hero.id}
            secretIdentity={hero.biography['full-name']}
            name={hero.name}
            picture={hero.image.url}
            universe={hero.biography.publisher}
          />
        ))}
      </HeroesGrid>
      )}
    </>
  );
};
