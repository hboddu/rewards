import { render, screen, cleanup } from '@testing-library/react';
import RewardsTable from '../components/rewardsTable/RewardsTable';
import renderer from 'react-test-renderer';

const data = [
    { id: '1', customer_name: 'AAA', rewardsMonth1: 349, rewardsMonth2: 200, rewardsMonth3: 465 }
]

afterEach(cleanup);

describe("RewardsTable Component" ,() => {

    test('renders Table Content', () => {
        render(<RewardsTable />);
        const customers = screen.getByTestId("customers");
        const name = screen.getByTestId("name");
        const reward = screen.getByTestId("reward");
        const month1 = screen.getByTestId("month1");
        expect(customers).toBeInTheDocument();
        expect(reward).toBeInTheDocument();
        expect(month1).toBeInTheDocument();
        expect(name).toBeInTheDocument();
    });

    test('Table Content Snapshot', () => {
        const TableContent = renderer.create(<RewardsTable />);
        let tree = TableContent.toJSON();
        expect(tree).toMatchSnapshot();
    })

    test('changing Table Content', () => {
        render(<RewardsTable rewardsTableData={data} />);

        const customer_name = screen.getByTestId("customer_name");
        const rewardsMonth1 = screen.getByTestId("rewardsMonth1");
        const rewardsMonth2 = screen.getByTestId("rewardsMonth2");
        const rewardsMonth3 = screen.getByTestId("rewardsMonth3");
        const totalPoints = screen.getByTestId("totalPoints");

        expect(customer_name).toBeInTheDocument(data[0].customer_name);
        expect(rewardsMonth1).toBeInTheDocument(data[0].rewardsMonth1);
        expect(rewardsMonth2).toBeInTheDocument(data[0].rewardsMonth2);
        expect(rewardsMonth3).toBeInTheDocument(data[0].rewardsMonth3);
        expect(totalPoints).toBeInTheDocument(data[0].totalPoints);
    });

});
