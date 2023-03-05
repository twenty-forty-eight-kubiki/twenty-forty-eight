import React, {memo, useEffect, useState} from 'react';
import GamerItem from "../../components/GamerItem/GamerItem";
import {LeaderBoardApi} from "../../api/leaderBoardApi";
import './LiederBoardPage.scss';

export interface GamerItemProps {
    user_name: string;
    avatar: string;
    userId: number;
    score: number;
}

const LiederBoardPage = memo(() => {
    const [leaders, setLeaders] = useState<GamerItemProps[]>([]);

    useEffect(() => {
        LeaderBoardApi.getAll().then();
    }, [])

    const getLeaders = async () => {
        const response = LeaderBoardApi.getAll().then(response => response.json());
        setLeaders(await response);
    }

    return (
        <div className="lieder-board-page">
            {
                leaders.map(leader => <GamerItem profile={leader} key={leader.userId}/>)
            }
        </div>
    );
});

export default LiederBoardPage;