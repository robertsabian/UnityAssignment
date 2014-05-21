#pragma strict

public var projectile : Rigidbody;
public var barrel : Transform;
var bosshit:int = 0;


var clone : Rigidbody;

private var number:int;
private var prevnumber:int;

function Start () {
	shoot();
	Move();
}

function Update () {

		if(number == 1){	
			clone.transform.Translate(Vector3.left * 20 * Time.deltaTime);
        }
        
        if(number == 2){
        	clone.transform.Translate(Vector3.right * 20 * Time.deltaTime);
        }
        
        if(number == 3){
        	clone.transform.Translate(Vector3.up * 20 * Time.deltaTime);
        }
        
        if(number == 4){ 
        	clone.transform.Translate(Vector3.down * 20 * Time.deltaTime);
		}		
    		

}

function Move()
{	
	while(true)
    {  
    	GenerateRandom();  		
		yield WaitForSeconds(1f);
    }    		
}

function GenerateRandom()
{
	prevnumber = number;
	number = Random.Range(1,5);
		
	if(prevnumber == number){
		GenerateRandom();
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

function OnTriggerEnter(other: Collider)
{
	 if (other.tag == "projectile2")
    {	
    	bosshit++;
    	
    	if(bosshit >= 12){
    		destroyBoss();	
    	}
    }
}



function destroyBoss(){
	Destroy(GameObject.FindWithTag("boss"));  
    GameObject.Find("human_warship").GetComponent(PatternControler).score += 100;    
    GameObject.Find("human_warship").GetComponent(PatternControler).spawned = false;
    bosshit = 0;
}
