import renderer from "react-test-renderer";

import { MonoText } from "~/components/__tests__/StyledText";

it("renders correctly", () => {
  const tree = renderer.create(<MonoText>Snapshot test!</MonoText>).toJSON();

  expect(tree).toMatchSnapshot();
});
