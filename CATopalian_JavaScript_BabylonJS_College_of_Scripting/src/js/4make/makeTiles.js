// makeTiles.js

// makeTiles - makes the floor
// but it's very cpu intensive
// so we are NOT using it in scene anymore
function makeTiles(whichArray, whichItem, whichX, whichY)
{
    // left and right
    let xPos = whichX; //-110

    // up and down
    let yPos = whichY; // 0

    // back and forth
    let zPos = -125;

    let rows = 25;
    let columns = 25;

    let sizeX = 10;
    let sizeY = 0.1;
    let sizeZ = 10;

    let startingXPosition = xPos;

    // rows
    for (let j = 0; j < rows; j++)
    {
        // correct x position by subtracting the sizeX
        xPos -= sizeX;

        // columns
        for (let x = 0; x < columns; x++)
        {
            // add the sizeX to xPos
            xPos = xPos + sizeX;

            // create a mesh
            let theMesh = BABYLON.MeshBuilder.CreateBox(whichArray[whichItem].name, {
                width: sizeX,
                height: sizeY,
                depth: sizeZ
            }, scene);

            // set theMesh x position
            theMesh.position.x = xPos;

            // set theMesh y position
            theMesh.position.y = yPos;

            theMesh.position.z = zPos;

            // create a material
            let theMaterial = new BABYLON.StandardMaterial(whichArray[whichItem].nameOfMaterial, scene);

            // set the color of theMaterial
            theMaterial.diffuseColor = new BABYLON.Color3(whichArray[whichItem].colorR, whichArray[whichItem].colorG, whichArray[whichItem].colorB);

            if (textureSource == "offline")
            {
                theMaterial.diffuseTexture = new BABYLON.Texture(whichArray[whichItem].textureOffline);
            }
            if (textureSource == "online")
            {
                theMaterial.diffuseTexture = new BABYLON.Texture(whichArray[whichItem].urlOfTexture);
            }

            // no specular glare, by setting it to 0, 0, 0
            theMaterial.specularColor = new BABYLON.Color3(0.0, 0.0, 0.0);

            // apply theMaterial to theMesh
            theMesh.material = theMaterial;
        }

        xPos = startingXPosition;

        zPos += sizeZ;
    }
}

makeTiles(theTiles, 0, -110, 0);

makeTiles(theTiles, 0, -110, 20);

*/

// makeTiles(theTiles, 0, -110, 40);

//makeTiles(theTiles, 0, -110, 60);

//makeTiles(theTiles, 0, -110, 80);

//makeTiles(theTiles, 0, -110, 60);

//makeTiles(theTiles, 0, -110, 80);

//makeTiles(theTiles, 0, -110, 100);