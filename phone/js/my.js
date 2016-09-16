 appcan.ready(function() {
 uexWindow.setReportKey(0,1);//拦截返回键
 //uexWindow.setReportKey(1,1);//菜单键
 uexWindow.onKeyPressed = onKeyPressed;
 });
 function onKeyPressed(keyCode){
    if(keyCode == 0){
    //alert('点击了返回键');
    uexWindow.close(-1);
    appcan.window.publish('2','hi');
    }
   }