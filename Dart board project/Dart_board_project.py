dart1 = 0
dart2 = 0
dart3 = 0
player1 = {"total_score": 0, 20: 1, 19: 0, 18: 0, 17: 0, 16: 0, 15: 0, 25: 0}
player2 = {"total_score": 0, 20: 0, 19: 0, 18: 0, 17: 0, 16: 0, 15: 0, 25: 0}
player3 = {"total_score": 0, 20: 0, 19: 0, 18: 0, 17: 0, 16: 0, 15: 0, 25: 0}
player4 = {"total_score": 0, 20: 0, 19: 0, 18: 0, 17: 0, 16: 0, 15: 0, 25: 0}
players = [player1, player2, player3, player4]


#function that calculates the score for each dart
def single_dart_score(multiplier, number):
    score = 0
    score = multiplier * number
    return score

#function that creates a total score for all the darts
def darts_score(dart1mult, dart1num, dart2mult, dart2num, dart3mult, dart3num):
    dart1 = single_dart_score(dart1mult, dart1num)
    dart2 = single_dart_score(dart2mult, dart2num)
    dart3 = single_dart_score(dart3mult, dart3num)
    return dart1, dart2, dart3

#check if spot for dart is closed out or not
def check_if_closed(playernum, multi, num):
    #checks to see if number is closed out and adds up score if it is
    if playernum[num] == 3:
        print("first if")
        return single_dart_score(multi, num)
    # runs while loop to add up "hits" on number if not closed out
    elif playernum[num] < 3:
        print("elif")
        # while loop which adds up "hits" on number until multiple runs out or player reaches "hit" limit
        while multi > 0 and playernum[num] < 3:
            print("while {}".format(multi))
            playernum[num] = (playernum[num] + 1)
            print(playernum[num])
            multi -= 1
            #if mulitple is lefts adds this to score value
            if playernum[num] == 3 and multi > 0:
                print(multi)
                return single_dart_score(multi, num)


def check_if_oth_closed(player, num, multi):
    for play in players:
        if play == player:
            continue
        elif play[num] == 3:
            return True
        else:
            return False
