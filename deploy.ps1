param (
  [Parameter(Mandatory=$true)][string]$directory,
)

if(!$directory) {
  echo "Which folder do you want to deploy to GitHub Pages?"
  exit 1
}

git subtree push --prefix $directory origin gh-pages
