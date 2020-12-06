

time3=$(date "+%Y-%m-%d %H:%M:%S")

echo '准备部署：：'

git add .

git commit -m "build $time3"

git push 

echo '部署完成：：：'