function Rank(arr){//arr--page logic arr
  var self = this;
  /*var taskLen = arr.length;
  this.taskMap = {};

  arr.map(function(task,index){
    self.taskMap[task.name] = task;
    task.hasNext = (index+1 < taskLen)?true:false;
  });*/
  //this.tasks = [].concat(arr);
  this.tasks = [];
  arr.forEach(function(task){
    task.top = self;
    self.tasks.push(task);
  });
}
Rank.prototype={
  run:function(){
    var self = this;
    return new Promise(function(res,rej){
      var loop = function(lastYieldVal){
        var task = self.tasks.shift();
        if(task){
          var result = task.fun(lastYieldVal);
          if(typeof result === 'object' && typeof result.then ==='function'){
            result.then(function(yieldVal){
              loop(yieldVal);
            });
          }else{
            res("tasks finished");
          }

        }else{
          res("tasks finished");
        };
      }
      loop();
    });
  }
};
Rank.prototype.constructor = Rank;


var rank = new Rank([{
  name: "date", 
  fun: function(){
    var task = this;
    return new Promise(function(res,rej){
      res(task.top[task.name] = '2016-05-21');  
    });
  }
},{
  name: "platform",
  fun: function(arg){
    var task = this;
    return new Promise(function(res,rej){
      setTimeout(function(){
        res(task.top[task.name] = "platform:yyb");
      },2000);
    });
  }
},{
  name: "uin",
  fun: function() {
    var task = this;
    return new Promise(function(res,rej){
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
      setTimeout(function(){
        res(task.top[task.name] = {date:task.top.date,uin:task.top.uin,name:'wengee',score:100});
      },1000);
    });
  }
},{
  name: "pageInit",
  fun: function(){
    var task = this;
    console.log(JSON.stringify(task.top.userInfo));
  }
}]);
rank.run();