document.addEventListener('DOMContentLoaded', function() {
    var pictures = [];
    var blue_kid_number = 8;
    var red_kid_number = 7;

    for(var i=1; i<26; i++){
        
        var board = "board" + i + ".png";
        pictures.push(board);
    }

    for (j=0; j<5; j++){

        var tr = document.createElement("tr");
        tr.className = "row";

       
        
        for (i = 0; i < 5; i++) {            
            var number = Math.floor(Math.random() * pictures.length);

            var td = document.createElement("td");
            td.setAttribute('id', j*5 + i + 1 );

            var a = document.createElement("a");
            a.setAttribute('id','a' + j + "_" + i);

            
            var img = document.createElement("img");
            img.setAttribute('id','img' + j + "_" + i);
            img.src = pictures[number];
            
            a.appendChild(img);
            td.appendChild(a); 
            tr.appendChild(td);
            pictures.splice(number, 1);
         
        }

        document.getElementById('table').appendChild(tr);

    }

    var all_a = ["a0_0","a0_1","a0_2","a0_3","a0_4",
                 "a1_0","a1_1","a1_2","a1_3","a1_4",
                 "a2_0","a2_1","a2_2","a2_3","a2_4",
                 "a3_0","a3_1","a3_2","a3_3","a3_4",
                 "a4_0","a4_1","a4_2","a4_3","a4_4",]

    for (i = 0; i < 9; i++) {            
        var number = Math.floor(Math.random() * all_a.length);
        var a = all_a[number]

        document.getElementById(a).setAttribute('class','blue')
        all_a.splice(number, 1);
    
    }

    for (i = 0; i < 8; i++) {            
        var number = Math.floor(Math.random() * all_a.length);
        var a = all_a[number]

        document.getElementById(a).setAttribute('class','red')
        all_a.splice(number, 1);
    
    }

    for (i = 0; i < 7; i++) {            
        var number = Math.floor(Math.random() * all_a.length);
        var a = all_a[number]

        document.getElementById(a).setAttribute('class','none')
        all_a.splice(number, 1);
    
    }

    for (i = 0; i < 1; i++) {            
        var number = Math.floor(Math.random() * all_a.length);
        var a = all_a[number]

        document.getElementById(a).setAttribute('class','boom')
        all_a.splice(number, 1);
    
    }

    $('.blue').on('click', function(){
        $(this).children("img").attr("src","blue_flower.png");
        $(this).off('click');
        $('#blue_kid_number').html(blue_kid_number--);
    
        if (blue_kid_number === -1) {
            $('#alert_win').html("恭喜藍隊獲勝!!!");
        }
        else if ($('#blue_or_red').html() === "藍隊回合!"){
            $('#alert').html("恭喜找到藍色小花!!!");
        }
        else{
            $('#alert').html("QQ~找成藍小花ㄌ...");
            $('#blue_or_red').html("藍隊回合!");
        }
        setTimeout(stop, 1400);
        function stop(){
            $('#alert').html("");
        }
        
    });

    $('.red').on('click', function(){
        $(this).children("img").attr("src","red_flower.png");
        $(this).off('click');
        $('#red_kid_number').html(red_kid_number--);

        if (red_kid_number === -1) {
            $('#alert_win').html("恭喜紅隊獲勝!!!");
        }

        else if ($('#blue_or_red').html() === "紅隊回合!"){
            $('#alert').html("恭喜找到紅色小花!!!");
        }

        else{
            $('#alert').html("QQ~找成紅小花ㄌ...");
            $('#blue_or_red').html("紅隊回合!");
        }
        setTimeout(stop, 1400);
        function stop(){
            $('#alert').html("");
        }
    
    });

    $('.none').on('click', function(){
        $(this).children("img").attr("src","shit.png");
        $(this).off('click');
        $('#alert').html("找到屎啦哈哈哈~~~");
        if ($('#blue_or_red').html() === "藍隊回合!") {
            $('#blue_or_red').html("紅隊回合!");
        }

        else{
            $('#blue_or_red').html("藍隊回合!");
        }
        setTimeout(stop, 1400);
        function stop(){
            $('#alert').html("");
        }
    });

    $('.boom').on('click', function(){
        $(this).children("img").attr("src","http://img.juimg.com/tuku/yulantu/130505/235075-1305051I34235.jpg");
        $(this).off('click');
        $("#boom_background").css("display","inline");
     
        if ($('#blue_or_red').html() === "紅隊回合!"){
            $('#alert_lose').html("紅隊落敗...");
        }
        else{
            $('#alert_lose').html("藍隊落敗...");
        }
    });

    
    $('#change_red').on('click', function(){
        $('#blue_or_red').html("紅隊回合!");
    });

    $('#change_blue').on('click', function(){
        $('#blue_or_red').html("藍隊回合!");
    });
   

    var array = [];

    for(var i=1; i<26; i++){
        var a = $("#" + i).children("a").attr("class");
        array.push(a);
    }
    
    
    for (j=0; j<5; j++){

        var tr = document.createElement("tr");
        tr.className = "row";

        for (i = 0; i < 5; i++) {   

            var td = document.createElement("td");
            var img = document.createElement("img");
            img.style = "width:30px; height:30px;"

            if(array[j*5 + i] === "blue"){
                img.setAttribute('src','blue.png');
                td.appendChild(img);
            }
            
            else if(array[j*5 + i] === "red"){
                img.setAttribute('src','red.png');
                td.appendChild(img);
            }

            else if(array[j*5 + i] === "none"){
                img.setAttribute('src','none.png');
                td.appendChild(img);
            }

            else if(array[j*5 + i] === "boom"){
                img.setAttribute('src','boom.png');
                td.appendChild(img);
            }

            tr.appendChild(td);
       
        }

        document.getElementById('table2').appendChild(tr);

    }

    document.querySelector("#answer_button").onclick = function(){
        var a = document.getElementById('table2');
        if(a.style.display === "none"){
            a.style.display = "inline";
        }
        else{
            a.style.display = "none";
        }
        
    }

});