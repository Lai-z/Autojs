//唤醒手机并解锁
//请基于自己手机型号自行修改(或者省略此步骤)!!
/*if(!device.wakeUp()){
//红米k40的混合密码输入
    device.wakeUp();
    sleep(1000);
    swipe(500,1751,500,500,500);
    sleep(1000);
    click(986,1450) // 0
    click(81,1450)  // 1
    click(171,1450) // 2
    click(265,1450) // 3
    click(374,1450) // 4
    click(496,1450) // 5
    click(588,1450) // 6
    click(690,1450) // 7
    click(808,1450) // 8
    click(891,1450) // 9
    
    click(911,2034)确定
    sleep(2000);  
}*/

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
  
console.log("///////////////");
console.log("开始吃货豆报名");
if(!(textContains("已报名").exists())){
    text("领吃货豆").click();
    sleep(1000);
    text("去参加下一期瓜分").click();
    sleep(1000);
    textContains("报名").click();
    console.log("报名成功！");
    sleep(1000);
}
console.log("已经报名过了");
console.log("去完成正在执行****");
while(text("去完成").exists()){
    sleep(2000);
        text("去完成").findOne(2000).click();
        sleep(2000);
        if(text("取消").depth(6).exists()){
            sleep(1000);
            text("取消").depth(6).click();
        }
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
