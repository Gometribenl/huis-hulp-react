import React, {Component} from "react";
import {Platform} from "react-native";
import {AppColors} from "../../global";
import {Actions} from "react-native-router-flux";
import BottomNavigation, {Badge, IconTab} from 'react-native-material-bottom-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class NavBar extends Component {
    constructor(props) {
        super(props);
    }
    tabs = [
        {
            key: 'home',
            icon: 'home',
            barColor: AppColors.AppColors.primary.regular,
        },
        {
            key: 'overview',
            icon: 'list',
            barColor: AppColors.AppColors.primary.regular,
            badgeCount: 0,
        },
        {
            key: 'profile',
            icon: 'user',
            barColor: AppColors.AppColors.primary.regular,
            badgeCount: 0,
        },
    ];
    renderIcon = icon => () => {
        return <Icon size={24} color="white" name={icon}/>;
    };

    renderBadge = badgeCount => () => {
        return <Badge>{badgeCount}</Badge>;
    };

    renderTab = ({tab, isActive}) => {
        return <IconTab
            isActive={isActive}
            key={tab.key}
            renderIcon={this.renderIcon(tab.icon)}
            renderBadge={this.renderBadge(tab.badgeCount)}
            showBadge={tab.badgeCount > 0}
        />;
    };

    render() {
        return (
            <BottomNavigation
                style={{
                    paddingBottom: Platform.select({
                        ios: 0,

                    }),
                    height: Platform.select({
                        default: 56,
                        ios: 56,
                    }),
                }}
                tabs={this.tabs}
                activeTab={this.props.activeTab}
                onTabPress={ newTab => {
                    Actions.replace(newTab.key);
                }}
                renderTab={this.renderTab}
                renderBadge={this.renderBadge}
            />
        );
    }
}
