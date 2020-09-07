from flask import Flask, abort
from flask import request
from ApiWorker import ApiHandler
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
    
    playerOne = request.args.get('player1')
    playerTwo = request.args.get('player2')
    serverOne = request.args.get('server1')
    serverTwo = request.args.get('server2')
    flexq = request.args.get('flexq')
    soloq = request.args.get('soloq')
    num = request.args.get('numOfGames')


    if playerOne is None or playerOne == "" :
        abort(404, description="Player 1 not found")
    if playerTwo is None or playerTwo == "":
        abort(404, description="Player 2 not found")
    if flexq is None:
        flexq = False
    if soloq is None:
        soloq = True
    if num is None:
        num = 20
    response = ApiHandler.getStats(playerOne, serverOne, playerTwo, serverTwo, flexq, soloq, num)
    return response