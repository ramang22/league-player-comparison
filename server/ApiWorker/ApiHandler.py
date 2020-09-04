from riotwatcher import LolWatcher, ApiError
import json
from .Player import Player


def getOnePlayerStats(watcher,playerName, playerServer):
    player = watcher.summoner.by_name(playerServer, playerName)
    playerId = player['id']
    playerAccId = player['accountId']
    player1_stats = watcher.league.by_summoner(playerServer, playerId)
    
    soloqStats = {}
    for stat in player1_stats:
        if stat['queueType'] == "RANKED_SOLO_5x5":
            soloqStats = stat
            break
    
    playerNameFromApi = soloqStats['summonerName']
    response = Player(
        playerNameFromApi,
        soloqStats['tier'],
        soloqStats['rank'],
        soloqStats['wins'],
        soloqStats['losses'], 
        soloqStats['leaguePoints'],    
    )

    my_matches = watcher.match.matchlist_by_account(playerServer, playerAccId,queue=[420])
    for match in my_matches['matches'][:20]:
        match_detail = watcher.match.by_id(playerServer, match['gameId'])
        participantId = 0
        response.match += 1
        response.timespent += match_detail['gameDuration']
        for participant in match_detail['participantIdentities']:
            if str(participant['player']['summonerName']).lower() == str(playerName).lower():
                participantId =  participant['participantId']
                break

        for participantStats in match_detail['participants']:
            if participantStats['participantId'] == participantId:
                stats = participantStats['stats']
                response.kills += stats['kills']
                response.deaths += stats['deaths']
                response.assists += stats['assists']
                response.totalDamageDealtToChampions += stats['totalDamageDealtToChampions']
                response.visionScore += stats["visionScore"]
                response.totalMinionsKilled += stats['totalMinionsKilled']
                neutralMinionsKileld = stats['neutralMinionsKilled'] + stats['neutralMinionsKilledTeamJungle'] + stats['neutralMinionsKilledEnemyJungle']
                response.neutralMinionsKileld += neutralMinionsKileld
                timeline = participantStats['timeline']
                if 'csDiffPerMinDeltas' in timeline:
                    if '0-10' in timeline['csDiffPerMinDeltas']:
                        response.csDiff_0_10 += timeline['csDiffPerMinDeltas']['0-10']
                        response.games_10 += 1
                    if '10-20' in timeline['csDiffPerMinDeltas']:
                        response.csDiff_10_20 += timeline['csDiffPerMinDeltas']['10-20']
                        response.games_20 += 1
                    if '20-30' in timeline['csDiffPerMinDeltas']:
                        response.csDiff_20_30 += timeline['csDiffPerMinDeltas']['20-30']
                        response.games_30 += 1
                    if '30-end' in timeline['csDiffPerMinDeltas']:
                        response.csDiff_30_end += timeline['csDiffPerMinDeltas']['30-end']
                        response.games_end += 1
                if timeline['lane'] == "TOP":
                    response.top += 1
                elif timeline['lane'] == "MIDDLE":
                    response.mid += 1
                elif timeline['lane'] == "JUNGLE":
                    response.jungle += 1
                elif timeline['role'] == "DUO_SUPPORT":
                    response.supp += 1
                elif timeline['role'] == "DUO_CARRY":
                    response.adc += 1

    return response.prepareResponse()

def getStats(player1Name, server1, player2Name, server2):
    api_key = "RGAPI-9a7c7c3b-f44a-40ed-8046-af3e22e27ad5"
    watcher = LolWatcher(api_key)

    playerOneStats = getOnePlayerStats(watcher,player1Name,server1)
    playerTwoStats = getOnePlayerStats(watcher,player2Name,server2)
    response = {
        "player1" : playerOneStats,
        "player2" : playerTwoStats
    }
    return response