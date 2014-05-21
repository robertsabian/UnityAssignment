#pragma strict
public var Boss : Rigidbody;
public var clone : Rigidbody;
var bosshit:int = 0;
var spawned = false;

var guitext : GUIText;

public var score : int = 0;

var arr = new Array ();
private var counter : int = 0;

var HealthTexture : Texture2D;
var ShieldTexture : Texture2D;
var AmmoTexture : Texture2D;

function Start () {	
GeneratePattern();
}

function Update () {
	if(counter >= 4)
	{
		GeneratePattern();
		counter = 0;
		score += 100;
	}
	
	if((score%500 == 0)	&& (score != 0) && (spawned == false))
	{
		SpawnBoss();
	}
	
	guitext.text = score.ToString();
	
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
       		arr[counter] = "";
       		counter++;
       	}
    }else if (other.tag == "ShieldCube")
    {
       	if(arr[counter] == "shield")
       	{
       		arr[counter] = "";
       		counter++;
       	}
    }else if (other.tag == "AmmoCube")
    {
    	if(arr[counter] == "ammo")
       	{
       		arr[counter] = "";
       		counter++;
       	}
    }
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
	if (arr[0] == "health")
    GUI.DrawTexture(Rect(270, 10, 50, 50), HealthTexture);
    else if (arr[0] == "shield")
    GUI.DrawTexture(Rect(270, 10, 50, 50), ShieldTexture);
    else if (arr[0] == "ammo")
    GUI.DrawTexture(Rect(270, 10, 50, 50), AmmoTexture);
    
    if (arr[1] == "health")
    GUI.DrawTexture(Rect(340, 10, 50, 50), HealthTexture);
    else if (arr[1] == "shield")
    GUI.DrawTexture(Rect(340, 10, 50, 50), ShieldTexture);
    else if (arr[1] == "ammo")
    GUI.DrawTexture(Rect(340, 10, 50, 50), AmmoTexture);
    
    if (arr[2] == "health")
    GUI.DrawTexture(Rect(410, 10, 50, 50), HealthTexture);
    else if (arr[2] == "shield")
    GUI.DrawTexture(Rect(410, 10, 50, 50), ShieldTexture);
    else if (arr[2] == "ammo")
    GUI.DrawTexture(Rect(410, 10, 50, 50), AmmoTexture);
    
    if (arr[3] == "health")
    GUI.DrawTexture(Rect(480, 10, 50, 50), HealthTexture);
    else if (arr[3] == "shield")
    GUI.DrawTexture(Rect(480, 10, 50, 50), ShieldTexture);
    else if (arr[3] == "ammo")
    GUI.DrawTexture(Rect(480, 10, 50, 50), AmmoTexture);
    
}