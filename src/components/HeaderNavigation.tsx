import React from "react";
import tabs from "../util/enums";

type Props = {changeTab: Function}

class HeaderNavigation extends React.Component<{changeTab: Function}, { selected: tabs }> {
    constructor(props: Props) {
        super(props);
        this.state = { selected: tabs.ABOUT };
    }

    handleClick = (tabName: tabs) => {
        this.props.changeTab(tabName);
        this.setState({
            selected: tabName
        });
    };
    render() {
        return (<div className="Header-Navigation">
            <div className={`${tabs.ABOUT} Tab ${this.state.selected == tabs.ABOUT ? "Selected" : ""}`} onClick={() => this.handleClick(tabs.ABOUT)}>
                About
            </div>
            <div className={`${tabs.INVESTMENTS} Tab ${this.state.selected == tabs.INVESTMENTS ? "Selected" : ""}`} onClick={() => this.handleClick(tabs.INVESTMENTS)}>
                Investments
            </div>
        </div>);
    }
}

export default HeaderNavigation;
