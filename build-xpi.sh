rm -rf .xpi_work_dir/

chmod -R 0777 stopmotion/
rm -f stopmotion.xpi
mkdir .xpi_work_dir
cp -r stopmotion/* .xpi_work_dir/
cd .xpi_work_dir/

rm -rf `find . -name ".git"`
rm -rf `find . -name ".DS_Store"`
rm -rf `find . -name "Thumbs.db"`

cd chrome/
zip -rq ../stopmotion.jar *
rm -rf *
mv ../stopmotion.jar ./
cd ../
zip -rq ../stopmotion.xpi *
cd ..
rm -rf .xpi_work_dir/
cp stopmotion.xpi ~/Desktop/
