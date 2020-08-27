


var thickness,wall;


var bullet, speed, weight; 


function setup() {
  createCanvas(1600, 400);
	speed=random(55,90);
	thickness=random(22,80);
	wall = createSprite(1200,200,thickness, height/2);
	  wall.shapeColor=color(80,80,80);
	  weight = random(30,52);
	  speed = random(223,321);
	  function hascollided(Lbulltet, Lwall)
	  {
		  bulletRightEdge=lbullet.x + lbullet.width;
		  wallLeftEdge=lwall.x;
		  if (bulletRightEdge>=wallLeftEdge)
		  {
			  return true
		  }
		  return false;
	  }
}


function draw() {
  background(0);

  damage = 0.5 x bulletweight x bulletspeed x bulletspeed/ (thickness X thickness X thickness);
  
  if(hascollided(bullet,wall))
  {
	  bullet.velocity =0;
	  var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);

	  if (damage>10) 
	  {
		  wall.shapeColor =color(255,0,0);
	  }

	  if (damage<10) 
	  {
		  wall.shapeColor=color(0,255,0);
	  }
  }
  
  drawSprites();
 
}
