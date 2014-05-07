#pragma strict


function Start () {
	Screen.showCursor = false;
}

function Update () {
	
	//get the SCREEN position of the mouse
	var mousePos = Input.mousePosition;
	
	//create a virtual 'plane' 10 further in from the camera
	mousePos.z = 10;
	
	//translate from pixels to world coordinates 
	var point = Camera.main.ScreenToWorldPoint(mousePos);
	
	//set the position of the cursor
	transform.position = point;

	
}