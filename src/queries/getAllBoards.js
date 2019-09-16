import gql from 'graphql-tag';

const getAllBoardsMutation = gql `
    query {
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
