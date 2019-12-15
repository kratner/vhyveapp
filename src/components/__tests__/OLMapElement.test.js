import React from "react";
import { mount } from "enzyme";
import OLMapElement from "../OLMapElement";
var reactapp = document.createElement("div");
document.body.appendChild(reactapp);

describe("OLMapElement", () => {
  it("renders correctly", () => {
    const wrapper = mount(<OLMapElement />, {
      attachTo: reactapp
    });
    expect(wrapper).toMatchSnapshot();
  });
});
