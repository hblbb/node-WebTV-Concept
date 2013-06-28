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

1. Enable server (Run application)
2. Render the WebTV Page
3. Mobile scan the QRCode and then open the URL linking
4. Render the Mobile Page
5. Click the button and then re-render the content of WebTV

Sugar
-----
Patrick Wang written an interactive demo using Node.js and PHP.
Here is the [article](http://patw.idv.tw/blog/archives/566)

Frameworks and Library
----------------------

- Node.js
    - [Express](http://expressjs.com/)
    - [Swig](http://paularmstrong.github.io/swig/)
    - [Socket.io](http://socket.io/)
- Google Charts API
    - [QRCode Infographics](https://developers.google.com/chart/infographics/?hl=zh-TW)
- JavaScript [Math.UUID](http://www.broofa.com/Tools/Math.uuid.js) function
    - MIT and GPL license

License
-------
![ScreenShot](http://i.creativecommons.org/l/by-nc-sa/3.0/88x31.png)
All codes of this project is under [CC BY-NC-SA 3.0](http://creativecommons.org/licenses/by-nc-sa/3.0/)