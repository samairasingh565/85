canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");


car2_width = 70;
car2_height = 100;

background_image = "parkingLot.jpg";
car2_image = "car2.png";
car2_x = 10;
car2_y = 100;

function add() 
{
    background_img_tag = new Image();
    background_img_tag.onload = upload_background;
    background_img_tag.src = background_image;
    car2_img_tag = new Image();
    car2_img_tag.onload = upload_car2;
    car2_img_tag.src = car2_image;
}

function upload_background() 
{
    ctx.drawImage(background_img_tag,0,0,canvas.width,canvas.height);
}

function upload_car2() 
{
    ctx.drawImage(car2_img_tag,car2_x,car2_y,car2_width,car2_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e) 
{
    keypressed = e.keyCode;
    console.log(keypressed);
    if(keypressed == '38')
    {
        up();
        console.log("up");
    }
    if(keypressed == '40')
    {
        down();
        console.log("down");
    }
    if(keypressed == '37')
    {
        left();
        console.log("left");
    }
    if(keypressed == '39')
    {
        right();
        console.log("right");
    }
    
}
function up() 
{
    if(car2_y >= 0){
        car2_y = car2_y-10;
        console.log("when up arrow key pressed, x = "+car2_x+" y = "+car2_y);
        upload_background();
        upload_car2();
    }};
 function down() 
 {
        if(car2_y >= 0){
            car2_y = car2_y+10;
            console.log("when up arrow key pressed, x = "+car2_x+" y = "+car2_y);
            upload_background();
            upload_car2();
        }};
        function left() 
        {
            if(car2_x >= 0){
                car2_x = car2_x-10;
                console.log("when up arrow key pressed, x = "+car2_x+" y = "+car2_y);
                upload_background();
                upload_car2();
            }};
        function right() {
                if(car2_x >= 0){
                    car2_x = car2_x+10;
                    console.log("when up arrow key pressed, x = "+car2_x+" y = "+car2_y);
                    upload_background();
                    upload_car2();
                }}
