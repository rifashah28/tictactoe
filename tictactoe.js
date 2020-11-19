

rect(50,50,150,150);

line(100,50,100,200);

line(150,50,150,200);

line(50,100,200,100);

line(50,150,200,150);



var player1="Eric";

var player2="Kyle";

var currentPlayer=player1;



var r1c1 = "";

var r1c2 = "";

var r1c3 = "";

var r2c1 = "";

var r2c2 = "";

var r2c3 = "";

var r3c1 = "";

var r3c2 = "";

var r3c3 = "";



var check_boundry = function(X,Y){

    if (X < 50 || X>200 || Y<50 || Y>200){

        println("Click within the game boundary ");

        return false;

    }

    else {

        return true;

    }

};



var switch_player = function(){

    if (currentPlayer === player1){

        currentPlayer = player2;

    }

    else{

        currentPlayer = player1;

    }

    println("Your turn "+currentPlayer);

};




var register_move = function(X,Y,player) {

    if (X > 50 && X < 100 && Y > 50 && Y < 100) {
        r1c1 = currentPlayer;    
      
    }
    
    if (X > 100 && X < 150 && Y > 50 && Y < 100) {
        r2c1 = currentPlayer;
    }
    
    if (X > 150 && X < 200 && Y > 50 && Y < 100) {
        r3c1 = currentPlayer;
    }
    
     if (X > 50 && X < 100 && Y > 100 && Y < 150) {
        r1c2 = currentPlayer;
    }

     if (X > 100 && X < 150 && Y > 100 && Y < 150) {
        r2c2 = currentPlayer;
    }
    
     if (X > 150 && X < 200 && Y > 100 && Y < 150) {
        r3c2 = currentPlayer;
    }
    
     if (X > 50 && X < 100 && Y > 150 && Y < 200) {
         
        r1c3 = currentPlayer;
    }
    
     if (X > 50 && X < 150 && Y > 150 && Y < 200) {
        r2c3 = currentPlayer;
    }
    
     if (X > 50 && X < 200 && Y > 150 && Y < 200) {
        r3c3 = currentPlayer;
    }
    
    if (player===player1){
        fill(255, 0, 0);

        ellipse(mouseX, mouseY, 20, 20);    

    }

    else{

        fill(64, 189, 55);

        ellipse(mouseX, mouseY, 20, 20); 

    }

    

};

var check_occupied = function(X,Y) {
    if (X > 50 && X < 100 && Y > 50 && Y < 100 && r1c1!==""){
        return true;
      
    }
    
    if (X > 100 && X < 150 && Y > 50 && Y < 100 && r2c1!=="") {
        return true;
    }
    
    if (X > 150 && X < 200 && Y > 50 && Y < 100 && r3c1!=="") {
        return true;
    }
    
     if (X > 50 && X < 100 && Y > 100 && Y < 150 && r1c2!=="") {
        return true;
    }

     if (X > 100 && X < 150 && Y > 100 && Y < 150 && r2c2!=="") {
        return true;
    }
    
     if (X > 150 && X < 200 && Y > 100 && Y < 150 && r3c2!=="") {
        return true;
    }
    
     if (X > 50 && X < 100 && Y > 150 && Y < 200 && r1c3!=="") {
         return true;
    }
    
     if (X > 50 && X < 150 && Y > 150 && Y < 200 && r2c3!=="") {
        return true;
    }
    
     if (X > 50 && X < 200 && Y > 150 && Y < 200 && r3c3!=="") {
        return true;
    }
    return false;
};



var check_triplet=function(c1,c2,c3){

    if (c1 !== "" && c1===c2 && c3===c2){

        return true;

    }

    return false;

};

var check_win = function() {
    if (r1c1 !== "" && r1c1===r1c2 && r1c2===r1c3) {
       return true;
      
    }
    
    if (r2c1 !== "" && r2c1===r2c2 && r2c2===r2c3) {
        return true;    
    
    } 
    if (r3c1 !== "" && r3c1===r3c2 && r3c2===r3c3) {
       return true; 
    }
        
    if (r1c1 !== "" && r1c1===r2c1 && r2c1===r3c1) {
        return true;
    }
    
    if (r1c2 !== "" && r1c2===r2c2 && r2c2===r3c2) {
        return true;
    }
    
    if (r1c3 !== "" && r1c3===r2c3 && r2c3===r3c3) {
        return true;
    }
    
    if (r1c1 !== "" && r1c1===r2c2===r3c3) {
        return true;
    }
    
    if (r3c1 !== "" && r3c1===r2c2===r1c3) {
        return true;
    }
    return false;
};


var  won=false;


mouseClicked = function() {

    if (won === true) {
        println ("Give up man! Game is already over");
        return;
    }
    
    
    if (check_boundry(mouseX,mouseY) === false){

        return;

    }
    
    if (check_occupied(mouseX,mouseY) === true){
    println("Cell is occupied");
        return;
    
    }
    



    

    register_move(mouseX,mouseY,currentPlayer);
      switch_player();
    
check_win();
    if(check_win()===true){
        won=true;
    println (currentPlayer+" won!");
    return;
    
    }
  

};
