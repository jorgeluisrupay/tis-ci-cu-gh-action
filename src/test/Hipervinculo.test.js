import renderer from 'react-test-renderer';
import { Hipervinculos } from '../components/Hipervinculos';

it('changes the class when hovered', () => {
  const component = renderer.create(
    <Hipervinculos page="http://www.facebook.com">Facebook</Hipervinculos>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  renderer.act(() => {
    tree.props.onMouseEnter();
  });
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  renderer.act(() => {
    tree.props.onMouseLeave();
  });
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});