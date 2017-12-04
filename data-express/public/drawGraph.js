    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    // ctx.fillStyle = "#FF0000";
    // ctx.fillRect(0,0,150,75);
    
    var question1 = [((q1_a1/userCount)*canvas.width), ((q1_a2/userCount)*canvas.width), ((q1_a3/userCount)*canvas.width)];
    var question2 = [((q2_a1/userCount)*canvas.width), ((q2_a2/userCount)*canvas.width), ((q2_a3/userCount)*canvas.width)];
    var question3 = [((q3_a1/userCount)*canvas.width), ((q3_a2/userCount)*canvas.width), ((q3_a3/userCount)*canvas.width)];
    
   
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0,10,question1[0],(canvas.height-15)/3-10);
    ctx.fillStyle = "#00ff00";
    ctx.fillRect(0,canvas.height/3+10, question2[0], (canvas.height-15)/3-10);
    ctx.fillStyle = "#0000ff";
    ctx.fillRect(0,(canvas.height*2/3)+10, question3[0], (canvas.height-15)/3-10);
    
    
    ctx.fillStyle = "#fab";
    ctx.fillRect(question1[0],10,question1[1],(canvas.height-15)/3-10);
    ctx.fillStyle = "#7AFF6E";
    ctx.fillRect(question2[0],canvas.height/3+10, question2[1], (canvas.height-15)/3-10);
    ctx.fillStyle = "#0df";
    ctx.fillRect(question3[0],(canvas.height*2/3)+10,question3[1], (canvas.height-15)/3-10);
    
    ctx.fillStyle = "#b00";
    ctx.fillRect(question1[1]+question1[0],10,question1[2],(canvas.height-15)/3-10);
    ctx.fillStyle = "#37994A";
    ctx.fillRect(question2[1]+question2[0],canvas.height/3+10, question2[2], (canvas.height-15)/3-10);
    ctx.fillStyle = "#00C1FF";
    ctx.fillRect(question3[1]+question3[0],(canvas.height*2/3)+10, question3[2], (canvas.height-15)/3-10);
