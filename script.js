let html=`<span class='loading'>.<span class='dot'>.</span><span class='dot'>.</span><span class='dot'>.</span></span>`;

async function hacker(name1,name2,name3,name4,name5,name6) {
    setTimeout (() => { 
        document.getElementById("msg1").innerHTML=name1+html;
     },2000) 
     setTimeout (() => { 
        document.getElementById("msg2").innerHTML+=name2+html;
     },5000)
     setTimeout (() => { 
        document.getElementById("msg3").innerHTML+=name3+html;
     },7000)
     setTimeout (() => { 
        document.getElementById("msg4").innerHTML+=name4+html;
     },10000)
     setTimeout (() => { 
        document.getElementById("msg5").innerHTML+=name5+html;
     },13000)
     setTimeout (() => { 
        document.getElementById("msg6").innerHTML+=name6+html;
     },16000)
 }
 hacker("Initializing hacking","Reading your files","Password files detected","Sending all passwords and personal files to server","Cleaning up your laptop","Congratulation your laptop is hacked successfully")