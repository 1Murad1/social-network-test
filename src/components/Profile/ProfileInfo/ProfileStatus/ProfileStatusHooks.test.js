import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatusHooks Component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="social network" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("social network");
    });
    test("after creation <span> should be displayed", () => {
        const component = create(<ProfileStatus status="social network" />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.length).not.toBeNull();
    });
    test("after creation <input> shouldn't be displayed", () => {
        const component = create(<ProfileStatus status="social network" />);
        const root = component.root;
        expect(() => {
            let input = root.findByType("input");
        }).toThrow();
    });
    test("after creation <span> should contains corrects status", () => {
        const component = create(<ProfileStatus status="social network" />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe("social network");
    });
    test("input should be displayed in editMode  instead of span", () => {
        const component = create(<ProfileStatus status="social network" />);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input")
        expect(input.props.value).toBe("social network");
    });
    test("span shouldn't be displayed after doubleClick span", () => {
        const component = create(<ProfileStatus status="social network" />);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        expect(() => {
            let span = root.findByType("span");
        }).toThrow();
    });
    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="social network" updateUserStatus={mockCallback} />);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1)
    });
});