import gql from 'graphql-tag';

const getSingleIssue = gql `    
    query($issueProjectId: String!) {
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
