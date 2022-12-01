import { render, screen, cleanup } from '@testing-library/react';
import RewardsTableContainer from '../components/rewardsTable/RewardsTableContainer';
import { MockedProvider } from "@apollo/client/testing";
import { GET_AllCustomers } from "../gql/customer";
import renderer from 'react-test-renderer';
import { GraphQLError } from 'graphql';
import { getTotalMonthlyPoints } from '../components/rewardsTable/RewardsTableUtil';

afterEach(() => {
    cleanup(); 
})

describe("TableContainer Component" ,() => {

    test('returns monthly data', () => {
        render(<MockedProvider><RewardsTableContainer /></MockedProvider>);

        const data = [
            {
                "date": "2022-09-02",
                "amount": 30
            },
            {
                "date": "2022-09-05",
                "amount": 70
            },
            {
                "date": "2022-09-08",
                "amount": 80
            },
            {
                "date": "2022-09-15",
                "amount": 65
            },
            {
                "date": "2022-09-17",
                "amount": 120
            },
            {
                "date": "2022-09-21",
                "amount": 160
            },
            {
                "date": "2022-09-26",
                "amount": 90
            }
        ]

        const result = getTotalMonthlyPoints(data);
        expect(result).toBe(365);
    });

    test('Table Container Snapshot', () => {
        const TableContainerComponent = renderer.create(<MockedProvider><RewardsTableContainer /></MockedProvider>);
        let tree = TableContainerComponent.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test("should show error UI", async () => {
        const customerMock = {
          request: {
            query: GET_AllCustomers,
            fetchPolicy: "no-cache"
          },
          error: new Error("An error occurred")
        };
        render(
          <MockedProvider mocks={[customerMock]} addTypename={false}>
            <RewardsTableContainer />
          </MockedProvider>
        );
        expect(await screen.findByTestId("error")).toBeInTheDocument();
    });

    test("should show Graphql error", async () => {
        const customerMock = {
            request: {
                query: GET_AllCustomers,
                fetchPolicy: "no-cache"
            },
            errors: [new GraphQLError("Error!")],
        };
        render(
          <MockedProvider mocks={[customerMock]} addTypename={false}>
            <RewardsTableContainer />
          </MockedProvider>
        );
        expect(await screen.findByTestId("error")).toBeInTheDocument();
    });
    
});
