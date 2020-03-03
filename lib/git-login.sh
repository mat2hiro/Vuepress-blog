echo "set git config."
git config --global user.name "${GITHUB_USERNAME}"
git config --global user.email "${GITHUB_USEREMAIL}"

git remote set-url origin https://${GITHUB_USERNAME}:${GITHUB_TOKEN}@github.com/${GITHUB_REPOSITORY}.git

git fetch && git checkout ${GITHUB_BRANCH}
git merge develop
git branch -a

ls -la
