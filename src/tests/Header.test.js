import { render, screen, cleanup } from '@testing-library/react';
import Header from '../components/header/Header';
import renderer from 'react-test-renderer';

afterEach(() => {
    cleanup(); 
})

describe("Header Component" ,() => {

    test('renders Table Heading', () => {
        render(<Header />);
        const headerElement = screen.getByTestId("header_text");
        expect(headerElement).toBeInTheDocument();
        expect(headerElement).toBeInTheDocument();
    });

    test('Table Heading Snapshot', () => {
        const HeaderComponent = renderer.create(<Header />);
        let tree = HeaderComponent.toJSON();
        expect(tree).toMatchSnapshot();
    });

});