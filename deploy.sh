#!/bin/bash
SOURCE=$(cd `dirname $0`; pwd)

# target location
TARGET=$1

if [ x$TARGET = x ]; then

cat <<EOF
Must supply target folder parameter, e.g.:

  deploy.bat ../deploy/lib/sword
EOF
else
    mkdir -p $TARGET/
	cp -r $SOURCE/sword.min.js $TARGET/
fi
