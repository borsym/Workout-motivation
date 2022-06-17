import { Container } from './Container';
import { Pane } from './Pane';
export const SplitScreen = ({ children }) => {
  const [navbar, left, rightTop, rightBot, footer] = children;
  return (
    <Container>
      <Pane styleling="col-start-1 col-end-4 bg-black">{navbar}</Pane>
      <Pane styleling="row-start-2 row-span-2 col-start-1 col-end-3 bg-blue-500">
        {left}
      </Pane>
      <Pane styleling="bg-gray-600">{rightTop}</Pane>
      <Pane styleling="bg-yellow-500">{rightBot}</Pane>
      <Pane styleling="col-start-1 col-span-3 bg-green-100">{footer}</Pane>
    </Container>
  );
};
