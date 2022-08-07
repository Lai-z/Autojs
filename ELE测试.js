//向上滑动解锁
if(!device.wakeUp()){
    device.wakeUp();
    sleep(1000);
    swipes(500,1751,500,500,500);
    sleep(1000);
}
//if(text("后面有更多的美食等着你...").exits()){
//   gesture(1000,[190*device.width/1080,1514*device.height/2400],[903*device.width/1080,1521*device.height/2400]);
//}
home();
sleep(1000);
app.startActivity({
    packageName: "me.ele",
    data: 'eleme://web?&url=https://h5.ele.me/svip/task-list'
    });
    text('下单任务').waitFor();
    sleep(2000);
console.show()
//提前关闭脚本
threads.start(function(){
    events.observeKey();
  events.onKeyDown("volume_up", function(event){toastLog("\n音量+被按下，即将结束脚本！");sleep(3000);console.hide();exit();});
  });
home();
sleep(2000);
console.log("///////////////");
app.startActivity({
    packageName: "me.ele",
    data: 'eleme://web?&url=https://h5.ele.me/svip/task-list'
    });
    text('下单任务').waitFor();
/*console.log("开始吃货豆报名");
if(!(textContains("已报名").exists())){
    text("领吃货豆").click();
    sleep(1000);
    text("去参加下一期瓜分").click();
    sleep(1000);
    textContains("报名").click();
    console.log("报名成功！");
    sleep(1000);
}
console.log("已经报名过了");*/
console.log("去完成正在执行****");
while(text("去完成").exists()){
    sleep(2000);
        text("去完成").findOne(2000).click();
        sleep(2000);
        if(text("取消").depth(6).exists()){
            sleep(1000);
            text("取消").depth(6).click();
        }
    sleep(1000);
        if(textMatches('浏览.+').exists()){
            sleep(20000);
            toast("浏览结束");
                while(!text("下单任务").exists()){
                    back();
                    sleep(1000);
                }
                text("下单任务").waitFor();
                sleep(1000);
         }else{
             转跳到别的页面();
         }
         sleep(2000);
         text("逛逛任务").waitFor();
         sleep(1000);
}
console.log("去完成结束----");

console.log("去浏览正在执行****");
while(text("去浏览").exists()){
    sleep(2000);
        text("去浏览").findOne(2000).click();
        if(text("取消").depth(6).exists()){
            sleep(1000);
            text("取消").depth(6).click();
        }
        sleep(2000);
        if(textMatches('浏览.+').exists()){
            sleep(20000);
            toast("浏览结束");
                while(!text("下单任务").exists()){
                    back();
                    sleep(1000);
                }
                text("下单任务").waitFor();
                sleep(1000);
         }else{
             转跳到别的页面();
         }
         sleep(2000);
         text("逛逛任务").waitFor();
         sleep(1000);
}
sleep(2000);
console.log("去浏览结束----");

console.log("去逛逛正在执行****");
while(text("去逛逛").exists()){
    sleep(2000);
        text("去逛逛").findOne(2000).click();
        if(text("取消").depth(6).exists()){
            sleep(1000);
            text("取消").depth(6).click();
        }
        sleep(2000);
        if(textMatches('浏览.+').exists()){
            sleep(20000);
            toast("浏览结束");
                while(!text("下单任务").exists()){
                    back();
                    sleep(1000);
                }
                text("下单任务").waitFor();
                sleep(1000);
         }else{
             转跳到别的页面();
         }
         sleep(2000);
         text("逛逛任务").waitFor();
         sleep(1000);
}
sleep(2000);
console.log("去逛逛结束----");

console.log("///////////////");
home();
exit();


function 转跳到别的页面(){
        sleep(2000);
        home();
        sleep(2000);
        app.startActivity({
            packageName: "me.ele",
            data: 'eleme://web?&url=https://h5.ele.me/svip/task-list'
            });
            text('下单任务').waitFor();
            sleep(2000);
}
function swipes(x1,y1,x2,y2,time){
    xx=device.width/1080
    yy=device.height/2400
    swipe(xx*x1,yy*y1,xx*x2,yy*y2,500);
}
