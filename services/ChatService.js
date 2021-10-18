"use strict";
const config = require('../config.json');
const GeneralService = require('./utility/general.js');


class ChatService {

    constructor() {
        this.GENERAL = new GeneralService();
    }

    ///This method will accept string msg and return the splitted parts as a JSOn array
    async split(chat) {

        try {
            let out={};
           //Check for valid input, return otherwise
            if (!(typeof chat.msg === 'string' || chat.msg instanceof String)) {
                console.log('invalid input');
                return;
            }
           //Check for multiline msgs and seperate them
            let arr = this.GENERAL.lineseperator(chat.msg);
            let usecase = arr.length;
            
            //If multiline call multiline formatter and singleliner otherwise
            out=(usecase > 1)?this.GENERAL.multilineformatter(arr):this.GENERAL.lineformatter(arr[0]);

            return out;

        } catch (err) {
            console.log(err);
        }

    }


}

module.exports = ChatService;