#!/bin/sh
if [[ -z $1 ]]; then
echo ""
echo "Please provide a path for your project"
echo "Example: $ template 'your_project_name'"
echo ""
	exit
fi
echo "Creating new app in $(pwd)/$1"
git clone &> /dev/null https://github.com/NilsNathorst/rollup-boilerplate.git $1
cd $1
rm -rf .git
git init
npm i
npm run build
npm run start
echo 'Usage, npm run: | build | start | test | deploy |'

