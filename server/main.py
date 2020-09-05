from flask import Flask
from flask import request
from ApiWorker import ApiHandler
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

# http://127.0.0.1:5000/?player1=orth&server1=eune&player2=willko&server2=eune
@app.route('/')
def hello_world():
    playerOne = request.args.get('player1')
    playerTwo = request.args.get('player2')
    serverOne = request.args.get('server1')
    serverTwo = request.args.get('server2')
    flexq = request.args.get('flexq')
    soloq = request.args.get('soloq')
    num = request.args.get('numOfGames')
    print(num)
    response = ApiHandler.getStats(playerOne, serverOne, playerTwo, serverTwo, flexq, soloq, num)
    return response