import json

class Player:
    def __init__(self, name, tier, rank, wins, losses, lps):
        self.name = name
        self.tier = tier
        self.rank = rank
        self.wins = wins
        self.losses = losses
        self.lps = lps
        self.top = 0
        self.jungle = 0
        self.mid = 0
        self.adc = 0 
        self.supp = 0
        self.kills = 0
        self.deaths = 0
        self.assists = 0
        self.totalDamageDealtToChampions = 0
        self.visionScore = 0
        self.totalMinionsKilled = 0
        self.neutralMinionsKileld = 0
        self.csDiff_0_10 = 0
        self.csDiff_10_20 = 0
        self.csDiff_20_30 = 0
        self.csDiff_30_end = 0
        self.games_10 = 0
        self.games_20 = 0
        self.games_30 = 0
        self.games_end = 0
        self.creepDiff_0_10 = 0
        self.creepDiff_10_20 = 0
        self.creepDiff_20_30 = 0
        self.creepDiff_30_end = 0
        self.creep_games_10 = 0
        self.creep_games_20 = 0
        self.creep_games_30 = 0
        self.creep_games_end = 0
        self.match = 0
        self.timespent = 0
        self.matchWin = 0
        self.wardsKilled = 0
        self.wardsPlaced = 0
        self.visionWardsBoughtInGame = 0
        self.damageDealtToTurrets = 0
        self.damageDealtToObjectives = 0
        self.allKills = 0
    def toJSON(self):
        # return json.dumps(self, default=lambda o: o.__dict__, 
        #     sort_keys=False, indent=0)
        return self.__dict__

    def prepareResponse(self):
        response = responsePlayer(self)
        return response.toJSON()
class responsePlayer:
    def __init__(self,Player):
        self.name = Player.name
        self.tier = Player.tier
        self.rank = Player.rank
        self.wins = Player.wins
        self.losses = Player.losses
        self.lps = Player.lps
        self.top = Player.top
        self.jungle = Player.jungle
        self.mid = Player.mid
        self.adc = Player.adc
        self.supp = Player.supp
        self.kills = Player.kills
        self.deaths = Player.deaths
        self.assists = Player.assists
        if Player.deaths == 0:
            self.kda = (Player.kills + Player.assists)
        else:  
            self.kda = (Player.kills + Player.assists) / Player.deaths
        self.match = Player.match
        self.winnedMatch = Player.matchWin
        self.totalDamageDealtToChampions_perGame = Player.totalDamageDealtToChampions/Player.match
        self.totalDamageDealtToChampions_perMinute = Player.totalDamageDealtToChampions/(Player.timespent/60)
        self.visionScore_perGame = Player.visionScore / Player.match
        self.cs_perGame = (Player.totalMinionsKilled + Player.neutralMinionsKileld)/Player.match
        self.cs_perMinute = (Player.totalMinionsKilled + Player.neutralMinionsKileld) / (Player.timespent/60)
        self.wardsKilled_perGame = Player.wardsKilled / Player.match
        self.wardsPlaces_perGame = Player.wardsPlaced / Player.match
        self.visionWardsBoughtInGame = Player.visionWardsBoughtInGame / Player.match
        self.damageDealtToTurrets_perGame = Player.damageDealtToTurrets / Player.match
        self.damageDealtToObjectives_perGame = Player.damageDealtToObjectives / Player.match
        if Player.games_10 != 0:
            self.csDiff_0_10 = Player.csDiff_0_10 / Player.games_10
        else:
            self.csDiff_0_10 = Player.csDiff_0_10
        
        if Player.games_20 != 0:
            self.csDiff_10_20 = Player.csDiff_10_20 / Player.games_20
        else:
            self.csDiff_10_20 = Player.csDiff_10_20
        
        if Player.games_30 != 0:
            self.csDiff_20_30 = Player.csDiff_20_30 / Player.games_30
        else:
            self.csDiff_20_30 = Player.csDiff_20_30
        
        if Player.games_end != 0:
            self.csDiff_30_end = Player.csDiff_30_end / Player.games_end
        else:
            self.csDiff_30_end = Player.csDiff_30_end

        if Player.creep_games_10 != 0:
            self.farm_0_10 = Player.creepDiff_0_10 / Player.creep_games_10
        else:
            self.farm_0_10 = Player.creepDiff_0_10
        
        if Player.creep_games_20 != 0:
            self.farm_10_20 = Player.creepDiff_10_20 / Player.creep_games_20
        else:
            self.farm_10_20 = Player.creepDiff_10_20
        
        if Player.creep_games_30 != 0:
            self.farm_20_30 = Player.creepDiff_20_30 / Player.creep_games_30
        else:
            self.farm_20_30 = Player.creepDiff_20_30
        
        if Player.creep_games_end != 0:
            self.farm_30_end = Player.creepDiff_30_end / Player.creep_games_end
        else:
            self.farm_30_end = Player.creepDiff_30_end
        self.kp = (100 / Player.allKills * (Player.kills + Player.assists))
    def toJSON(self):
        return self.__dict__