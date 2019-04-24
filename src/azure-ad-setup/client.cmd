az ad app create --display-name WebApp-OpenIDConnect-DotNet2
    --key-type Password 
    --native-app false 
    --password LetMeIn101 
    --oauth2-allow-implicit-flow true 
    --identifier-uris https://localhost:5000 
    --homepage https://localhost:5000/signin-oidc
    --reply-urls https://localhost:4200/frameredirect http://localhost:4200/frameredirect
    --required-resource-accesses @manifest2.json