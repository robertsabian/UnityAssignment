public var moveSpeed : float = 10f;
public var keyPressed : float = 0f;
private var releaseTimer : float = 0f;
private var released : boolean = false;
public var barrel : Transform;

private var prefabTimer : float = 0f;

public var NormalPrefab : Rigidbody;
public var ShieldPrefab : Rigidbody;
public var HealthPrefab : Rigidbody;
public var DeathPrefab : Rigidbody;


function Start ()
{
	yield CreatePrefabs();
}

function Update ()
{
	Move();
   	Jump();
   	
   	//prefabTimer = prefabTimer + 1f;     	
	//if( prefabTimer == 100f)
	//{
	//	CreatePrefabs();
	//	prefabTimer = 0f;
	//}
}

function Move()
{
	    //if(Input.GetKey(KeyCode.UpArrow))
       // transform.Translate(Vector3.forward * moveSpeed * Time.deltaTime);
        
        if(Input.GetKey(KeyCode.LeftArrow))
        transform.Translate(Vector3.left * (moveSpeed/2) * Time.deltaTime);
        
        if(Input.GetKey(KeyCode.RightArrow))
        transform.Translate(Vector3.right * (moveSpeed/2) * Time.deltaTime);
}

function Jump(){
	    if(Input.GetKeyDown(KeyCode.Space))
	    {
	        //keyPressed = keyPressed + 0.1f;
	        rigidbody.AddForce(Vector3(0,5,0),ForceMode.Impulse);
	    }
	    if(Input.GetKeyUp(KeyCode.Space))
	    {
	        //keyPressed = keyPressed + 0.1f;
	        rigidbody.AddForce(Vector3(0,-10,0),ForceMode.Impulse);
	    }    
}

function CreatePrefabs(){
	while(true)
	{
     var number = Random.Range(1,91);
	 //var positionCreate = barrel.position.z + 10f;
	 var positionToCreate:Vector3;
	 
	 positionToCreate = transform.position;
	 
	 positionToCreate.z+=10f;
	 positionToCreate.y = 9.465888f;
	 
	 
	if(number <= 60)//normal prefab
	{
		var platformInstance1 : Rigidbody;
	    platformInstance1 = Instantiate(NormalPrefab, positionToCreate, transform.rotation);
	    
	}else if((number >= 61) && (number <= 70))//shield prefab
	{
		var platformInstance2 : Rigidbody;
	    platformInstance2 = Instantiate(ShieldPrefab, positionToCreate, transform.rotation);
	    	
	}else if((number >= 71) && (number <= 80))//health prefab
	{
		var platformInstance3 : Rigidbody;
	    platformInstance3 = Instantiate(HealthPrefab, positionToCreate, transform.rotation);
	    
	}else if((number >= 81) && (number <= 90))//death prefab
	{
		var platformInstance4 : Rigidbody;
	    platformInstance4 = Instantiate(DeathPrefab, positionToCreate, transform.rotation);
	    
	}
	yield WaitForSeconds(1.0);
	}
}