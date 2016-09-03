var rank = new Rank([{
  name: "date", 
  fun: function(){
    var task = this;
    return new Promise(function(res,rej){
      console.log("progcessing",task.name);
      res(task.top[task.name] = '2016-05-21');  
    });
  }
},{
  name: "platform",
  fun: function(arg){
    var task = this;
    return new Promise(function(res,rej){
      console.log("progcessing",task.name);
      setTimeout(function(){
        //res(task.top[task.name] = "platform:yyb");
        res({errCode:-1,msg:"get platInfo faile"+"erro:1"});
      },2000);
    });
  }
},{
  name: "uin",
  fun: function() {
    var task = this;
    return new Promise(function(res,rej){
      console.log("progcessing",task.name);
      setTimeout(function(){
        res(task.top[task.name] = task.top.platform+':'+'79821082');
      },1000);  
    });
  }
},{
  name: "userInfo",
  fun: function(){
    var task = this;
    return new Promise(function(res,rej){
      console.log("progcessing",task.name);
      setTimeout(function(){
        res(task.top[task.name] = {date:task.top.date,uin:task.top.uin,name:'wengee',score:100});
      },1000);
    });
  }
},{
  name: "pageInit",
  fun: function(){
    var task = this;
    console.log("progcess finish",task.name);
    console.log(JSON.stringify(task.top.userInfo));
  }
}]);
rank.run();