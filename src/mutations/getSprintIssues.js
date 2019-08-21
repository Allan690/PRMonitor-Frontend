import gql from 'graphql-tag';

const getSprintIssuesMutation = gql`
   mutation($boardId: Int!, $sprintId: Int!) {
#       mutation {
           getSprintStories(input: {
               boardId: $boardId,
               idOfSprint: $sprintId
           }) {
               maxResults
               total
               sprintIssues {
                   issueId
                   issueUrl
                   issueProjectKey
                   issueDescription
                   issueCreator
                   assigneeDetails {
                       displayName
                       url
                   }
                   issueStatus
                   issueTypeDetails {
                       issueTypeIconUrl
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
       }
#   }
`;

export default getSprintIssuesMutation;
