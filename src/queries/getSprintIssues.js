import gql from 'graphql-tag';

/** @description mutation that fetches all issues from a particular sprint
 * @returns string
 */
const getSprintIssuesMutation = gql`
   query($boardId: Int!, $sprintId: Int!) {
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
                   issueCreator
                   assigneeDetails {
                       displayName
                   }
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
       }
`;

export default getSprintIssuesMutation;
