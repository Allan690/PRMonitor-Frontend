import gql from "graphql-tag";

const getAllSprintsMutation = gql `
    query($boardId: Int!) {
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
