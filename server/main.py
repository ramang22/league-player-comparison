from flask import Flask
from flask import request
app = Flask(__name__)


# http://127.0.0.1:5000/?player1=orth&server1=eune&player2=willko&server2=eune
@app.route('/')
def hello_world():
    playerOne = request.args.get('player1')
    playerTwo = request.args.get('player2')
    serverOne = request.args.get('server1')
    serverTwo = request.args.get('server2')
    return playerOne+serverOne+playerTwo+serverTwo+"kapp"