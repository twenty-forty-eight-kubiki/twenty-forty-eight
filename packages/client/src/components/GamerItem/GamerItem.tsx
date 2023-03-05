import React from 'react';
import './GamerItem.scss';
import {GamerItemProps} from "../../pages/LiederBoardPage/LiederBoardPage";
import Icon from "../../ui/Icon/Icon";

const GamerItem = (props: { profile: GamerItemProps }) => {
    return (
        <div className="gamer-item">
            <div className="gamer-item__icon">
                <Icon img={props.profile.avatar}/>
            </div>
            <div className="gamer-item__info">
                <p>{props.profile.user_name}</p>
            </div>
            <div className="gamer-item__score">
                <p>{props.profile.score}</p>
            </div>
        </div>
    );
};

export default GamerItem;