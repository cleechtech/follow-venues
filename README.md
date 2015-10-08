Follow Venues
=====

> Practice repo using the Google Maps API and mongoose relationship mapping. Allows users to follow venues and search for venues near them

Built from [node-jwt-intro](https://github.com/cleechtech/node-jwt-intro) boilerplate

#### Getting started
```
$ git clone <this_repo>
$ npm install
$ nodemon server 
```

### Deployment

```sh
heroku create <app_name>
heroku config:set NODE_ENV=production
heroku addons:create mongolab:sandbox 
heroku config | grep MONGOLAB_URI
git push heroku master
heroku ps:scale web=1
```

