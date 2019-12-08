import React from "react";
import { shallow } from "enzyme";
import MapIconButton from "../MapIconButton";

describe("MapIconButton", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<MapIconButton />);
    expect(wrapper).toMatchSnapshot();
  });
});
