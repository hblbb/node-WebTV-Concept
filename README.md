WebTV Concept
=============

The demonstration at the Bernie Gossip Party#2

Target
------
Application between mobile device and big screen is more and more popular.   
such as the followings:

1. Google Sync Sport http://chrome.com/supersyncsports/
2. Youtube TV https://support.google.com/youtube/answer/2523964?rd=3

Usage
-----
1. Download from github
    
        mkdir project
        cd project
        git clone git@github.com:hblbb/node-WebTV-Concept.git

2. Modify the server address in /views/index.html file

        cd project
        vim /views/index.html
    
3. Run the application

        node server.js
        
4. Open browser e.g localhost:8080

Workflow
--------
Click the [video](http://www.youtube.com/watch?v=KGWPSMtmtKA)

Sugar
-----
Patrick Wang written an interactive demo using Node.js and PHP.
Here is the article http://patw.idv.tw/blog/archives/566

Frameworks and Library
----------------------

1. Node.js: Express, Swig, Socket.io
2. Google Charts API
3. JavaScript Math.UUID function

License
-------
![ScreenShot](http://i.creativecommons.org/l/by-nc-sa/3.0/88x31.png)  
All codes of this project is under [CC BY-NC-SA 3.0](http://creativecommons.org/licenses/by-nc-sa/3.0/)
