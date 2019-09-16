import gql from 'graphql-tag';

const getLabelledTasksQuery = gql `
    query($organization: String!, $repoName: String!, $labelTag: String!, $numberToDisplay: Int!) {
        viewLabelledTasks(input: {
            organization: $organization, repoName: $repoName, labelTag: $labelTag, number: $numberToDisplay
        }) {
            state
            title
            number
            permalink
            author{
                avatarUrl
                url
                resourcePath
            }
        }
    }
`;

export default getLabelledTasksQuery;
