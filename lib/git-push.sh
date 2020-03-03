echo "git push."
git status
git add ./docs
git commit -m '[updater] update pdf.'
git push -f origin HEAD
