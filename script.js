// known bug; you can "EXAMINE" items that you haven't discovered yet

const rooms = [
  "foyer",
  "hallway",
  "study",
  "lab",
  "privateQuarters",
  "diningHall",
];
var currentRoom = rooms[0];
console.log(currentRoom);
console.log(username);
var username = "";
var gameStarted = false;

// room desc
const enterFoyer = document.getElementById("enterFoyer").innerHTML;
const enterHallway = document.getElementById("enterHallway").innerHTML;
const enterStudy = document.getElementById("enterStudy").innerHTML;
const enterLab = document.getElementById("enterLab").innerHTML;
const enterPrivateQuarters = document.getElementById(
  "enterPrivateQuarters"
).innerHTML;
const enterDiningHall = document.getElementById("enterDiningHall").innerHTML;

// room return text
const returnFoyer = document.getElementById("returnFoyer").innerHTML;
const returnHallway = document.getElementById("returnHallway").innerHTML;
const returnStudy = document.getElementById("returnStudy").innerHTML;
const returnLab = document.getElementById("returnLab").innerHTML;
const returnQuarters = document.getElementById("returnQuarters").innerHTML;
const returnDiningHall = document.getElementById("returnDiningHall").innerHTML;

// error text
const notThere = document.getElementById("notThere").innerHTML;
const cantSee = document.getElementById("cantSee").innerHTML;
const error = document.getElementById("error").innerHTML;

// examine desc
const examineDoors = document.getElementById("examineDoors").innerHTML;
const examineSymbols = document.getElementById("examineSymbols").innerHTML;
const examineJournal = document.getElementById("examineJournal").innerHTML;
const examinePainting = document.getElementById("examinePainting").innerHTML;
const examineMap = document.getElementById("examineMap").innerHTML;
const readJournalAgain = document.getElementById("readJournalAgain").innerHTML;
const readJournal = document.getElementById("readJournal").innerHTML;
const examineCabinet = document.getElementById("examineCabinet").innerHTML;
const unlockCabinet = document.getElementById("unlockCabinet").innerHTML;

// flavor text
const flavorStairs = document.getElementById("flavorStairs").innerHTML;
const flavorRain = document.getElementById("flavorRain").innerHTML;
const flavorNothing = document.getElementById("flavorNothing").innerHTML;
const noHope = document.getElementById("noHope").innerHTML;
const noWayOut = document.getElementById("noWayOut").innerHTML;
const flavorTTRPGS = document.getElementById("flavorTTRPGS").innerHTML;
const unknownStill = document.getElementById("unknownStill").innerHTML;
const keyAcquired = document.getElementById("keyAcquired").innerHTML;

// room logic
var foyerVisited = false;
var hallwayVisited = false;
var studyVisited = false;
var labVisited = false;
var privateQuartersVisited = false;
var diningHallVisited = false;

// items
var ironKey = false;
const map = false;

function gameStart(e) {
  if (event.key === "Enter" || e.keyCode === 13) {
    username = e.value.toUpperCase();
    console.log(username);
    var valueEntered = e.value.toUpperCase();

    if (
      valueEntered !== " " &&
      valueEntered !== "undefined" &&
      valueEntered.length >= 1
    ) {
      document.getElementById("intro").classList.remove("hide");
      document.getElementById("name").classList.add("hide");
      document.getElementById("enterFoyer").classList.remove("hide");
      document.getElementById("playerInput").classList.remove("hide");
      event.preventDefault();
      e.value = "";
      gameStarted = true;
      foyerVisited = true;
      // return username;
    }
  }
}
function enter(e) {
  var valueEntered = e.value.toUpperCase();
  document.getElementById("intro").classList.add("hide");

  if (event.key === "Enter" || e.keyCode === 13) {
    event.preventDefault();
    e.value = "";
    // --------------------------------------NORTH------------------------------------------
    if (valueEntered === "NORTH" || valueEntered === "GO NORTH") {
      if (currentRoom === rooms[0]) {
        if (hallwayVisited === true) {
          currentRoom = rooms[1];
          console.log(currentRoom);
          document
            .getElementById("playerInput")
            .insertAdjacentHTML("beforebegin", ">" + valueEntered);
          document
            .getElementById("playerInput")
            .insertAdjacentHTML("beforebegin", returnHallway);
        } else if (hallwayVisited === false) {
          currentRoom = rooms[1];
          console.log(currentRoom);
          hallwayVisited = true;
          document
            .getElementById("playerInput")
            .insertAdjacentHTML("beforebegin", ">" + valueEntered);
          document
            .getElementById("playerInput")
            .insertAdjacentHTML("beforebegin", enterHallway);
        }
      } else if (currentRoom === rooms[1]) {
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", ">" + valueEntered);
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", flavorStairs);

        console.log(currentRoom);
      } else if (currentRoom === rooms[2]) {
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", ">" + valueEntered);
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", flavorRain);

        console.log(currentRoom);
      } else if (currentRoom === rooms[3]) {
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", ">" + valueEntered);
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", flavorNothing);

        console.log(currentRoom);
      } else if (currentRoom === rooms[4]) {
        currentRoom = rooms[2];
        console.log(currentRoom);
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", ">" + valueEntered);
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", returnStudy);
      } else if (currentRoom === rooms[5]) {
        currentRoom = rooms[3];
        console.log(currentRoom);
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", ">" + valueEntered);
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", returnLab);
      }
      // -------------------------------------EAST---------------------------------------------
      //
    } else if (valueEntered === "EAST" || valueEntered === "GO EAST") {
      if (currentRoom === rooms[0]) {
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", ">" + valueEntered);
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", noWayOut);

        console.log(currentRoom);
      } else if (currentRoom === rooms[1]) {
        if (studyVisited === true) {
          currentRoom = rooms[2];
          console.log(currentRoom);

          document
            .getElementById("playerInput")
            .insertAdjacentHTML("beforebegin", ">" + valueEntered);
          document
            .getElementById("playerInput")
            .insertAdjacentHTML("beforebegin", returnStudy);
        } else {
          currentRoom = rooms[2];
          studyVisited = true;
          console.log(currentRoom);
          document
            .getElementById("playerInput")
            .insertAdjacentHTML("beforebegin", ">" + valueEntered);
          document
            .getElementById("playerInput")
            .insertAdjacentHTML("beforebegin", enterStudy);
        }
      } else if (currentRoom === rooms[2]) {
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", ">" + valueEntered);
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", flavorTTRPGS);

        console.log(currentRoom);
      } else if (currentRoom === rooms[3]) {
        currentRoom = rooms[1];
        console.log(currentRoom);
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", ">" + valueEntered);
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", returnHallway);
      } else if (currentRoom === rooms[4]) {
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", ">" + valueEntered);
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", flavorNothing);

        console.log(currentRoom);
      } else if (currentRoom === rooms[5]) {
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", ">" + valueEntered);
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", flavorNothing);

        console.log(currentRoom);
      }

      //
      // ----------------------------------------WEST--------------------------------------
      //
    } else if (valueEntered === "WEST" || valueEntered === "GO WEST") {
      if (currentRoom === rooms[0]) {
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", ">" + valueEntered);
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", noWayOut);

        console.log(currentRoom);
      } else if (currentRoom === rooms[1]) {
        if (labVisited === false) {
          labVisited = true;
          currentRoom = rooms[3];
          console.log(currentRoom);
          document
            .getElementById("playerInput")
            .insertAdjacentHTML("beforebegin", ">" + valueEntered);
          document
            .getElementById("playerInput")
            .insertAdjacentHTML("beforebegin", enterLab);
        } else if (labVisited === true) {
          currentRoom = rooms[3];
          console.log(currentRoom);
          document
            .getElementById("playerInput")
            .insertAdjacentHTML("beforebegin", ">" + valueEntered);
          document
            .getElementById("playerInput")
            .insertAdjacentHTML("beforebegin", returnLab);
        }
      } else if (currentRoom === rooms[2]) {
        currentRoom = rooms[1];
        console.log(currentRoom);
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", ">" + valueEntered);
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", returnHallway);
      } else if (currentRoom === rooms[3]) {
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", ">" + valueEntered);
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", flavorNothing);

        console.log(currentRoom);
      } else if (currentRoom === rooms[4]) {
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", ">" + valueEntered);
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", flavorNothing);

        console.log(currentRoom);
      } else if (currentRoom === rooms[5]) {
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", ">" + valueEntered);
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", flavorNothing);

        console.log(currentRoom);
      }
      //
      //------------------------------------------SOUTH--------------------------------------
      //
    } else if (valueEntered === "SOUTH" || valueEntered === "GO SOUTH") {
      if (currentRoom === rooms[0]) {
        currentRoom = rooms[0];
        console.log(currentRoom);
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", ">" + valueEntered);
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", noHope);
      } else if (currentRoom === rooms[1]) {
        currentRoom = rooms[0];
        console.log(currentRoom);
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", ">" + valueEntered);
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", returnFoyer);
      } else if (currentRoom === rooms[2]) {
        currentRoom = rooms[4];
        console.log(currentRoom);
        privateQuartersVisited = true;
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", ">" + valueEntered);
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", enterPrivateQuarters);
      } else if (currentRoom === rooms[3]) {
        if (diningHallVisited === true) {
          currentRoom = rooms[5];
          console.log(currentRoom);
          document
            .getElementById("playerInput")
            .insertAdjacentHTML("beforebegin", ">" + valueEntered);
          document
            .getElementById("playerInput")
            .insertAdjacentHTML("beforebegin", returnDiningHall);
        } else {
          diningHallVisited = true;
          currentRoom = rooms[5];
          console.log(currentRoom);
          document
            .getElementById("playerInput")
            .insertAdjacentHTML("beforebegin", ">" + valueEntered);
          document
            .getElementById("playerInput")
            .insertAdjacentHTML("beforebegin", enterDiningHall);
        }
      } else if (currentRoom === rooms[4]) {
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", ">" + valueEntered);
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", flavorNothing);
        console.log(currentRoom);
      } else if (currentRoom === rooms[5]) {
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", ">" + valueEntered);
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", flavorNothing);
      }

      //
      // ----------------------------------------NAMED PLACES---------------------------------------------
      //
    } else if (
      valueEntered === "GO FOYER" ||
      valueEntered === "FOYER" ||
      valueEntered === "GO TO FOYER"
    ) {
      if (foyerVisited === false) {
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", ">" + valueEntered);
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", unknownStill);
      } else if (foyerVisited === true) {
        currentRoom = rooms[0];
        console.log(currentRoom);
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", ">" + valueEntered);
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", returnFoyer);
      }
    } else if (
      valueEntered === "GO HALLWAY" ||
      valueEntered === "HALLWAY" ||
      valueEntered === "GO TO HALLWAY"
    ) {
      if (hallwayVisited === false) {
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", ">" + valueEntered);
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", unknownStill);
      } else if (hallwayVisited === true) {
        currentRoom = rooms[1];
        console.log(currentRoom);
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", ">" + valueEntered);
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", returnHallway);
      }
    } else if (
      valueEntered === "GO STUDY" ||
      valueEntered === "STUDY" ||
      valueEntered === "GO TO STUDY"
    ) {
      if (studyVisited === false) {
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", ">" + valueEntered);
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", unknownStill);
      } else if (studyVisited === true) {
        currentRoom = rooms[2];
        console.log(currentRoom);
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", ">" + valueEntered);
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", returnStudy);
      }
    } else if (
      valueEntered === "GO LAB" ||
      valueEntered === "LAB" ||
      valueEntered === "GO TO LAB" ||
      valueEntered === "GO LABORATORY" ||
      valueEntered === "LABORATORY" ||
      valueEntered === "GO TO LABORATORY"
    ) {
      if (labVisited === false) {
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", ">" + valueEntered);
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", unknownStill);
      } else if (labVisited === true) {
        currentRoom = rooms[3];
        console.log(currentRoom);
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", ">" + valueEntered);
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", returnLab);
      }
    } else if (
      valueEntered === "GO PRIVATE QUARTERS" ||
      valueEntered === "PRIVATE QUARTERS" ||
      valueEntered === "GO TO PRIVATE QUARTERS" ||
      valueEntered === "GO QUARTERS" ||
      valueEntered === "QUARTERS" ||
      valueEntered === "GO TO QUARTERS"
    ) {
      if (privateQuartersVisited === false) {
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", ">" + valueEntered);
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", unknownStill);
      } else if (privateQuartersVisited === true) {
        currentRoom = rooms[4];
        console.log(currentRoom);
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", ">" + valueEntered);
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", returnQuarters);
      }
    } else if (
      valueEntered === "GO DINING HALL" ||
      valueEntered === "DINING HALL" ||
      valueEntered === "GO TO DINING HALL"
    ) {
      if (diningHallVisited === false) {
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", ">" + valueEntered);
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", unknownStill);
      } else if (diningHallVisited === true) {
        currentRoom = rooms[5];
        console.log(currentRoom);
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", ">" + valueEntered);
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", returnDiningHall);
      }
      //
      // -------------------------------------------EXAMINE INTERACTABLES----------------------------------
      //
    } else if (
      valueEntered === "EXAMINE FOYER" ||
      valueEntered === "EXAMINE THE FOYER"
    ) {
      if (currentRoom === rooms[0]) {
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", ">" + valueEntered);
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", enterFoyer);
      } else if (currentRoom !== rooms[0]) {
        if (foyerVisited === true) {
          document
            .getElementById("playerInput")
            .insertAdjacentHTML("beforebegin", ">" + valueEntered);
          document
            .getElementById("playerInput")
            .insertAdjacentHTML("beforebegin", notThere);
        } else {
          document
            .getElementById("playerInput")
            .insertAdjacentHTML("beforebegin", ">" + valueEntered);
          document
            .getElementById("playerInput")
            .insertAdjacentHTML("beforebegin", error);
        }
      }
    } else if (
      valueEntered === "EXAMINE DOORS" ||
      valueEntered === "EXAMINE THE DOORS"
    ) {
      if (currentRoom === rooms[1]) {
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", ">" + valueEntered);
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", examineDoors);
      } else if (currentRoom !== rooms[1]) {
        if (hallwayVisited === true) {
          document
            .getElementById("playerInput")
            .insertAdjacentHTML("beforebegin", ">" + valueEntered);
          document
            .getElementById("playerInput")
            .insertAdjacentHTML("beforebegin", cantSee);
        } else {
          document
            .getElementById("playerInput")
            .insertAdjacentHTML("beforebegin", ">" + valueEntered);
          document
            .getElementById("playerInput")
            .insertAdjacentHTML("beforebegin", error);
        }
      }
    } else if (
      valueEntered === "EXAMINE HALLWAY" ||
      valueEntered === "EXAMINE THE HALLWAY"
    ) {
      if (currentRoom === rooms[1]) {
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", ">" + valueEntered);
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", enterHallway);
      } else if (currentRoom !== rooms[1]) {
        if (hallwayVisited === true) {
          document
            .getElementById("playerInput")
            .insertAdjacentHTML("beforebegin", ">" + valueEntered);
          document
            .getElementById("playerInput")
            .insertAdjacentHTML("beforebegin", cantSee);
        } else {
          document
            .getElementById("playerInput")
            .insertAdjacentHTML("beforebegin", ">" + valueEntered);
          document
            .getElementById("playerInput")
            .insertAdjacentHTML("beforebegin", error);
        }
      }
    } else if (
      valueEntered === "EXAMINE SYMBOLS" ||
      valueEntered === "EXAMINE THE SYMBOLS"
    ) {
      if (currentRoom === rooms[1]) {
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", ">" + valueEntered);
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", examineSymbols);
      } else if (currentRoom !== rooms[1]) {
        if (hallwayVisited === true) {
          document
            .getElementById("playerInput")
            .insertAdjacentHTML("beforebegin", ">" + valueEntered);
          document
            .getElementById("playerInput")
            .insertAdjacentHTML("beforebegin", cantSee);
        } else {
          document
            .getElementById("playerInput")
            .insertAdjacentHTML("beforebegin", ">" + valueEntered);
          document
            .getElementById("playerInput")
            .insertAdjacentHTML("beforebegin", error);
        }
      }
    } else if (
      valueEntered === "EXAMINE PAINTING" ||
      valueEntered === "EXAMINE THE PAINTING"
    ) {
      if (currentRoom === rooms[1]) {
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", ">" + valueEntered);
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", examinePainting);
      } else if (currentRoom !== rooms[1]) {
        if (hallwayVisited === true) {
          document
            .getElementById("playerInput")
            .insertAdjacentHTML("beforebegin", ">" + valueEntered);
          document
            .getElementById("playerInput")
            .insertAdjacentHTML("beforebegin", cantSee);
        } else {
          document
            .getElementById("playerInput")
            .insertAdjacentHTML("beforebegin", ">" + valueEntered);
          document
            .getElementById("playerInput")
            .insertAdjacentHTML("beforebegin", error);
        }
      }
    } else if (
      valueEntered === "EXAMINE LABORATORY" ||
      valueEntered === "EXAMINE THE LABORATORY" ||
      valueEntered === "EXAMINE LAB" ||
      valueEntered === "EXAMINE THE LAB"
    ) {
      if (currentRoom === rooms[3]) {
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", ">" + valueEntered);
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", enterLab);
      } else if (currentRoom !== rooms[3]) {
        if (labVisited === true) {
          document
            .getElementById("playerInput")
            .insertAdjacentHTML("beforebegin", ">" + valueEntered);
          document
            .getElementById("playerInput")
            .insertAdjacentHTML("beforebegin", cantSee);
        } else {
          document
            .getElementById("playerInput")
            .insertAdjacentHTML("beforebegin", ">" + valueEntered);
          document
            .getElementById("playerInput")
            .insertAdjacentHTML("beforebegin", error);
        }
      }
    } else if (
      valueEntered === "EXAMINE STUDY" ||
      valueEntered === "EXAMINE THE STUDY"
    ) {
      if (currentRoom === rooms[2]) {
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", ">" + valueEntered);
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", enterStudy);
      } else if (currentRoom !== rooms[2]) {
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", ">" + valueEntered);
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", notThere);
      }
    } else if (
      valueEntered === "EXAMINE JOURNAL" ||
      valueEntered === "EXAMINE THE JOURNAL"
    ) {
      if (currentRoom === rooms[2]) {
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", ">" + valueEntered);
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", examineJournal);
      } else if (currentRoom !== rooms[2]) {
        if (studyVisited === true) {
          document
            .getElementById("playerInput")
            .insertAdjacentHTML("beforebegin", ">" + valueEntered);
          document
            .getElementById("playerInput")
            .insertAdjacentHTML("beforebegin", cantSee);
        } else {
          document
            .getElementById("playerInput")
            .insertAdjacentHTML("beforebegin", ">" + valueEntered);
          document
            .getElementById("playerInput")
            .insertAdjacentHTML("beforebegin", error);
        }
      }
    } else if (
      valueEntered === "EXAMINE CABINET" ||
      valueEntered === "EXAMINE THE CABINET"
    ) {
      if (currentRoom === rooms[3]) {
        if (ironKey === true) {
          document
            .getElementById("playerInput")
            .insertAdjacentHTML("beforebegin", ">" + valueEntered);
          document
            .getElementById("playerInput")
            .insertAdjacentHTML("beforebegin", unlockCabinet);
        } else {
          document
            .getElementById("playerInput")
            .insertAdjacentHTML("beforebegin", ">" + valueEntered);
          document
            .getElementById("playerInput")
            .insertAdjacentHTML("beforebegin", examineCabinet);
        }
      } else if (currentRoom !== rooms[3]) {
        if (labVisited === true) {
          document
            .getElementById("playerInput")
            .insertAdjacentHTML("beforebegin", ">" + valueEntered);
          document
            .getElementById("playerInput")
            .insertAdjacentHTML("beforebegin", cantSee);
        } else {
          document
            .getElementById("playerInput")
            .insertAdjacentHTML("beforebegin", ">" + valueEntered);
          document
            .getElementById("playerInput")
            .insertAdjacentHTML("beforebegin", error);
        }
      }
    } else if (
      valueEntered === "READ JOURNAL" ||
      valueEntered === "READ THE JOURNAL"
    ) {
      if (currentRoom === rooms[2] && ironKey !== true) {
        ironKey = true;
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", ">" + valueEntered);
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", readJournal);
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", keyAcquired);
      } else if (ironKey === true) {
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", ">" + valueEntered);
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", readJournalAgain);
      } else if (currentRoom !== rooms[2]) {
        if (studyVisited === true) {
          document
            .getElementById("playerInput")
            .insertAdjacentHTML("beforebegin", ">" + valueEntered);
          document
            .getElementById("playerInput")
            .insertAdjacentHTML("beforebegin", cantSee);
        } else {
          document
            .getElementById("playerInput")
            .insertAdjacentHTML("beforebegin", ">" + valueEntered);
          document
            .getElementById("playerInput")
            .insertAdjacentHTML("beforebegin", error);
        }
      }
    } else if (
      valueEntered === "EXAMINE MAP" ||
      valueEntered === "EXAMINE THE MAP" ||
      valueEntered === "TAKE MAP" ||
      valueEntered === "TAKE THE MAP"
    ) {
      if (currentRoom === rooms[3]) {
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", ">" + valueEntered);
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", examineMap);
      } else if (ironKey === true) {
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", ">" + valueEntered);
        document
          .getElementById("playerInput")
          .insertAdjacentHTML("beforebegin", readJournalAgain);
      } else if (currentRoom !== rooms[2]) {
        if (studyVisited === true) {
          document
            .getElementById("playerInput")
            .insertAdjacentHTML("beforebegin", ">" + valueEntered);
          document
            .getElementById("playerInput")
            .insertAdjacentHTML("beforebegin", cantSee);
        } else {
          document
            .getElementById("playerInput")
            .insertAdjacentHTML("beforebegin", ">" + valueEntered);
          document
            .getElementById("playerInput")
            .insertAdjacentHTML("beforebegin", error);
        }
      }
    } else {
      document
        .getElementById("playerInput")
        .insertAdjacentHTML("beforebegin", ">" + valueEntered);
      document
        .getElementById("playerInput")
        .insertAdjacentHTML("beforebegin", error);
    }
  }
}

function changeText(e) {
  gameStart(e);
  document
    .getElementById("inspectorName")
    .insertAdjacentHTML("beforebegin", `${username}`);
}

document.querySelectorAll(".codedText").forEach((t) => {
  const arr1 = t.innerHTML.split("");
  const arr2 = [];
  arr1.forEach((char, i) => (arr2[i] = randChar())); //fill arr2 with random characters
  t.onpointerover = () => {
    const tl = gsap.timeline();
    let step = 0;
    tl.fromTo(
      t,
      {
        innerHTML: arr2.join(""),
        color: "#000",
        background: "#bada55",
      },
      {
        duration: arr1.length / 20, //duration based on text length
        ease: "power4.in",
        delay: 0.1,
        color: "#fff",
        background: "#000",
        onUpdate: () => {
          const p = Math.floor(tl.progress() * arr1.length); //whole number from 0 - text length
          if (step != p) {
            //throttle the change of random characters
            step = p;
            arr1.forEach((char, i) => (arr2[i] = randChar()));
            let pt1 = arr1.join("").substring(p, 0),
              pt2 = arr2.join("").substring(arr2.length - p, 0);
            if (t.classList.contains("fromRight")) {
              pt1 = arr2.join("").substring(arr2.length - p, 0);
              pt2 = arr1.join("").substring(arr1.length - p);
            }
            t.innerHTML = pt1 + pt2; //update text
          }
        },
      }
    );
  };
});

function randChar() {
  let c = "abcdefghijklmnopqrstuvwxyz1234567890!@#$^&*()…æ_+-=;[]/~`";
  c = c[Math.floor(Math.random() * c.length)];
  return Math.random() > 0.5 ? c : c.toUpperCase();
}
