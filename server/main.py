from flask import Flask, abort
from flask import request
from ApiWorker import ApiHandler
from flask_cors import CORS
import logging
from datetime import datetime

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

    logging.info("INCOMING REQUEST : player1 = %s ,player2 = %s ,server1 = %s ,server2 = %s ,flexq = %s ,soloq = %s ,num = %s ", 
                str(playerOne), str(playerTwo), str(serverOne), str(serverTwo), str(flexq), str(soloq), str(num))
    
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

if __name__ == '__main__':
    now = datetime.now()
    dt_string = now.strftime("%d_%m_%Y_%H_%M_%S")
    logging.basicConfig(
        filename='./logs/log_'+dt_string+'.log',
        format='[%(asctime)s] %(message)s', datefmt='%m/%d/%Y %I:%M:%S',
        level=logging.INFO
    )
    app.run(debug=True)