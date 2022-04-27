let CLIENT_ID = '';
// let ISSUER = process.env.ISSUER;
let ISSUER = '';
let REDIRECT_URL = '';
let env = '';
const OKTA_TESTING_DISABLEHTTPSCHECK = process.env.OKTA_TESTING_DISABLEHTTPSCHECK || true;
const origin = window.location.href;

if(origin.indexOf('localhost') !== -1 || origin.indexOf('development') !== -1){
       env = 'dev';
       ISSUER = 'https://dev-47410790.okta.com/oauth2/default';
//     ISSUER = 'https://cnapreview.okta.com/outh2/0oa4hnv8en0u1iIBy5d7'
       CLIENT_ID = '0oa4hnv8en0u1iIBy5d7';
}
// else if(origin.indexOf('stg') !== -1){
//     env = 'stg';
//     ISSUER = 'https://cnapreview.okta.com/outh2/0oa4hnv8en0u1iIBy5d7'
//     CLIENT_ID = '0oa4hnv8en0u1iIBy5d7';
// }
// else if(FULL URLLL){
//     env = 'prd';
// }

export default {
    oidc: {
        clientId: CLIENT_ID,
        issuer: ISSUER,
        redirectUri: `${window.location.origin}/home`,
        scope: ['openid','profile','email'],
        pkce:false,
        disableHttpsCheck: OKTA_TESTING_DISABLEHTTPSCHECK,
    }
};