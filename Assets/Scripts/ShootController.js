#pragma strict

var projectile : Rigidbody;
var projectile2 : Rigidbody;
var barrel : Transform;
var crosshair :Transform;
var display = false;

function Start () {
	Screen.showCursor = false;
}

function Update () {
	
	var ammocount :float = GameObject.Find("human_warship").GetComponent(ShipBehaviour).Ammo;
			
if ((Input.GetMouseButtonDown(0)) && (ammocount > 0))
	{
		transform.LookAt(crosshair);
	
		var clone : Rigidbody;
		clone = Instantiate(projectile, barrel.position , barrel.rotation);
		
		// Give the cloned object an initial velocity along the current 
		// object's Z axis
		//clone.velocity = transform.Translate(mousePos * 10);	
        clone.AddForce(barrel.forward * 5000);
	}
	
	if ((Input.GetMouseButtonDown(1)) && (ammocount > 0))
	{
		transform.LookAt(crosshair);
	
		var clone2 : Rigidbody;
		clone2 = Instantiate(projectile2, barrel.position , barrel.rotation);
		
		// Give the cloned object an initial velocity along the current 
		// object's Z axis
		//clone.velocity = transform.Translate(mousePos * 10);	
        clone2.AddForce(barrel.forward * 5000);
	}
	
	if(ammocount <= 0){
		display = true;
	}else{
		display = false;
	}
}

function OnGUI()
{	
	if(display == true)
	{
		GUI.Label(Rect(200,200,Screen.width,Screen.height),"YOU HAVE NO AMMO LEFT!");
	}
}