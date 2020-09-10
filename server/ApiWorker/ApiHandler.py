from riotwatcher import LolWatcher, ApiError
import json
from .Player import Player
from LolApiConstants import apiKey
from flask import abort
import logging

def getOnePlayerStats(watcher, playerName, playerServer, queueType, num):
    try:
        player = watcher.summoner.by_name(playerServer, playerName)
    except:
        abort(404, "Error in watcher summoner by name")
    playerId = player['id']
    playerAccId = player['accountId']
    try:
        player1_stats = watcher.league.by_summoner(playerServer, playerId)
    except:
        abort(404, "Error in watcher league by summoner")
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

    try:
        my_matches = watcher.match.matchlist_by_account(
        playerServer, playerAccId, queue=queueType)
    except:
        abort(404, "Error in watcher matchlist by acc")

    for match in my_matches['matches'][:int(num)]:
        try:
            match_detail = watcher.match.by_id(playerServer, match['gameId'])
            participantId = 0
            response.match += 1
            response.timespent += match_detail['gameDuration']
            for participant in match_detail['participantIdentities']:
                if str(participant['player']['summonerName']).lower() == str(playerName).lower():
                    participantId = participant['participantId']
                    break

            winned = False
            for participantStats in match_detail['participants']:
                if participantStats['participantId'] == participantId:
                    stats = participantStats['stats']
                    response.kills += stats['kills']
                    response.deaths += stats['deaths']
                    response.assists += stats['assists']
                    if stats['win']:
                        response.matchWin += 1
                        winned = True
                    response.wardsKilled += stats['wardsKilled']
                    response.wardsPlaced += stats['wardsPlaced']
                    response.damageDealtToTurrets += stats['damageDealtToTurrets']
                    response.damageDealtToObjectives += stats['damageDealtToObjectives']
                    response.visionWardsBoughtInGame += stats['visionWardsBoughtInGame']
                    response.totalDamageDealtToChampions += stats['totalDamageDealtToChampions']
                    response.goldSpent += stats['goldSpent']
                    response.champLevel += stats['champLevel']
                    response.totalDamageTaken += stats['totalDamageTaken']
                    response.timeCCingOthers += stats['timeCCingOthers']
                    if 'firstBloodKill' in stats or 'firstBloodAssists' in stats:
                        if stats['firstBloodKill'] or stats['firstBloodAssist']:
                            response.firstBlood += 1
                    response.visionScore += stats["visionScore"]
                    response.totalMinionsKilled += stats['totalMinionsKilled']
                    neutralMinionsKileld = stats['neutralMinionsKilled'] + \
                        stats['neutralMinionsKilledTeamJungle'] + \
                        stats['neutralMinionsKilledEnemyJungle']
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

                    if 'creepsPerMinDeltas' in timeline:
                        if '0-10' in timeline['creepsPerMinDeltas']:
                            response.creepDiff_0_10 += timeline['creepsPerMinDeltas']['0-10']
                            response.creep_games_10 += 1
                        if '10-20' in timeline['creepsPerMinDeltas']:
                            response.creepDiff_10_20 += timeline['creepsPerMinDeltas']['10-20']
                            response.creep_games_20 += 1
                        if '20-30' in timeline['creepsPerMinDeltas']:
                            response.creepDiff_20_30 += timeline['creepsPerMinDeltas']['20-30']
                            response.creep_games_30 += 1
                        if '30-end' in timeline['creepsPerMinDeltas']:
                            response.creepDiff_30_end += timeline['creepsPerMinDeltas']['30-end']
                            response.creep_games_end += 1
                    for player in match_detail['participants']:
                        if player['stats']['win'] == winned:
                            response.allKills += player['stats']['kills']

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
        except Exception as e:
            logging.warning(e)
            abort(404, "Error in watcher match id "+str(match['gameId']))

    return response.prepareResponse()


def getStats(player1Name, server1, player2Name, server2, flexq, soloq, num):

    watcher = LolWatcher(apiKey.apiKey)
    if soloq and flexq:
        queueType = [420, 440]
    elif soloq:
        queueType = [420]
    elif flexq:
        queueType = [440]
    playerOneStats = getOnePlayerStats(
        watcher, player1Name, server1, queueType, num)
    playerTwoStats = getOnePlayerStats(
        watcher, player2Name, server2, queueType, num)
    response = {
        "player1": playerOneStats,
        "player2": playerTwoStats
    }
    return response
