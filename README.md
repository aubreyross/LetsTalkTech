# LetsTalkTech

Following the MVC paradigm structure, LetsTalkTech is a CMS style blog where developers around the world can create an account, contribute blog posts, and provide comment/feedback on existing posts, as well.

## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria

```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```

## Technologies
* Javascript - client + server-side language
* Node.js - executes JS code outside the web browser (used for server-side scripting)
* Express - backend framework for Node.js
* Express Session- package to store session data
* MySQL2 - backend database 
* Sequelize - ORM for managing MySQL database 
* Heroku - platform to host the tech blog
* dotenv - uses environment variables so root passwords are not revealed on github
* handlebars- template engine for front-end Javascript + HTML
* bcrypt - password hashing

## Preview

![Screen Shot 2022-02-17 at 11 50 53 AM](https://user-images.githubusercontent.com/87405979/155587648-d837db6a-1c07-44a7-a4a9-832608557de7.png)

![Screen Shot 2022-02-17 at 11 47 36 AM](https://user-images.githubusercontent.com/87405979/155587577-9274f39a-30ab-4112-884a-4c9fefa8fc44.png)

![Screen Shot 2022-02-17 at 4 55 30 PM](https://user-images.githubusercontent.com/87405979/155587978-b378ca3e-5087-4073-b8cc-c9e14b355d39.png)

![Screen Shot 2022-02-17 at 11 48 04 AM](https://user-images.githubusercontent.com/87405979/155588009-02e3813e-1c29-4846-ae83-76647863e2e2.png)



## URLs
* Code: https://github.com/aubreyross/LetsTalkTech
* Deployed: https://letstalktech.herokuapp.com/login

## Resources
* https://developer.mozilla.org/en-US/docs/Glossary/MVC
* Student Mini Project
* [bootswatch.com](https://bootswatch.com/)
* https://getbootstrap.com/
* https://sequelize.org/v5/manual/data-types.html
* https://sequelize.org/master/variable/index.html#static-variable-DataTypes
* https://coding-boot-camp.github.io/full-stack/heroku/deploy-with-heroku-and-mysql 
* And a special thank you to the BCS assitant who helped me with my path file issue! 


