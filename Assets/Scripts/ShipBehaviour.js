public var moveSpeed : float = 10f;

private var prefabTimer : float = 0f;

public var AmmoPrefab : Rigidbody;
public var ShieldPrefab : Rigidbody;
public var HealthPrefab : Rigidbody;
public var DeathPrefab : Rigidbody;
public var EnemyPrefab : Rigidbody;

public var SpecialPrefab : Rigidbody;

private var Health : int = 10;
private var Shield : int = 10;
public var Ammo : int = 100;
public var Special : int = 2;

var HpBarTexture : Texture2D;
var ShieldBarTexture : Texture2D;

var guiammo : GUIText;
var guispecial : GUIText;

var hpBarLength : float;
var percentOfHp : float;

var shieldBarLength : float;
var percentOfShield :float;

var normalColor;
var shot : AudioClip;

function Start ()
{
	yield CreateVortexPrefabs();
}

function Update ()
{
	Move();	
   	AmmoCounter();   
   	
   	if(Health <= 0f)
   	{
   		Health=0f;
   		Application.LoadLevel("Exit");
   	}
	var barLenght = 10;
	hpBarLength = Health*barLenght;
	shieldBarLength = Shield*barLenght;
	
	guiammo.text = Ammo.ToString();
	guispecial.text = Special.ToString();
}

function AmmoCounter()
{
	if (Input.GetMouseButtonDown(0)){
		if(Ammo > 0)
		{
		audio.PlayOneShot(shot, 1);
		this.gameObject.renderer.material.color = Color.red;
		yield WaitForSeconds(.5);
		this.gameObject.renderer.material.color = Color.green;
		Ammo -= 1;
			
			
		}
	}if (Input.GetMouseButtonDown(1)){
		if(Ammo > 0)
		{	
			audio.PlayOneShot(shot, 1);
			Ammo -= 10;
		}
	}if ((Input.GetKeyDown(KeyCode.RightAlt)) || (Input.GetKeyDown(KeyCode.LeftAlt))){
		if(Special > 0)
		{
			Special -= 1;
			SpecialStrike();
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

function SpecialStrike(){

	var platformInstance6 : Rigidbody;
	    platformInstance6 = Instantiate(SpecialPrefab, transform.position, transform.rotation);
	
	var gameObjects : GameObject[];
    gameObjects =  GameObject.FindGameObjectsWithTag ("Enemy");
 
    for(var i = 0 ; i < gameObjects.length ; i ++)
        Destroy(gameObjects[i].gameObject);
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
normalColor = this.gameObject.renderer.material.color;
    if (other.tag == "DeathCube")
    {
       Health = 0;
       Shield = 0;
       
    }else if (other.tag == "HealthCube")
    {
    	if(Health < 10f)
       	Health = Health+1;
       	
    }else if (other.tag == "ShieldCube")
    {
        if(Shield < 10f)
       	Shield = Shield+1;
       	
    }else if (other.tag == "AmmoCube")
    {
        if(Ammo < 100f)
       	Ammo = Ammo+15;
       	
    }else if (other.tag == "Enemy")
    {
        Health = Health - 2;
        Shield = Shield - 3;
                
	   	if(Shield > 0)
	   	{
	   		Health = Health - 2;
        	Shield = Shield - 3;
	   	}else{
	   		Health = Health - 4;
        	Shield = 0;
	   	}
        
    }else if (other.tag == "EnemyProjectile")
    {
        Health = Health - 1;
        Shield = Shield - 2;
        
        if(Shield > 0)
	   	{
	   		Health = Health - 1;
        	Shield = Shield - 2;
	   	}else{
	   		Health = Health - 1;
        	Shield = 0;
	   	}
	   	this.gameObject.renderer.material.color = Color.red;
		yield WaitForSeconds(.5);
		this.gameObject.renderer.material.color = normalColor;
    }
    else if (other.tag == "BossProjectile")
    {
        Health = 0f;
       	Shield = 0f;
       	
       	this.gameObject.renderer.material.color = Color.red;
		yield WaitForSeconds(.5);
		this.gameObject.renderer.material.color = normalColor;
    }
}

function OnGUI(){     
    if (Health > 0)
    {
        GUI.DrawTexture(Rect(10, 10, hpBarLength, 10), HpBarTexture);
       
    }
   
    if (Shield > 0)
    {
        GUI.DrawTexture(Rect(10, 30, shieldBarLength, 10), ShieldBarTexture);
       
    }
}