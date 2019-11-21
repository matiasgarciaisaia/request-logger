# Request Logger

## Logs incoming HTTP requests to stdout

Small NodeJS server that logs every incoming HTTP request to stdout.

## Usage

Run it with Docker:

```
docker run --rm -Pti matiasgarciaisaia/request-logger
```

You need `-P` to expose the port on which it's listening.

You can also run it locally (if you have NodeJS) by running:

```
sudo node index.js
```

You need `sudo` because I'm lazy and made it run on port 80 by default. I meant to run it on Docker, so I don't care - please send a pull request if it's an issue for you :)
