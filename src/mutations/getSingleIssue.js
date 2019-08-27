import gql from 'graphql-tag';

const getSingleIssue = gql `    
    mutation($issueProjectId: String!) {
        getSingleIssue(issueProjectId: $issueProjectId) {
            issueId
            issueUrl
            issueProjectKey
            issueCreator
            assigneeDetails {
                displayName
            }
            issueDescription
            issueStatus
            issueTypeDetails {
                issueType
            }
            SprintsCoveredByStory {
                name
            }
            issueTypeDetails {
                issueType
            }
            sprintDetails {
                sprintName
            }
        }
    }
`;

export default getSingleIssue;
