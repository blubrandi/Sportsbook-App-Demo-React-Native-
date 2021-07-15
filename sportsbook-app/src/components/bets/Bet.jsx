import React from 'react'

const Bet = (props) => {

    console.log("BET PROPS: ", props)
    let gameID = props.gameID
    let betID = props.betID
    let awayTeamName = props.awayTeamName
    let homeTeamName = props.homeTeamName
    let betType = props.betType
    let homeMoneyLine = props.homeMoneyLine
    let awayMoneyLine = props.awayMoneyLine
    // let homePointSpread = props.homePointSpread
    // let awayPointSpread = props.awayPointSpread
    // let homePointSpreadPayout = props.homePointSpreadPayout
    // let awayPointSpreadPayout = props.awayPointSpreadPayout
    // let overUnder = props.overUnder
    // let overPayout = props.overPayout
    // let underPayout = props.underPayout
    // let wager = props.wager
    // let potentialWinnings = props.potentialWinnings
    // let potentialPayout = props.potentialPayout

    return { 
        gameID,
        awayTeamName,
        homeTeamName,
        betID,
        // awayTeamName: awayTeamName,
        // homeTeamName: homeTeamName,
        betType,
        homeMoneyLine,
        awayMoneyLine
        // homeMoneyLine: homeMoneyLine,
        // awayMoneyLine: awayMoneyLine,
        // homePointSpread: homePointSpread,
        // awayPointSpread: awayPointSpread,
        // homePointSpreadPayout: homePointSpreadPayout,
        // awayPointSpreadPayout: awayPointSpreadPayout,
        // overUnder: overUnder,
        // overPayout: overPayout,
        // underPayout: underPayout,
        // wager: wager,
        // potentialWinnings: potentialWinnings,
        // potentialPayout: potentialPayout
     }
    
}

export default Bet