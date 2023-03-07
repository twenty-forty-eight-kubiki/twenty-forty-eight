import React, {useEffect, useState} from 'react'
import GamerItem from '../../components/GamerItem/GamerItem'
import {LeaderBoardApi, LeadersError, LeadersProps} from '../../api/leaderBoardApi'
import './LeaderBoardPage.scss'

const LeaderBoardPage = () => {
    const [leaders, setLeaders] = useState<LeadersProps[] | LeadersError>([]);

    useEffect(() => {
        getLeaders()
    }, [])

    const getLeaders = (): void => {
        const response: Promise<LeadersProps[] | LeadersError> = LeaderBoardApi.getAll();
        response.then(response => {
            if (Array.isArray(response)) {
                setLeaders(response)
            }
        })
    }

    return (
        <div className="lieder-board-page">
            {leaders.map(leader => (
                <GamerItem profile={leader} key={leader.userId}/>
            ))}
        </div>
    )
}

export default LeaderBoardPage
