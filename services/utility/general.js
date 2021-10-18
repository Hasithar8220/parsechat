"use strict";

class GeneralService {

    lineseperator(chatmsg){
      return chatmsg.split(/\r?\n/);
    }

    //for multiline chats
    multilineformatter(arr){
      let self=this;
      let formattedarr=[];
      arr.forEach(function(line){
        let temparr=self.lineformatter(line);
        formattedarr = formattedarr.concat(temparr);
      });
      return formattedarr;
    }
    // for single liners
    lineformatter(line){
         
      var out=[];     
      
      //get all mention tokens
      let matches=this.patternmapper(line);    
      
      
      
      matches.forEach(function(m){
      console.log(m);
      line = line.replace(m, '|');
      });

      //get all corresponding sentences
      let sentences= line.split('|');

      //create output array
      for(let k=0; k < matches.length; k++){
        let chatObj={};
        chatObj.mention=matches[k];
        chatObj.sentence = sentences[k+1];
        let temp=this.generalsplit(chatObj.mention);
        chatObj.date=temp.date;
        if(matches.length > 1){
        if(this.isEven(k)){
          chatObj.type='Customer';
        }else{
          chatObj.type='Agent';
        }
      }else{
        chatObj.type = temp.type;
      }
        

        out.push(chatObj);  
      }
    
      return out;
    }


    //Find the given text patterns using regex
    patternmapper(line){
  
    //Regex pattern to match "14:24:32 Customer :"
    let re=/(2[0-3]|[01]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])*\s[a-zA-Z0-9!@#$_]*\s:/g;
    //Regex pattern match the name with spaces "14:24:32 Luca Galasso :"
    let re1=/(2[0-3]|[01]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])[a-zA-Z0-9\s]*\s:/gm;

    let m = line.match(re);

    if(!m){
      m = line.match(re1);
    }
    console.log(m);
    return m;
    }

    generalsplit(str){

    let out={};  
    out.date=str.substring(0, 8)
    out.type=str.substring(8);
    return out;
    }

     isEven(n) {
      return n % 2 == 0;
   }

   
}

module.exports = GeneralService;