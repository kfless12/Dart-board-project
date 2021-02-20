class Player {
    constructor(){
        this.score;
        this.close_outs = {};
        this.curr_darts;
        this.turn;
        this.darts_thrown = 0
    }




}


const new_game =  async (players) =>{
    let i = 0
    while(game){
        if(i > players.length){
            i = 0
        } else{
            await (players[i].turn());
            i++;
        }
    }

}