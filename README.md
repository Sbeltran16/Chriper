# passport-boilerplate
1. Wire Frame
    <img width="739" alt="Screen Shot 2022-04-07 at 6 16 44 PM" src="https://user-images.githubusercontent.com/84055237/162344310-9a5211af-f33c-4969-b033-11ffa6998ca6.png">
2. Chirper ERD
    ![Chirper ERD](https://user-images.githubusercontent.com/84055237/162341773-10eddf71-1f34-479b-8d8b-7c92c27fa391.jpeg)

This is your passport boilerplate.

## Setup 

1. Clone the repo
2. Rename the folder to your Project
3. Delete the `.git` file, when you are in the root of the file, you can press `ls` and you should see a `.git` file, then go ahead and run `rm -rf .git`


#### Setup your git repo
0. Setup your `.env` file and add all the things you need! (look at mongoose movies for reference!)
1. in the project root `git init`
2. `git add .` to add all the starter code
3. `git commit -m "setup boilerplate"` 
4. go to github and create your github and create a repo (Without a readme or liscense you can add that later!)
5. copy the remote address
6. In your terminal add the remote `git remote add origin yourGithubRepo'sAddressGoesHere`
7. `git pull origin master` If a screen pulls up asking you to do something just press `:q` and then `enter` (thats vim btw :) )
8. `git push origin master`

#### Setup your login

0. Setup your database connection string
1. Then Setup Your User Model, 
2. Follow the steps from the lesson plan to get your Google login credentials for your `.env` file (create the file if you haven't), or you can just copy the ones from earlier if you want to reuse them.
3. Setup the Code in your config passport 
4. Setup your callback routes in your `routes/index`
5. Setup a view and test your login!

#### Make a commit 

```git commit -m "setup up oauth and User Model"```
