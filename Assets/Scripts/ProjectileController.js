#pragma strict
public var particle : Rigidbody;

var expl : AudioClip;

function Start () {
	GameObject.Destroy(this.gameObject, 1);
}

function Update () {

}

function OnTriggerEnter(other: Collider)
{
    if (other.tag == "Enemy")
    {
    
		audio.PlayOneShot(expl, 1);
    	var enemy = GameObject.FindWithTag("Enemy");
    	
    	var enemypos = enemy.transform.position;
    	var enemyrot = enemy.transform.rotation;
    	var proj : Rigidbody;
		proj = Instantiate(particle, enemypos , enemyrot);
		
        GameObject.Destroy(this.gameObject);
        GameObject.Destroy(other.gameObject);
        GameObject.Find("human_warship").GetComponent(PatternControler).score += 10f;
    }
}