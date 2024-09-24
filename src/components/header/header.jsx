import PropTypes from "prop-types"
import './header.less';
import { React } from 'react'

export default class PublicHeader extends React.Component {
    static propsTypes = {
        record: PropTypes.any,
        title: PropTypes.string.isRequired,
        confirm: PropTypes.any,
    }
    state = {
        navState: false, //导航栏是否显示
    }
    toggleNav = () => {
        this.setState({navState: !this.state.navState})
    }
    render() {
        return (
            <header className="header-container">
                <span className="header-slide-icon icon-catalog" onClick={this.toggleNav}></span>

            </header>
        )
    }
}