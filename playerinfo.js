let linkData = location.href;
let newLink = new URL(linkData);
let confirmPlayer = newLink.searchParams.get("name");
// console.log(confirmPlayer)

var playerInfo = [
    {
        "id": 0,
        "playerName": "Hardik Pandya",
        "from": "GT",
        "price": "12.50 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "playerImg": 'https://assets.iplt20.com/ipl/IPLHeadshot2022/2740.png',
        "playerTeam": "Gujarat Titan"
    },
    {
        "id": 1,
        "playerName": "Mohammad Shami",
        "from": "GT",
        "price": "10.00 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": 'https://assets.iplt20.com/ipl/IPLHeadshot2022/94.png',
        "playerTeam": "Gujarat Titan"
    },
    {
        "id": 2,
        "playerName": "Shubham Gill",
        "from": "GT",
        "price": "10.00 Cr",
        "isPlaying": false,
        "description": "Bowler",
        "playerImg": 'https://assets.iplt20.com/ipl/IPLHeadshot2022/3761.png',
        "playerTeam": "Gujarat Titan"
    },
    {
        "id": 3,
        "playerName": "Jayant Yadav",
        "from": "GT",
        "price": "2.00 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "playerImg": 'https://assets.iplt20.com/ipl/IPLHeadshot2022/1740.png',
        "playerTeam": "Gujarat Titan"
    },
    {
        "id": 4,
        "playerName": "Rashid Khan",
        "from": "GT",
        "price": "1.30 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": 'https://assets.iplt20.com/ipl/IPLHeadshot2022/2885.png',
        "playerTeam": "Gujarat Titan"
    },
    {
        "id": 5,
        "playerName": "Virat Kohli",
        "from": "RCB",
        "price": "13.00 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": 'https://assets.iplt20.com/ipl/IPLHeadshot2022/164.png',
        "playerTeam": "Royal Challengers Bangalore"
    },
    {
        "id": 6,
        "playerName": "Glenn Maxwell",
        "from": "RCB",
        "price": "10.25 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/282.png",
        "playerTeam": "Royal Challengers Bangalore"
    },
    {
        "id": 7,
        "playerName": "Shahbaz Ahmed",
        "from": "RCB",
        "price": "1.00cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/13803.png",
        "playerTeam": "Royal Challengers Bangalore"
    },
    {
        "id": 8,
        "playerName": "Mohhamad Siraj",
        "from": "RCB",
        "price": "5.00cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/3840.png",
        "playerTeam": "Royal Challengers Bangalore"
    },
    {
        "id": 9,
        "playerName": "Dinesh Kartik",
        "from": "RCB",
        "price": "3.00cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/102.png",
        "playerTeam": "Royal Challengers Bangalore"
    },
    {
        "id": 10,
        "playerName": "Rohit Sharma",
        "from": "MI",
        "price": "14.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/107.png",
        "playerTeam": "Mumbai Indians"
    },
    {
        "id": 11,
        "playerName": "Ishan Kishan",
        "from": "MI",
        "price": "17.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/2975.png",
        "playerTeam": "Mumbai Indians"
    },
    {
        "id": 12,
        "playerName": "Jasprit Bumrah",
        "from": "MI",
        "price": "7.50 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/1124.png",
        "playerTeam": "Mumbai Indians"
    },
    {
        "id": 13,
        "playerName": "Mayank Markande",
        "from": "MI",
        "price": "1.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/4951.png",
        "playerTeam": "Mumbai Indians"
    },
    {
        "id": 14,
        "playerName": "Rahul Budhhi",
        "from": "MI",
        "price": "5.00 Cr",
        "isPlaying": true,
        "description": "bowler",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/20597.png",
        "playerTeam": "Mumbai Indians"
    },
    {
        "id": 15,
        "playerName": "MS Dhoni",
        "from": "CSK",
        "price": "14.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/1.png",
        "playerTeam": "Chennai Super Kings"
    },
    {
        "id": 16,
        "playerName": "Dwayne Bravo",
        "from": "CSK",
        "price": "07.50 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/25.png",
        "playerTeam": "Chennai Super Kings"
    },
    {
        "id": 17,
        "playerName": "Robin Uthappa",
        "from": "CSK",
        "price": "02.50 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/127.png",
        "playerTeam": "Chennai Super Kings"
    },
    {
        "id": 18,
        "playerName": "Ambati Raydu",
        "from": "CSK",
        "price": "01.00 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/100.png",
        "playerTeam": "Chennai Super Kings"
    },
    {
        "id": 19,
        "playerName": "Shivam Dube",
        "from": "CSK",
        "price": "07.50 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/5431.png",
        "playerTeam": "Chennai Super Kings"
    },

    {
        "id": 20,
        "playerName": "Rishabh Pant",
        "from": "DC",
        "price": "13.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/2972.png",
        "playerTeam": "Delhi Capitals"
    },
    {
        "id": 21,
        "playerName": "Mandeep Singh",
        "from": "DC",
        "price": "1.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/72.png",
        "playerTeam": "Delhi Capitals"
    },
    {
        "id": 22,
        "playerName": "Lalit Yadav",
        "from": "DC",
        "price": "1.50 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/6870.png",
        "playerTeam": "Delhi Capitals"
    },
    {
        "id": 23,
        "playerName": "Prithvi shaw",
        "from": "DC",
        "price": "18.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/3764.png",
        "playerTeam": "Delhi Capitals"
    },

    {
        "id": 24,
        "playerName": "Jos Buttler",
        "from": "RR",
        "price": "07.50 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/509.png",
        "playerTeam": "Rajasthan Royals"
    },
    {
        "id": 25,
        "playerName": "Karun Nair",
        "from": "RR",
        "price": "01.50 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/276.png",
        "playerTeam": "Rajasthan Royals"
    },
    {
        "id": 26,
        "playerName": "Dhruv Jurel",
        "from": "RR",
        "price": "07.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/20620.png",
        "playerTeam": "Rajasthan Royals"
    },
    {
        "id": 27,
        "playerName": "Riyan Parag",
        "from": "RR",
        "price": "03.50 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/4445.png",
        "playerTeam": "Rajasthan Royals"
    },
    {
        "id": 28,
        "playerName": "Devdutt Paddikal",
        "from": "RR",
        "price": "07.50 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/5430.png",
        "playerTeam": "Rajasthan Royals"
    },
    {
        "id": 29,
        "playerName": "Shreyas Iyer",
        "from": "KKR",
        "price": "10.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/1563.png",
        "playerTeam": "Kolkata Knight Riders"
    },
    {
        "id": 30,
        "playerName": "Abhijeet Tomar",
        "from": "KKR",
        "price": "18.50 Cr",
        "isPlaying": false,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/20580.png",
        "playerTeam": "Kolkata Knight Riders"
    },
    {
        "id": 31,
        "playerName": "Pat Cummins",
        "from": "KKR",
        "price": "1.50 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/488.png",
        "playerTeam": "Kolkata Knight Riders"
    },
    {
        "id": 32,
        "playerName": "Ashok Sharma",
        "from": "KKR",
        "price": "18 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/20584.png",
        "playerTeam": "Kolkata Knight Riders"
    },
    {
        "id": 33,
        "playerName": "Rinku Singh",
        "from": "KKR",
        "price": "10.50 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/3830.png",
        "playerTeam": "Kolkata Knight Riders"
    },
    {
        "id": 34,
        "playerName": "Rahul Tripathi",
        "from": "SH",
        "price": "10.50 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/3838.png",
        "playerTeam": "Sunrises Hyderabad"
    },
    {
        "id": 35,
        "playerName": "Anukul Sharma",
        "from": "SH",
        "price": "10.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/3760.png",
        "playerTeam": "Sunrises Hyderabad"
    },
    {
        "id": 36,
        "playerName": "Abdul Samad",
        "from": "SH",
        "price": "5.50 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/19352.png",
        "playerTeam": "Sunrises Hyderabad"
    },
    {
        "id": 37,
        "playerName": "Nicolas Pooran",
        "from": "SH",
        "price": "3.50 Cr",
        "isPlaying": false,
        "description": "All-rounder",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/1703.png",
        "playerTeam": "Sunrises Hyderabad"
    },


];

var teamInfo = [

    {
        "id": 0,
        "teamFullName": "Mumbai Indians",
        "sName": "MI",
        "fullSname": "MI (Mumbai Indians)",
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/MI/Logos/Roundbig/MIroundbig.png",
        "WonCount": 5,
    },
    {
        "id": 1,
        "teamFullName": "Chennai Super Kings",
        "sName": "CSK",
        "fullSname": "CSK (Chennai Super King)",
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/CSK/logos/Roundbig/CSKroundbig.png",
        "WonCount": 4,
    },
    {
        "id": 2,
        "teamFullName": "Royal Challengers Bangalore",
        "sName": "RCB",
        "fullSname": "RCB (Royal challengers Bangalore)",
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RCB/Logos/Roundbig/RCBroundbig.png",
        "WonCount": 0,
    },
    {
        "id": 3,
        "teamFullName": "Kolkata Knight Riders",
        "sName": "KKR",
        "fullSname": "KKR (Kolkata Knight Riders)",
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/KKR/Logos/Roundbig/KKRroundbig.png",
        "WonCount": 2,
    },
    {
        "id": 4,
        "teamFullName": "Delhi Capitals",
        "sName": "DC",
        "fullSname": "DC (Delhi Capitals)",
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/DC/Logos/Roundbig/DCroundbig.png",
        "WonCount": 2,
    },
    {
        "id": 5,
        "teamFullName": "Gujarat Titan",
        "sName": "GT",
        "fullSname": "GT (Gujarat Tistan)",
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/GT/Logos/Roundbig/GTroundbig.png",
        "WonCount": 2,
    },

    {
        "id": 6,
        "teamFullName": "Rajasthan Royals",
        "sName": "RR",
        "fullSname": "RR (Rajasthan Royals)",
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RR/Logos/Roundbig/RRroundbig.png",
        "WonCount": 1,
    },
    {
        "id": 7,
        "teamFullName": "Sunrises Hyderabad",
        "sName": "SH",
        "fullSname": "SH (Sunrises Hyderabad)",
        "teamIcon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/SRH/Logos/Roundbig/SRHroundbig.png",
        "WonCount": 1,
    },


];

var addTeamClick = () => {
    window.open("./addTeam.html", "_self")
}
var addPlayerClick = () => {
    window.open("./addPlayer.html", "_self")
}

let teamDetails = [];
let playerDetails = [];

if (localStorage.getItem("teamArray") === null)
    localStorage.setItem("teamArray", JSON.stringify(teamInfo));

if (localStorage.getItem("playerArray") === null)
    localStorage.setItem("playerArray", JSON.stringify(playerInfo));

teamDetails = JSON.parse(localStorage.getItem("teamArray"));
playerDetails = JSON.parse(localStorage.getItem("playerArray"));

var playerinfo = document.getElementById("player-table")


// rendering player details 
for (let i = 0; i < playerDetails.length; i++) {
    if (playerDetails[i].playerName == confirmPlayer) {
        var playingOrN = ""
        if (playerDetails[i].isPlaying == true) {
            playingOrN = "Playing"
        } else {
            playingOrN = "Bench"
        }
        playerinfo.innerHTML += `
    <div class="playerImg">
            <img src="${playerDetails[i].playerImg}" alt="" />
          </div>
          <div id="info-player">
            <table>
              <tr>
                <td>Player Name</td>
                <td>${playerDetails[i].playerName}</td>
              </tr>
              <tr>
                <td>Team Name</td>
                <td>${playerDetails[i].playerTeam}</td>
              </tr>
              <tr>
                <td>Team Code</td>
                <td>${playerDetails[i].from}</td>
              </tr>
              <tr>
                <td>Worth</td>
                <td>${playerDetails[i].price}</td>
              </tr>
              <tr>
                <td>isPlaying</td>
                <td>${playerDetails[i].isPlaying}</td>
              </tr>
            </table>
          </div>
    `
    }
}























































