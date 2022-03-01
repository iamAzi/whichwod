rm -rf /dist
cp -r /src /dist 
cd /dist
echo 'start install'
npm config set registry http://mirrors.cloud.tencent.com/npm/
npm i 2>&1 > /tmp/log.txt 
echo 'install finish'
node /dist/index.js