# foodgram-mobile

## setup react native with expo environment (macOS)
install expo-cli
```
sudo npm i -g expo-cli
```
install react native navigation libraries
```
sudo npm install react-navigation
sudo npm install react-navigation-stack
```
install react native gesture handler
```
sudo npm install react-native-gesture-handler
```
download expo client on your phone from the app store
```
https://apps.apple.com/us/app/expo-go/id982107779
```
create and move into the foodgram-mobile directory
```
mkdir foodgram
cd foodgram
```
clone the repository
```
git clone https://github.com/COP4331-Large-Project/foodgram-mobile.git
```
move into foodgram-mobile directory and make sure the install is working
```
cd foodgram-mobile
sudo npm start
```
open a web browser and enter localhost (There should be a Metro bundler page if everything went correctly)
```
localhost:19002
```
open Xcode simulator, and from localhost webpage click on Run on iOS simulator. App will show up on iphone simulator. Cool thing about this is when you refresh the code on vscode you can see the changes immediately on the phone simulator. (NOTE: you can also use the QR code on your phone and it will bring it up using the expo app on your phone)
