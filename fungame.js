document.addEventListener('DOMContentLoaded', function() {
    $('#yes_button').hide();
    $('#no_button').hide();
    $('#ok_button').hide();

    var pictures = ["公主","規","暴龍","油畫","空氣","俠盜","時鐘","牙線","橘子","推","貨櫃","溪","面紙","雨傘","衣櫥",
                    "鼠","丟","寫","死","法條","手錶","鉛筆","書","丘","珠寶","滑雪","紐西蘭","埃及","富","吉他","豎笛"];
    var blue_kid_number = 8;
    var red_kid_number = 7;


   
    for (j=0; j<5; j++){

        var tr = document.createElement("tr");
        tr.className = "row";
       
        
        for (i = 0; i < 5; i++) {            
            var number = Math.floor(Math.random() * pictures.length);

            var td = document.createElement("td");
            td.setAttribute('id', j*5 + i + 1 );
            td.setAttribute('style', "position:relative;" );
            
            var div = document.createElement("div");
            div.setAttribute('class', "text");

            var t = document.createTextNode(pictures[number]);  
            div.appendChild(t);

            var a = document.createElement("a");
            a.setAttribute('id','a' + j + "_" + i);

            
            var img = document.createElement("img");
            img.setAttribute('id','img' + j + "_" + i);
            img.src = "board0.png";
            
            a.appendChild(img);
            a.appendChild(div); 
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
        $(this).children("img").attr("style","z-index: 1");
        $(this).attr("style","cursor: default;");
        $(this).off('click');
        $('#blue_kid_number').html(blue_kid_number--);
    
        if (blue_kid_number === -1) {
            $('#alert_win').html("恭喜藍隊獲勝!!!");
            $("a").unbind("click");
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
        $(this).children("img").attr("style","z-index: 1");
        $(this).attr("style","cursor: default;");
        $(this).off('click');
        $('#red_kid_number').html(red_kid_number--);

        if (red_kid_number === -1) {
            $('#alert_win').html("恭喜紅隊獲勝!!!");
            $("a").unbind("click");
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
        $(this).children("img").attr("style","z-index: 1");
        $(this).attr("style","cursor: default;");
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
        $(this).children("img").attr("src","boom_n.png");
        $(this).children("img").attr("style","z-index: 1");
        $(this).off('click');
        document.body.background = "boom.jpg" 
        document.body.setAttribute("style","z-index:4");
       
     
        if ($('#blue_or_red').html() === "紅隊回合!"){
            $('#alert_lose').html("紅隊落敗...");
        }
        else{
            $('#alert_lose').html("藍隊落敗...");
        }
        $("a").unbind("click");
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
            td.setAttribute('class','answer_td');
            var img = document.createElement("img");
            img.setAttribute('id', 'answer_img');

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
        $('#question').show();
        $('#yes_button').show();
        $('#no_button').show();
        $('#answer_button').attr('disabled', true);
    }

    var x = window.matchMedia("(max-width: 550px)")

    $('#yes_button').on('click', function(){
        $('#yes_button').hide();
        $('#no_button').hide();
        $('#question').hide();
        $('#table2').show();
        $('#ok_button').show();
        if (x.matches) { 
            $('#answer_background').show();
          }
        
    });

    $('#no_button').on('click', function(){
        $('#yes_button').hide();
        $('#no_button').hide();
        $('#question').hide();
        $('#answer_button').attr('disabled', false);
    });

    $('#ok_button').on('click', function(){
        $('#ok_button').hide();
        $('#table2').hide();
        $('#answer_background').hide();
        $('#answer_button').attr('disabled', false);
    });
   
});

