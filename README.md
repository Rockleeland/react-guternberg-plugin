# React Blocks made for gutenberg editor

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

This site was developed with [Create Guten Block](https://github.com/ahmadawais/create-guten-block) and serves as the home page for [Gutenberg Custom Blocks](http://zhe.yli.mybluehost.me/).

### Getting Started

1. Fork the project
2. Clone your fork
3. Make sure you are in the right directory: `cd react-guternberg-plugin`
4. Add an `upstream` remote for keeping your local repository up-to-date:
   > `git remote add upstream git@github.com:san-diego-tech-hub/sdth-site.git`
5. Run `cp env.default .env.dev`
6. Grab the environment variables from a developer in the slack channel.
7. Run `npm install` to install the project dependencies.
8. Run `npm start` to start your dev environment.
9. Make sure to add `wp-content/plugins/` folder in wordpress site.

### Creating a new PR

1. Make sure you are on the `development` branch, and you have pulled the latest changes.

   > `git checkout development && git pull upstream development`

2. Install any new dependencies: `npm install`

3. Create a new branch off of the `development` branch.

   > `git checkout -b [NEW BRANCH NAME]`

   > **Branch naming conventions:** `fix/[BRANCH]` for bug fixes, `feature/[BRANCH]` for new features, `dev/[BRANCH]` for non-user-facing changes. The `[BRANCH]` portion should be kebab case. For example, if you want to update the README.md file, your branch could be called `dev/update-readme`

4. Make changes and commit them. `git add . && git commit -m [YOUR COMMIT MESSAGE]`.

   > The subject of a commit message (the first line) should be 72 characters or less. If you need more room for a longer explanation of your changes, you can add a blank line below the subject and write a commit body. The commit message should be in present-imperative tense ("Update README.md" rather than "Updates" or "Updated").

5. Push your branch to your fork: `git push -u origin [BRANCH NAME]`

6. Open a new PR against the `development` branch from your fork using the GitHub user interface.


