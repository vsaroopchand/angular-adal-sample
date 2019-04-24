az ad app create --display-name WebServer-OpenIDConnect-DotNet2
    --key-type Password 
    --native-app false 
    --password LetMeIn101 
    --oauth2-allow-implicit-flow true 
    --identifier-uris https://localhost:44351 
    --app-roles @manifest.json 