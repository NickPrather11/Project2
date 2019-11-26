# Project2

The second group project for UNC Bootcamp

-- The sequelize associations used in linking journal entries to their respective tags works locally, but do not currently work on the heroku deployment. I'm in the process of debugging to figure out why the middle table used in linking the entries and tags does not work on heroku.

"Dream Journal" node application utilizing Express, MySQL, Sequelize, Handlebars, and Materialize demonstrating MVC design pattern and Many-to-Many sequelize associations.

Users can create an entry with associated "tags" or categories and browse entries in reverse chronological order (newest first) or by "tag". User can also toggle skins for day/night mode.

When adding a tag, be sure to use the "+" button to add the tag. Hitting the "Enter" key will trigger a submission without the added tag.

** AUTHENTICATION NOTE **
For now, the login functions are inoperable. Just click outside the login modal to make it disappear.
Also, all the associations work locally, but for some reason they aren't showing on the heroku app.
Debugging currently in progress!

Heroku deployment: https://cryptic-badlands-56041.herokuapp.com/
