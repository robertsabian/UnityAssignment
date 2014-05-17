#pragma strict
public var Boss : Rigidbody;
public var clone : Rigidbody;
var bosshit:int = 0;
var spawned = false;

public var score : float = 0f;

var arr = new Array ();
private var counter : int = 0;

function Start () {	
GeneratePattern();
}

function Update () {
	if(counter >= 4)
	{
		GeneratePattern();
		counter = 0;
		score += 100f;
	}
	
	if((score%100 == 0) && (score != 0) && (spawned == false))
	{
		SpawnBoss();
	}
}

function SpawnBoss()
{	
	spawned =true;
	var pos = transform.position;
	var rot = transform.rotation;
	
	pos.z = 100f;
	rot.x = 180f;
	
	clone = Instantiate(Boss, pos, rot);
}

function OnTriggerEnter(other: Collider)
{
	if (other.tag == "HealthCube")
    {
       	if(arr[counter] == "health")
       	{
       		counter++;
       	}
    }else if (other.tag == "ShieldCube")
    {
       	if(arr[counter] == "shield")
       	{
       		counter++;
       	}
    }else if (other.tag == "AmmoCube")
    {
    	if(arr[counter] == "ammo")
       	{
       		counter++;
       	}
    }else if (other.tag == "projectile2")
    {	
    	bosshit++;
    	
    	if(bosshit == 3){
    		destroyBoss();	
    	}
    }
}

function destroyBoss(){
	Destroy(clone);  
    score = score + 50;     
    spawned = false;
    bosshit = 0;
}

function GeneratePattern()
{
	var i : int = 0;
	var number : int = 0;

	for(i = 0; i < 4 ; i++)
	{	 
	 	number = Random.Range(1,4);
	 	
	 	if(number == 1){arr[i] = "health";}
	 	if(number == 2){arr[i] = "shield";}
	 	if(number == 3){arr[i] = "ammo";}	 	
	}
}

function OnGUI()
{	
	GUI.Label(Rect(10,450,Screen.width,Screen.height),"1: " + arr[0] + "\n2: " + arr[1] + "\n3: " + arr[2] + "\n4: " + arr[3] + "");	
	GUI.Label(Rect(500,10,Screen.width,Screen.height),"Score: " + score + "");	
}