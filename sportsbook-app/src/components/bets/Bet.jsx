import React from 'react'

const Bet = (props) => {

    console.log("BET PROPS: ", props)
    let gameID = props.gameID
    let betID = props.betID
    let betType = props.betOdds
    let teamName = props.teamName
    let betOdds = props.betOdds
    let payout = props.payout
    let betPending = props.betPending
    let gameTeams = props.gameTeams


    return { 
        gameID,
        betID,
        betType,
        teamName,
        betOdds,
        payout,
        betPending,
        gameTeams,
     }
    
}

export default Bet