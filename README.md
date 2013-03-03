# Flickr Browser

In the long term, a client-side app for browsing exported Flickr photos and metadata.

In the short term, an excuse to play around with some fun new JS tools, like RequireJS, underscore, Backbone, Mustache, Bower, etc.

## Setup

Use [Bower](http://twitter.github.com/bower/) to install required packages 

From `js/` run `bower install`

## Flickr Data

The format is expected to change frequently while working on this project. It's recommend you use the code itself to reverse the currently expected format.

Example data and clear documentation will be added once the format has settled down.

### Where are you getting the data?

Using my [Flickr export script](https://github.com/dsingleton/flickr-backup), which is likely to change in step with this project.

## Flickr ABCs

This is one of a planned set of three tools around exported flickr data.

* A) [Flickr Archive](https://github.com/dsingleton/flickr-archive) - Extracts photos and metadata from Flickr in to an archive, for use by other tools
* B) [Flickr Browser](https://github.com/dsingleton/flickr-browser) - A web-app to browse the photos and metadata of a Flickr Archive
* C) Flickr Something-begining-with-C - A tool to view a Flickr Archive in a regular file system, where the photos themselves contain the metadata
