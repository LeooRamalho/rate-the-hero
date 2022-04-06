import React from 'react';
import styled from 'styled-components';
import {Flex, Box} from 'reflexbox';
import {Button} from '../components/common/Button';
import {SearchField} from '../components/common/SearchField';
import {HeroCard} from '../components/HeroCard';
import {Spaces} from '../shared/DesignTokens';

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
  const initialState = [
    {
      secretIdentity: 'Terry McGinnis',
      name: 'Batman',
      picture:
				'https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg',
      universe: 'DC Comics',
    },
    {
      secretIdentity: 'Bruce Wayne',
      name: 'Batman',
      picture:
				'https://www.superherodb.com/pictures2/portraits/10/100/639.jpg',
      universe: 'DC Comics',
    },
    {
      secretIdentity: 'Dick Grayson',
      name: 'Batman II',
      picture:
				'https://www.superherodb.com/pictures2/portraits/10/100/1496.jpg',
      universe: 'DC Comics',
    },
  ];
  const [heroes] = React.useState(initialState);

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
          <SearchField placeholder="Digite um nome de herói ou heroína" />
        </Box>
        <Box ml={Spaces.TWO}>
          <Button>Buscar</Button>
        </Box>
      </Flex>
      <HeroesGrid
        px={[Spaces.ONE, Spaces.TWO]}
        pb={[Spaces.ONE, Spaces.TWO]}
      >
        {heroes.map((hero, i) => (
          <HeroCard
            key={i}
            secretIdentity={hero.secretIdentity}
            name={hero.name}
            picture={hero.picture}
            universe={hero.universe}
          />
        ))}
      </HeroesGrid>
    </>
  );
};
