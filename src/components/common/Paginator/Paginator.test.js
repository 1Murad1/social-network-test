import React from "react";
import Paginator from "./Paginator";
import {create} from "react-test-renderer";

describe("Paginator component tests", () => {
    test("pages of count 11 but should be show 10", () => {
        const component = create(<Paginator totalCount={21} pageSize={3} portionSize={7} />)
        const root = component.root;
        let span = root.findAllByType("span");
        expect(span.length).toBe(7)
    });
    test("if pages count is more then 10 button NEXT should be present", () => {
        const component = create(<Paginator totalCount={11} pageSize={1} portionSize={10} />)
        const root = component.root;
        let button = root.findAllByType("button");
        expect(button.length).toBe(1)
    })
})