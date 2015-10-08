Follow Venues
=====

> Practice repo using the Google Maps API and mongoose relationship mapping. Allows users to follow venues and search for venues near them

Built from [node-jwt-intro](https://github.com/cleechtech/node-jwt-intro) boilerplate


many to many default mongoose: http://stackoverflow.com/questions/11117854/many-to-many-mapping-with-mongoose

also populate: http://mongoosejs.com/docs/populate.html


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

