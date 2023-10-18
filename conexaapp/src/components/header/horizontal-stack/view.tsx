import {ViewProps} from 'react-native';
import {Container} from './styles';

export function HStack({children, ...rest}: ViewProps) {
  return <Container {...rest}>{children}</Container>;
}
