Git Process:
1.Cloning the code
2.Making Changes
3.Testing
4.Staging the files
   `git status` => shows the list of changes made by us
   `git add filename` (or) `git add .` ==> To stage the file for commiting

5.Commit the changes with commit message
 Very first time set UserName and User Email using git config command
    git config user.name "Loganathan Shanmugam"
    git config user.email "Loganathan@hardwinsoftware.com"
 To commit use `git commit -m "your commit message"` command   
 To view recent commits use `git log` command

6.Taking latest pull from remote - sync up
 Before push It is good to take latest changes from remote.To take latest pull from remote use `git pull origin <branch-name>` command.
 For example if branch name is `main` use `git pull origin main`
 (Notes: 
 use `git branch` command to view current branch
 --> use `git checkout -b <branch-name>` to create new local branch out of current working  branch.
 --> use `git checkout <branch-name>` to switch between existing branches.
 )

7.Pushing the committed changes

use `git push origin <branch-name>` to push your changes to remote

--- Added by Mohamed ismail
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_kangundi
testing line

---Added by bhaskar

---Added by naveen

---Added by shahida