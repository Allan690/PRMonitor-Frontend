import gql from "graphql-tag";

const getAllSprintsMutation = gql `
    mutation($boardId: Int!) {
        getAllSprints(boardId: $boardId) {
            maxResults
            total
            Sprints {
                id
                state
                name
                startDate
                endDate
            }
        }
    }
`;

export default getAllSprintsMutation;
