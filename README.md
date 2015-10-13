Follow Venues
=====

> Practice repo using the Google Maps API and mongoose relationship mapping. Allows users to follow venues and search for venues near them

Built from [node-jwt-intro](https://github.com/cleechtech/node-jwt-intro) boilerplate

scotch.io mapping tutorial: https://scotch.io/tutorials/making-mean-apps-with-google-maps-part-i?utm_content=buffer97d1f&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer

many to many default mongoose: http://stackoverflow.com/questions/11117854/many-to-many-mapping-with-mongoose

also populate: http://mongoosejs.com/docs/populate.html

loading svg: https://github.com/jxnblk/loading


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

