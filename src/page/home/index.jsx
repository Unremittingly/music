import {Component} from 'react';
import axios  from 'axios';
import {search} from '../../dataManage/index'

//1.head  2.search 3.分类  4.新歌  5.footer
class Home extends Component{

    componentDidMount() {
        let keyword = '玫瑰花的葬礼';
        search(keyword).then(function (data) {
            console.log('data',data);
        })
    }

    render() {
        return 'teess';
    }
}

export default Home;