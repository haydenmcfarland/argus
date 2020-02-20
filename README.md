# argus

A simple TV display application monitoring tool.
Argus utilizes iframes to poll application diagnostic pages for casual display.

## Goal

- Create a very basic application "monitoring" display for a TV in the office that currently has no use.
- Have Lambda that builds js bundle and dumps into S3
- Serve bundle via S3
- Consume bundle via TV browser

## CORS

Applications should modify their CORS policies to allow argus's origin.

![argus](https://github.com/haydenmcfarland/assets/blob/master/images/argus.gif?raw=true)
