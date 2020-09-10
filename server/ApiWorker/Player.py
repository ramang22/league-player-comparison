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
        self.goldSpent = 0
        self.champLevel = 0
        self.firstBlood = 0
        self.timeCCingOthers = 0
        self.totalDamageTaken = 0
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
        if Player.firstBlood == 0:
            self.firstBloodKP = "0%"
        else:    
            self.firstBloodKP = str(round((Player.firstBlood / Player.match * 100),2))+"%"
        self.dmgPerGold = round(Player.totalDamageDealtToChampions / Player.goldSpent,2)
        if Player.deaths == 0:
            self.kda = (Player.kills + Player.assists)
        else:  
            self.kda = round((Player.kills + Player.assists) / Player.deaths,2)
        self.match = Player.match
        self.winnedMatch = Player.matchWin
        self.totalDamageDealtToChampions_perGame = round(Player.totalDamageDealtToChampions/Player.match,2)
        self.totalDamageDealtToChampions_perMinute = round(Player.totalDamageDealtToChampions/(Player.timespent/60),2)
        self.visionScore_perGame = round(Player.visionScore / Player.match,2)
        self.cs_perGame = round((Player.totalMinionsKilled + Player.neutralMinionsKileld)/Player.match,2)
        self.cs_perMinute =  round((Player.totalMinionsKilled + Player.neutralMinionsKileld) / (Player.timespent/60),2)
        self.wardsKilled_perGame =  round(Player.wardsKilled / Player.match,2)
        self.wardsPlaces_perGame =  round(Player.wardsPlaced / Player.match,2)
        self.visionWardsBoughtInGame =  round(Player.visionWardsBoughtInGame / Player.match,2)
        self.damageDealtToTurrets_perGame =  round(Player.damageDealtToTurrets / Player.match,2)
        self.damageDealtToObjectives_perGame =  round(Player.damageDealtToObjectives / Player.match,2)
        self.avgLv =  round(Player.champLevel / Player.match,2)
        self.avgGameTime =  round((Player.timespent / Player.match)/60,2)
        self.cc_perGame =  round(Player.timeCCingOthers / Player.match,2)
        self.totalDamageTaken_perGame =  round(Player.totalDamageTaken / Player.match,2)
        self.totalDamageTaken_perMinute = round( Player.totalDamageTaken / Player.timespent,2)
        if Player.games_10 != 0:
            self.csDiff_0_10 =round( Player.csDiff_0_10 / Player.games_10,2)
        else:
            self.csDiff_0_10 = Player.csDiff_0_10
        
        if Player.games_20 != 0:
            self.csDiff_10_20 =round( Player.csDiff_10_20 / Player.games_20,2)
        else:
            self.csDiff_10_20 = Player.csDiff_10_20
        
        if Player.games_30 != 0:
            self.csDiff_20_30 = round(Player.csDiff_20_30 / Player.games_30,2)
        else:
            self.csDiff_20_30 = Player.csDiff_20_30
        
        if Player.games_end != 0:
            self.csDiff_30_end = round(Player.csDiff_30_end / Player.games_end,2)
        else:
            self.csDiff_30_end = Player.csDiff_30_end

        if Player.creep_games_10 != 0:
            self.farm_0_10 = round(Player.creepDiff_0_10 / Player.creep_games_10,2)
        else:
            self.farm_0_10 = Player.creepDiff_0_10
        
        if Player.creep_games_20 != 0:
            self.farm_10_20 = round(Player.creepDiff_10_20 / Player.creep_games_20,2)
        else:
            self.farm_10_20 = Player.creepDiff_10_20
        
        if Player.creep_games_30 != 0:
            self.farm_20_30 = round(Player.creepDiff_20_30 / Player.creep_games_30,2)
        else:
            self.farm_20_30 = Player.creepDiff_20_30
        
        if Player.creep_games_end != 0:
            self.farm_30_end = round(Player.creepDiff_30_end / Player.creep_games_end,2)
        else:
            self.farm_30_end = Player.creepDiff_30_end
        self.kp = round((100 / Player.allKills * (Player.kills + Player.assists)),2)
    def toJSON(self):
        return self.__dict__