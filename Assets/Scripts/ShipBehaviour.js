public var moveSpeed : float = 10f;
public var keyPressed : float = 0f;

private var prefabTimer : float = 0f;

public var AmmoPrefab : Rigidbody;
public var ShieldPrefab : Rigidbody;
public var HealthPrefab : Rigidbody;
public var DeathPrefab : Rigidbody;
public var EnemyPrefab : Rigidbody;

private var Health : float = 10f;
private var Shield : float = 10f;
public var Ammo : float = 100f;

function Start ()
{
	yield CreateVortexPrefabs();
}

function Update ()
{
	Move();
   	Jump();   	
   	AmmoCounter();   
   	
   	if(Health <= 0f)
   	{
   		Health=0f;
   		Application.LoadLevel("Exit");
   	}
}

function AmmoCounter()
{
	if (Input.GetMouseButtonDown(0)){
		if(Ammo > 0)
		{
			Ammo -= 1;
		}
	}
	if (Input.GetMouseButtonDown(1)){
		if(Ammo > 0)
		{
			Ammo -= 10;
		}
	}
}

function Move()
{
	    //if(Input.GetKey(KeyCode.UpArrow))
       // transform.Translate(Vector3.forward * moveSpeed * Time.deltaTime);
        
        if(Input.GetKey(KeyCode.LeftArrow)){
        transform.Translate(Vector3.left * moveSpeed * Time.deltaTime);
        }
        
        if(Input.GetKey(KeyCode.RightArrow)){
        transform.Translate(Vector3.right * moveSpeed * Time.deltaTime);
        }
        
        if(Input.GetKey(KeyCode.DownArrow)){
        transform.Translate(Vector3.down * moveSpeed * Time.deltaTime);
        }
        
        if(Input.GetKey(KeyCode.UpArrow)){
        transform.Translate(Vector3.up * moveSpeed * Time.deltaTime);
		}
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

function CreateVortexPrefabs(){
	while(true)
	{
     var number = Random.Range(1,81);
	 //var positionCreate = barrel.position.z + 10f;
	 var positionToCreate:Vector3;
	 
	 var maxX = Random.Range(-30,30);
	 var maxY = Random.Range(-20,20);
	 
	 positionToCreate = transform.position;
	 
	 positionToCreate.z+=40f;
	 positionToCreate.y = maxY;
	 positionToCreate.x = maxX;
	 
	 
	if(number <= 60)//death prefab
	{
		var platformInstance1 : Rigidbody;
	    platformInstance1 = Instantiate(DeathPrefab, positionToCreate, transform.rotation);
	    Destroy(platformInstance1.gameObject,10.0f);
	    
	}else if((number >= 66) && (number <= 68))//health prefab
	{
		var platformInstance2 : Rigidbody;
	    platformInstance2 = Instantiate(HealthPrefab, positionToCreate, transform.rotation);
	    Destroy(platformInstance2.gameObject,10.0f);
	    	
	}else if((number >= 68) && (number <= 70))//shield prefab
	{
		var platformInstance3 : Rigidbody;
	    platformInstance3 = Instantiate(ShieldPrefab, positionToCreate, transform.rotation);
	    Destroy(platformInstance3.gameObject,10.0f);
	    
	}else if((number >= 71) && (number <= 80))//shield prefab
	{
		var platformInstance4 : Rigidbody;
	    platformInstance4 = Instantiate(AmmoPrefab, positionToCreate, transform.rotation);
	    
	 Destroy(platformInstance4.gameObject,10.0f);
	}
	 
	 
	 
	 
	var positionToCreateEnemy:Vector3;
	 
	 var maxEX = Random.Range(-30,30);
	 var maxEY = Random.Range(-20,20);
	 
	 positionToCreateEnemy = transform.position;
	 
	 positionToCreateEnemy.z = 80f;
	 positionToCreateEnemy.y = maxEY;
	 positionToCreateEnemy.x = maxEX;

	 var platformInstance5 : Rigidbody;
	 platformInstance5 = Instantiate(EnemyPrefab, positionToCreateEnemy, transform.rotation);
	 Destroy(platformInstance5.gameObject,3.0f);
	yield WaitForSeconds(0.5);
	}
}

//function CreateEnemyPrefabs(){
//	while(true)
//	{
//	 //var positionCreate = barrel.position.z + 10f;
//	 var positionToCreateEnemy:Vector3;
//	 
//	 var maxEX = Random.Range(-30,30);
//	 var maxEY = Random.Range(-20,20);
//	 
//	 positionToCreateEnemy = transform.position;
//	 
//	 positionToCreateEnemy.z = 80f;
//	 positionToCreateEnemy.y = maxEY;
//	 positionToCreateEnemy.x = maxEX;
//
//	 var platformInstance4 : Rigidbody;
//	 platformInstance4 = Instantiate(EnemyPrefab, positionToCreateEnemy, transform.rotation);	    
//	
//	yield WaitForSeconds(0.2);
//	}
//}

function OnTriggerEnter(other: Collider)
{
    if (other.tag == "DeathCube")
    {
       Health = 0f;
       Shield = 0f;
       
    }else if (other.tag == "HealthCube")
    {
    	if(Health < 10f)
       	Health = Health+0.5f;
       	
    }else if (other.tag == "ShieldCube")
    {
        if(Shield < 10f)
       	Shield = Shield+1f;
       	
    }else if (other.tag == "AmmoCube")
    {
        if(Ammo < 100f)
       	Ammo = Ammo+15f;
       	
    }else if (other.tag == "Enemy")
    {
        Health = Health - 1f;
        Shield = Shield - 1.5f;
                
	   	if(Shield > 0)
	   	{
	   		Health = Health - 1f;
        	Shield = Shield - 1.5f;
	   	}else{
	   		Health = Health - 2f;
        	Shield = 0f;
	   	}
        
    }else if (other.tag == "EnemyProjectile")
    {
        Health = Health - 0.2f;
        Shield = Shield - 0.5f;
        
        if(Shield > 0)
	   	{
	   		Health = Health - 0.2f;
        	Shield = Shield - 0.5f;
	   	}else{
	   		Health = Health - 0.5f;
        	Shield = 0f;
	   	}
    }
//    else if (other.tag == "BossProjectile")
//    {
//        Health = 0f;
//       	Shield = 0f;
//    }
}

function OnGUI(){
    GUI.Label(Rect(10,10,Screen.width,Screen.height),"Health:" + Health + "");
    GUI.Label(Rect(10,30,Screen.width,Screen.height),"Shield:" + Shield + "");
    GUI.Label(Rect(10,50,Screen.width,Screen.height),"Ammo:" + Ammo + "");
}