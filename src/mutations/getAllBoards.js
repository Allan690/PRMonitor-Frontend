import gql from 'graphql-tag';

const getAllBoardsMutation = gql `
    mutation {
        getAllBoards {
            maxResults
            projectDetails {
                id
                url
                name
                displayName
                projectId
            }
        }
    }
`;

export default getAllBoardsMutation;
