# 12/26/2022 09:20PM

````txt
I removed the unnecessary middleware imports and calls (cookieParser, bodyParser.json, express.urlencoded). I also moved the call to express.json() to the top to make sure it is applied to all routes.```
````
