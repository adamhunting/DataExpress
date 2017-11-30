    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0,0,150,75);


    var question1 = [100, 100, 100];
    var question2 = [123, 123, 123];
    var question3 = [23, 23, 23];

    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0,0,question1[0],height/3-5);
    ctx.fillStyle = "#00ff00";
    ctx.fillRect(0,height/3, question2[0], height/3-5);
    ctx.fillStyle = "#0000ff";
    ctx.fillRect(0,(height*2/3), question3[0], height/3-5);


    ctx.fillStyle = "#345";
    ctx.fillRect(question1[0],0,question1[1],height/3-5);
    ctx.fillStyle = "#ccc";
    ctx.fillRect(question2[0],height/3, question2[1], height/3-5);
    ctx.fillStyle = "#0df";
    ctx.fillRect(question3[0],(height*2/3),question3[1], height/3-5);

    ctx.fillStyle = "#fab";
    ctx.fillRect(question1[1]+question1[0],0,question1[2],height/3-5);
    ctx.fillStyle = "#b00";
    ctx.fillRect(question2[1]+question2[1],height/3, question2[2], height/3-5);
    ctx.fillStyle = "#add";
    ctx.fillRect(question3[1]+question3[2],(height*2/3), question3[2], height/3-5);