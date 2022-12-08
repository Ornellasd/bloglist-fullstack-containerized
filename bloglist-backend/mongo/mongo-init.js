db = db.getSiblingDB('bloglist_prod');
db.createUser(
  {
    user: 'the_username',
    pwd: 'the_password',
    roles: [{ role: 'readWrite', db: 'bloglist_prod' }],
  },
);
db.createCollection('users');
db.createCollection('blogs');

db = db.getSiblingDB('bloglist_dev');
db.createUser(
  {
    user: 'the_username',
    pwd: 'the_password',
    roles: [{ role: 'readWrite', db: 'bloglist_dev' }],
  },
);
db.createCollection('users');
db.createCollection('blogs');