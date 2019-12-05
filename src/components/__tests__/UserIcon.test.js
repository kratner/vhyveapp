import React from "react";
import { shallow } from "enzyme";
import UserIcon from "../UserIcon";

describe("UserIcon", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<UserIcon />);
    expect(wrapper).toMatchSnapshot();
  });
});
