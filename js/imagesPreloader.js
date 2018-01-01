var images = [];
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

//-- usage --//
preload(
    "./images/currencies/dollar.png",
    "./images/currencies/euro.png",
    "./images/currencies/franc.png",
    "./images/currencies/krona.png",
    "./images/currencies/lira.png",
    "./images/currencies/pound.png",
    "./images/currencies/ruble.png",
    "./images/currencies/rupee.png",
    "./images/currencies/shekel.png",
    "./images/currencies/won.png",
    "./images/currencies/yen.png",
    "./images/icons/alarmOff.png",
    "./images/icons/alarmOn.png",
    "./images/icons/buy.png",
    "./images/icons/buyandsell.png",
    "./images/icons/commentIcon.png",
    "./images/icons/homeOff.png",
    "./images/icons/homeOn.png",
    "./images/icons/logoutOff.png",
    "./images/icons/logoutOn.png",
    "./images/icons/newsOff.png",
    "./images/icons/newsOn.png",
    "./images/icons/notification1.png",
    "./images/icons/notification2.png",
    "./images/icons/notification3.png",
    "./images/icons/orders.png",
    "./images/icons/ratesOff.png",
    "./images/icons/ratesOn.png",
    "./images/icons/searchBtn.png",
    "./images/icons/sell.png",
    "./images/icons/settingsOff.png",
    "./images/icons/settingsOn.png",
    "./images/icons/timeIcon.png",
    "./images/icons/walletOff.png",
    "./images/icons/walletOn.png",
    "./images/byebye.png",
    "./images/icon.png",
    "./images/logo.png",
    "./images/profilePic.png",
    "./images/ratesCharts/AUDCAD.png",
    "./images/ratesCharts/AUDCHF.png",
    "./images/ratesCharts/AUDJPY.png",
    "./images/ratesCharts/AUDNZD.png",
    "./images/ratesCharts/AUDUSD.png",
    "./images/ratesCharts/BITCOIN.png",
    "./images/ratesCharts/CADCHF.png",
    "./images/ratesCharts/CADJPY.png",
    "./images/ratesCharts/CHFJPY.png",
    "./images/ratesCharts/EURAUD.png",
    "./images/ratesCharts/EURCAD.png",
    "./images/ratesCharts/EURCHF.png",
    "./images/ratesCharts/EURGBP.png",
    "./images/ratesCharts/EURUSD.png",
    "./images/ratesCharts/GBPUSD.png",
    "./images/ratesCharts/NZDUSD.png",
    "./images/ratesCharts/USDCAD.png",
    "./images/ratesCharts/USDJPY.png",
    "./images/settingsIcons/activitySettings.png",
    "./images/settingsIcons/deleteSettings.png",
    "./images/settingsIcons/interfaceSettings.png",
    "./images/settingsIcons/notificationSettings.png",
    "./images/settingsIcons/paymentSettings.png",
    "./images/settingsIcons/profileSettings.png",
    "./images/settingsIcons/securitySettings.png",
    "./images/paymentIcons/1.png",
    "./images/paymentIcons/2.png",
    "./images/paymentIcons/3.png",
    "./images/paymentIcons/4.png",
    "./images/paymentIcons/5.png",
    "./images/paymentIcons/6.png",
    "./images/paymentIcons/7.png",
    "./images/paymentIcons/8.png",
    "./images/paymentIcons/9.png",
    "./images/paymentIcons/10.png",
    "./images/paymentIcons/11.png",
    "./images/paymentIcons/12.png",
    "./images/paymentIcons/13.png",
    "./images/paymentIcons/14.png",
    "./images/paymentIcons/15.png",
    "./images/paymentIcons/16.png",
    "./images/paymentIcons/walletDeposit.png",
    "./images/news/1.jpg",
    "./images/news/2.jpg",
    "./images/news/3.jpg",
    "./images/news/4.jpg",
    "./images/news/5.jpg",
    "./images/news/6.png",
    "./images/news/7.png",
    "./images/news/8.png"
)