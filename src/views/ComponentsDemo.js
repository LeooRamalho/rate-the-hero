import {Header} from '../components/common/Header';
import {SearchField} from '../components/common/SearchField';
import {Button} from '../components/common/Button';
import {ButtonLink} from '../components/common/ButtonLink';
import {Card} from '../components/common/Card';
import {HeadingOne} from '../components/common/HeadingOne';
import {HeadingTwo} from '../components/common/HeadingTwo';
import {Description} from '../components/common/Description';
import {Caption} from '../components/common/Caption';
import {Subtitle} from '../components/common/Subtitle';
import {SelectField, Option} from '../components/common/SelectField';
import {Alert} from '../components/common/Alert';

export const ComponentsDemo = () =>
  <>
    <Header />
    <SearchField placeholder="Digite um nome de herói ou heroína" />
    <Button ghost={true}>Buscar</Button>
    <Card>
      <HeadingOne>Heading One</HeadingOne>
      <HeadingTwo>Heading Two</HeadingTwo>
      <div>
        <Subtitle>Subtitle</Subtitle>
      </div>
      <Description>Description</Description>
      <div>
        <Caption>Caption</Caption>
      </div>
    </Card>
    <ButtonLink>Ver mais</ButtonLink>
    <SelectField placeholder="Nota">
      <Option>Opção 1</Option>
    </SelectField>
    <Alert type="info">Nenhum herói ou heroína encontrado</Alert>
    <Alert type="success">Sua avaliação foi atribuída com sucesso!</Alert>
    <Alert type="error">Ocorreu um erro ao avaliar !</Alert>
  </>;

