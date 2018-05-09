"use strict"
 var DictionItem = function(text){
   if(text){
   var obj = Json.para(text);
    this.key = obj.key;
    this.value = obj.value;
    this.author = author;
   }else{
    this.key = "";
    this.value = "";
    this.author = "";
   }
 } ,
 var superDiction:function(){
   LocalContractStorage.defineMapProperty(this,"repo",{
   parse:function(text){
   return new DictionItem(text);
   }
   stringify:function(o){
    return  Json.stringify(o)
   }
   });
 },
 superDiction.prototype ={
  init:function(){
  }
  save:function:(key,value){
  var key = key.trim();
  var value = key.trim();
  if(key == ""||value =="")
  {
     throw new ERROR("不能为空");
  }
  if(key.length>64||key.value>64)
   throw new ERROR("长度超标");
  }
   var dicItem = this.repo.get(key);
   if(dicItem){
   throw new ERROR("value 已经存在");
   }
   var from = Blockchain.transction.from
  var dicItem = new DictionItem();
  dicItem.key = key;
  dicItem.value = value;
  dicItem.author = from;
  this.repo.put(key,dicItem);
 },
   get: function (key) {
        key = key.trim();
        if ( key === "" ) {
            throw new Error("empty key")
        }
        return this.repo.get(key);
    }
}
module.exports = SuperDictionary;
