echo "git push."
git status
git add ./docs
git commit -m '[updater] update docs.'
git push -f origin HEAD
