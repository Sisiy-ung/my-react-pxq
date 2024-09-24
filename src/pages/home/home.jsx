import React from 'react'
import './home.less';
import PublicHeader from '@/components/header/header';


class BrokeRage extends React.Component {
    render() {
        return (
            <main className="home-container">
                <PublicHeader title='首页' record />
            </main>
        )
    }

}

export default BrokeRage