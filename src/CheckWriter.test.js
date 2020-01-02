import React from "react";
import CheckWriter from "./CheckWriter";
import { shallow } from "enzyme";

describe("checkwriter component", () => {
    test("displays the word value", () => {
        const wrapper = shallow(<CheckWriter />);
        wrapper.setState({ inputvalue: 101 });
        wrapper.find("button.word").simulate("click");
        expect(wrapper.state().wordvalue).toEqual("one Hundred andone         only");
      });

      test("displays the word value", () => {
        const wrapper = shallow(<CheckWriter />);
        wrapper.setState({ inputvalue: 1003 });
        wrapper.find("button.word").simulate("click");
        expect(wrapper.state().wordvalue).toEqual("one Thousand andthree         only");
      });

      test("displays the word value", () => {
        const wrapper = shallow(<CheckWriter />);
        wrapper.setState({ inputvalue: 1000006 });
        wrapper.find("button.word").simulate("click");
        expect(wrapper.state().wordvalue).toEqual("ten lakh andsix         only");
      });

      
      test("displays the word value", () => {
        const wrapper = shallow(<CheckWriter />);
        wrapper.setState({ inputvalue: 22 });
        wrapper.find("button.word").simulate("click");
        expect(wrapper.state().wordvalue).toEqual("twenty two       only");
      });

      test("displays the word value", () => {
        const wrapper = shallow(<CheckWriter />);
        wrapper.setState({ inputvalue: 222.8 });
        wrapper.find("button.word").simulate("click");
        expect(wrapper.state().wordvalue).toEqual("two Hundred andtwenty two        and8/100");
      });
      test("displays the word value", () => {
        const wrapper = shallow(<CheckWriter />);
        wrapper.setState({ inputvalue: 2 });
        wrapper.find("button.word").simulate("click");
        expect(wrapper.state().wordvalue).toEqual("two        only");
      });
   });
   
