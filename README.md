# ABoa
ABoa

# Build
eas whoami
eas login
eas build:configure
eas build --platform all

eas whoami
eas login
eas build --platform android

# Apks https://www.geekdashboard.com/extract-apk-files-from-aab/
下载bundletool.jar、生成的aab文件、下载Expo的Credentials 获取MD文件内容

java -jar bundletool.jar build-apks --bundle=nhl.aab --output=nhl.apks --ks=@zy9803__ABoa-keystore.bak.jks --ks-pass=pass:9e5722a87dd55f4d66bfe63b7ee309d2 --ks-key-alias=b7e63e0e826d4f5ebb64e52f43b9a757 --key-pass=pass:177ac74c990a8105833f083fbb0241ee --mode=universal


# 配置安卓状态栏
https://docs.expo.dev/versions/latest/config/app/#androidstatusbar

