#! user/bin/env nodes

import inquirer from "inquirer"

import {differenceInSeconds, getDate} from "date-fns"
import { get } from "http";
import { exit } from "process";

const res=await inquirer.prompt({
    name:'user_input',
    type:'number',
    message:'plz enter the amount  of second',
    validate:(input)=>{
      if(isNaN(input)){
        return  "please enter your valid number"
      }else if(input>60){
      return "give must be in 60"
      }else{
        return   true;
      }
    }
});

const input=res.user_input;


function settime(val:number){
    const initialtime=new Date().setSeconds(new Date().getSeconds () + val);
    const timer=new Date(initialtime)
    setInterval((()=>{
      const cureenttime=new Date()  
      const timediff=differenceInSeconds(timer,cureenttime);
      if(timediff<=0){
   console.log('time has expired');
   process.exit();
      }
      const min=Math.floor((timediff%(3600*4))/3600);
      const  second=Math.floor(timediff%60);
      console.log(`${min.toString().padStart(2,'0')}:${second.toString().padStart(2,'0')}`);
    }),1000)
}
settime(input);