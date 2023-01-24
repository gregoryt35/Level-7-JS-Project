    const ships = [];

    let aircraftCarrier = {
        name: "The Aircraft Carrier",
        length: 5,
        isHorizontal: false,
        location: 1, // location is determined by the rotation - if the ship is horizontal then it is the leftmost coordinate, if it is vertical than it is the topmost point
        hitLocations: [],
        isSunk: false
    };
    ships.push(aircraftCarrier);

    let battleShip = {
        name: "The Battle Ship",
        length: 4,
        isHorizontal: false,
        location: 2,
        hitLocations: [],
        isSunk: false
    };
    ships.push(battleShip);

    let destroyer = {
        name: "The Destroyer",
        length: 3,
        isHorizontal: false,
        location: 3,
        hitLocations: [],
        isSunk: false
    };
    ships.push(destroyer);

    let submarine = {
        name: "The Submarine",
        length: 3,
        isHorizontal: false,
        location: 4,
        hitLocations: [],
        isSunk: false
    };
    ships.push(submarine);

    let patrolBoat = {
        name: "The Patrol Boat",
        length: 2,
        isHorizontal: false,
        location: 5,
        hitLocations: [],
        isSunk: false
    };
    ships.push(patrolBoat);

    movePlayerShips();

function movePlayerShips() {
    if (!setupComplete) {
        let oldId = document.querySelector('#old').value;
        let newId = document.querySelector('#new').value;

        if (oldId === 1) {
            ships[aircraftCarrier].location = newId;
            ships[aircraftCarrier].isHorizontal = isHorizontal;
        }
        else if (oldId === 2) {
            ships[battleShip].location = newId;
            ships[battleShip].isHorizontal = isHorizontal;
        }
        else if (oldId === 3) {
            ships[destroyer].location = newId;
            ships[destroyer].isHorizontal = isHorizontal;
        }
        else if (oldId === 4) {
            ships[submarine].location = newId;
            ships[submarine].isHorizontal = isHorizontal;
        }
        else if (oldId === 5) {
            ships[patrolBoat].location = newId;
            ships[patrolBoat].isHorizontal = isHorizontal;
        }

        if (isHorizontal) {
            for (let i = 1; i <= 5; i++) {
                document.getElementById(id + i).style.backgroundColor = "gray";
            }
        }
        else {
            for (let i = 1; i <= 51; i += 10) {
                document.getElementById(id + i).style.backgroundColor = "gray";
            }
        }

    }
}

function checkLocation(id) {
    if (!setupComplete) {
        if (document.getElementById(id).style.backgroundColor === "gray") {
            return true;
        }
        return false;
    }
}