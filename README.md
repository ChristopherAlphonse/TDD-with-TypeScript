# Express TypeScript Boilerplate

A simple barebones boilerplate to use TypeScript with Node and Express.

## Download node_modules

```sh
 yarn
```

## Updated node_modules

```powershell
 yarn devi
 cls
```

## Create and Compile to dist folder

```sh
 yarn start
```

## Close terminal

```sh
CTRL + C


```

- Terminate batch job (Y/N)? Y

## Start project

```sh
yarn dev
```

## Navigate to browser or whatever PORT is set in the .env file

```sh
localhost:8081
```

#Securities

```txt

Content-Security-Policy: default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests
Cross-Origin-Embedder-Policy: require-corp
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Resource-Policy: same-origin
Origin-Agent-Cluster: ?1
Referrer-Policy: no-referrer
Strict-Transport-Security: max-age=15552000; includeSubDomains
X-Content-Type-Options: nosniff
X-DNS-Prefetch-Control: off
X-Download-Options: noopen
X-Frame-Options: SAMEORIGIN
X-Permitted-Cross-Domain-Policies: none
X-XSS-Protection: 0
```

```javascript
import helmet from "helmet";
import passport from "passport";
import rateLimit from "express-rate-limit";
```

These 3 files should give an error like this.

### Found 3 errors. Watching for file changes.

that is because i having found a way to add the @types version of these without issues.

will continue to work as expected there are a few options to fix, but i want a flawless approach.
