import gql from 'graphql-tag';

const LoginMutation = gql `
    mutation($accessToken: String!) {
        googleAuth(input: {
            accessToken: $accessToken
        }) {
            token
            name
            picture
        }
    }
`;

export default LoginMutation;
