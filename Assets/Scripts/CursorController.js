#pragma strict

var cam1 : Camera;
var cam2 : Camera;
var cockpit : GameObject;

function Start () {
	Screen.showCursor = false;
	
	cam1.enabled = true;
    cam2.enabled = false;
    cockpit.active = false;
}

function Update () {
	
	//get the SCREEN position of the mouse
	var mousePos = Input.mousePosition;
	//create a virtual 'plane' 10 further in from the camera
	mousePos.z = 100;
	
	//translate from pixels to world coordinates 
	   	           	
   	if (Input.GetKeyDown(KeyCode.C)){
		cam1.enabled = !cam1.enabled;
		cam2.enabled = !cam2.enabled;
		
		if(cam1.enabled == true){
			//var point = Camera.mainCamera.ScreenToWorldPoint(mousePos)
			cockpit.active = false;
			//GameObject.FindGameObjectWithTag("Ship").gameObject.renderer.enabled = true;
		}
		else
		{
			//var point = Camera.mainCamera.ScreenToWorldPoint(mousePos)
			cockpit.active = true;
//			GameObject.FindGameObjectWithTag("Ship").gameObject.renderer.enabled = false;
			
		}
	}
	var point = Camera.mainCamera.ScreenToWorldPoint(mousePos);
	//set the position of the cursor
	transform.position = point;
}