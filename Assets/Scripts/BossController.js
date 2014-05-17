#pragma strict

public var projectile : Rigidbody;
public var barrel : Transform;

var clone : Rigidbody;
clone = GameObject.Find("human_warship").GetComponent(PatternControler).clone;

function Start () {
	shoot();
	Move();
}

function Update () {

}

function Move()
{	var number:int;
	while(true)
    {  		
		number = Random.Range(1,5);
		yield WaitForSeconds(2f);
    }    
    		
		if(number == 1){	
			clone.transform.Translate(Vector3.left * 100 * Time.deltaTime);
        }
        
        if(number == 2){
        	clone.transform.Translate(Vector3.right * 100 * Time.deltaTime);
        }
        
        if(number == 3){
        	clone.transform.Translate(Vector3.up * 100 * Time.deltaTime);
        }
        
        if(number == 4){ 
        	clone.transform.Translate(Vector3.down * 100 * Time.deltaTime);
		}		
}

function shoot()
{		//var pos = GameObject.Find("Main Camera").transform;
		//barrel.transform.LookAt(ship);
		
		 while(true)
    {
		var proj : Rigidbody;
		proj = Instantiate(projectile, barrel.position , barrel.rotation);
			
			// Give the cloned object an initial velocity along the current 
			// object's Z axis
		//clone.transform.Translate(Vector3.forward * 100 * Time.deltaTime);
		proj.AddForce(barrel.forward * -5000);
		Destroy(proj.gameObject,3.0f);
		yield WaitForSeconds(1f);
    }
}