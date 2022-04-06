import styled from 'styled-components';
import {string} from 'prop-types';
import {Box} from 'reflexbox';
import {Card} from '../../components/common/Card';
import {Caption} from '../../components/common/Caption';
import {Description} from '../../components/common/Description';
import {HeadingTwo} from '../../components/common/HeadingTwo';
import {ButtonLink} from '../../components/common/ButtonLink';
import {
  BorderRadiuses,
  Colors,
  Shadows,
  Spaces,
} from '../../shared/DesignTokens';
const InformationGrid = styled(Box)`
	display: grid;
	grid-template-columns: 1fr 70px;
	gap: ${Spaces.TWO};
`;
const HeroAvatar = styled.div`
	width: 100%;
	height: 70px;
	box-shadow: ${Shadows.ONE};
	border-radius: ${BorderRadiuses.ONE};
	background-image: url('${(props) => props.src}');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
`;
export const HeroCard = ({secretIdentity, name, picture, universe, id}) =>
  <Card>
    <InformationGrid p={Spaces.TWO} mb={Spaces.ONE_HALF}>
      <Box>
        <Caption as="div" color={Colors.GRAY_600}>
          {secretIdentity}
        </Caption>
        <Box mb={Spaces.ONE}>
          <HeadingTwo>{name}</HeadingTwo>
        </Box>
        <Description as="div" color={Colors.GRAY_700}>
          <strong>Universo:</strong> {universe}
        </Description>
        <Description as="div" color={Colors.GRAY_700}>
          <strong>Nota atual:</strong> -
        </Description>
      </Box>
      <HeroAvatar src={picture} />
    </InformationGrid>
    <Box width="87px">
      <ButtonLink to={`/detalhes/${id}`}>Ver Mais</ButtonLink>
    </Box>
  </Card>;

HeroCard.propTypes = {
  secretIdentity: string,
  name: string,
  picture: string,
  universe: string,
  id: string,
};
