import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {asset} from '../config';
import connectComponent from '../util/connect';

import * as Web from '../page/base/Web';
import * as Comment from '../page/base/Comment';
import * as PublishComment from '../page/base/PublishComment';

import * as Home from '../page/home/Home';
import * as Search from '../page/home/Search';

import * as CourseCategory from '../page/course/CourseCategory';
import * as CourseChannel from '../page/course/CourseChannel';
import * as Article from '../page/course/Article';
import * as ArticleChannel from '../page/course/ArticleChannel';
import * as Audio from '../page/course/Audio';
import * as Vod from '../page/course/Vod';
import * as Related from '../page/course/related';
import * as Live from '../page/course/Live';
import * as LiveChannel from '../page/course/LiveChannel';
import * as CourseOrder from '../page/course/CourseOrder';

import * as Discovery from '../page/discovery/Discovery';
import * as Activity from '../page/discovery/activity/Activity';
import * as ActivityJoin from '../page/discovery/activity/ActivityJoin';
import * as ActivityWork from '../page/discovery/activity/ActivityWork';
import * as ActivityPaper from '../page/discovery/activity/ActivityPaper';
import * as Special from '../page/discovery/special/Special';
import * as Squad from '../page/discovery/squad/Squad';

import * as News from '../page/news/News';
import * as NewsChannel from '../page/news/NewsChannel';

import * as Study from '../page/study/Study';
import * as Rank from '../page/study/Rank';
import * as Map from '../page/study/map/Map';
import * as MapChannel from '../page/study/map/MapChannel';
import * as Plan from '../page/study/plan/Plan';
import * as PlanChannel from '../page/study/plan/PlanChannel';
import * as Paper from '../page/study/paper/Paper';
import * as PaperDone from '../page/study/paper/PaperDone';

import * as Group from '../page/group/Group';
import * as GroupChannel from '../page/group/GroupChannel';
import * as GroupMember from '../page/group/GroupMember';
import * as PublishGroup from '../page/group/PublishGroup';
import * as GroupOn from '../page/group/GroupOn';

import * as Ask from '../page/ask/Ask';
import * as AskChannel from '../page/ask/AskChannel';
import * as PublishAsk from '../page/ask/PublishAsk';
import * as ReplyAsk from '../page/ask/ReplyAsk';
import * as InviteAsk from '../page/ask/InviteAsk';

import * as Teacher from '../page/teacher/Teacher';
import * as TeacherChannel from '../page/teacher/TeacherChannel';

import * as User from '../page/user/User';
import * as UserIntegral from '../page/user/UserIntegral';
// import * as Recharge from '../page/user/Recharge';
import * as UserCert from '../page/user/UserCert';
import * as UserCollect from '../page/user/UserCollect';
import * as UserCourse from '../page/user/UserCourse';
import * as UserFollow from '../page/user/UserFollow';
import * as UserMedal from '../page/user/medal/UserMedal';
// import * as MedalInfo from '../page/user/medal/MedalInfo';
// import * as UserQr from '../page/user/UserQr';
import * as UserStudy from '../page/user/UserStudy';
import * as UserTask from '../page/user/UserTask';
import * as UserSquad from '../page/user/UserSquad';
// import * as Passport from '../page/user/Passport';
// import * as Account from '../page/user/Account';
import * as UserGrow from '../page/user/grow/UserGrow';
import * as UserRight from '../page/user/grow/UserRight';
import * as UserTest from '../page/user/exam/UserTest';
// import * as UserWrong from '../page/user/exam/UserWrong';
// import * as UserAsk from '../page/user/UserAsk';
import * as Message from '../page/user/message/Message';
import * as MessageInfo from '../page/user/message/MessageInfo';
// import * as ApplyTeacher from '../page/user/teacher/ApplyTeacher';
// import * as ApplyCorpTeacher from '../page/user/teacher/ApplyCorpTeacher';
// import * as TeacherRule from '../page/user/teacher/TeacherRule';
// import * as TeacherMedal from '../page/user/teacher/TeacherMedal';

import * as UserAddress from '../page/user/address/UserAddress';
import * as SaveAddress from '../page/user/address/SaveAddress';

// import * as Lucky from '../page/user/lucky/Lucky';
// import * as LuckyRecord from '../page/user/lucky/LuckyRecord';
import * as FeedBack from '../page/user/FeedBack';
// import About from '../page/user/about/About';
// import * as AboutContent from '../page/user/about/AboutContent';

const route = [
    {
        title: '精彩内容',
        name: 'Web',
        component: Web,
    },
    {
        title: '全部留言',
        name: 'Comment',
        component: Comment,
    },
    {
        title: '写评论',
        name: 'PublishComment',
        component: PublishComment,
    },
    {
        title: '搜索',
        name: 'Search',
        component: Search,
    },
    {
        title: '精品资源',
        name: 'CourseChannel',
        component: CourseChannel,
    },
    {
        title: '资讯频道',
        name: 'ArticleChannel',
        component: ArticleChannel,
    },
    {
        title: '资讯详情',
        name: 'Article',
        component: Article,
    },
    {
        title: '视频课程',
        name: 'Vod',
        component: Vod,
    },
    {
        title: '音频课程',
        name: 'Audio',
        component: Audio,
    },
    {
        title: '全部',
        name: 'Related',
        component: Related,
    },
    {
        title: '直播课程',
        name: 'Live',
        component: Live,
    },
    {
        title: '直播回放',
        name: 'LiveChannel',
        component: LiveChannel,
    },
    {
        title: '资源结算',
        name: 'CourseOrder',
        component: CourseOrder,
    },
    {
        title: '活动详情',
        name: 'Activity',
        component: Activity,
    },
    {
        title: '活动报名',
        name: 'ActivityJoin',
        component: ActivityJoin,
    },
    {
        title: '活动详情',
        name: 'ActivityWork',
        component: ActivityWork,
    },
    {
        title: '问卷答题',
        name: 'ActivityPaper',
        component: ActivityPaper,
    },
    {
        title: '专题详情',
        name: 'Special',
        component: Special,
    },
    {
        title: '培训班详情',
        name: 'Squad',
        component: Squad,
    },
    {
        title: '资讯详情',
        name: 'News',
        component: News,
    },
    {
        title: '资讯',
        name: 'NewsChannel',
        component: NewsChannel,
    },
    {
        title: '排行榜',
        name: 'Rank',
        component: Rank,
    },
    {
        title: '学习地图',
        name: 'Map',
        component: Map,
    },
    {
        title: '学习地图',
        name: 'MapChannel',
        component: MapChannel,
    },
    {
        title: '计划详情',
        name: 'Plan',
        component:Plan,
    },
    {
        title: '学习计划',
        name: 'PlanChannel',
        component:PlanChannel,
    },
    {
        title: '考卷',
        name: 'Paper',
        component:Paper,
    },
    {
        title: '考试结果',
        name: 'PaperDone',
        component:PaperDone,
    },
    {
        title: '打卡社区',
        name: 'Group',
        component:Group,
    },
    {
        title: '打卡社区',
        name: 'GroupChannel',
        component:GroupChannel,
    },
    {
        title: '参与用户',
        name: 'GroupMember',
        component:GroupMember,
    },
    {
        title: '发布打卡',
        name: 'PublishGroup',
        component:PublishGroup,
    },
    {
        title: '打卡',
        name: 'GroupOn',
        component:GroupOn,
    },
    {
        title: '问吧',
        name: 'Ask',
        component: Ask,
    },
    {
        title: '问答区',
        name: 'AskChannel',
        component: AskChannel,
    },
    {
        title: '邀请回答',
        name: 'InviteAsk',
        component: InviteAsk,
    },
    {
        title: '我要提问',
        name: 'PublishAsk',
        component: PublishAsk,
    },
    {
        title: '写回答',
        name: 'ReplyAsk',
        component: ReplyAsk,
    },
    {
        title: '讲师列表',
        name: 'TeacherChannel',
        component: TeacherChannel,
    },
    {
        title: '讲师主页',
        name: 'Teacher',
        component: Teacher,
    },
    {
        title: '我的账户',
        name: 'UserIntegral',
        component: UserIntegral,
    },
    // {
    //     title: '充值',
    //     name: 'Recharge',
    //     component: Recharge,
    // },
    {
        title: '我的证书',
        name: 'UserCert',
        component: UserCert,
    },
    {
        title: '我的收藏',
        name: 'UserCollect',
        component: UserCollect,
    },
    {
        title: '已购资源',
        name: 'UserCourse',
        component: UserCourse,
    },
    {
        title: '我的关注',
        name: 'UserFollow',
        component: UserFollow,
    },
    {
        title: '我的勋章',
        name: 'UserMedal',
        component: UserMedal,
    },
    // {
    //     title: '进度',
    //     name: 'MedalInfo',
    //     component: MedalInfo,
    // },
    // {
    //     title: '二维码',
    //     name: 'UserQr',
    //     component: UserQr,
    // },
    {
        title: '学习记录',
        name: 'UserStudy',
        component: UserStudy,
    },
    {
        title: '培训班',
        name: 'UserSquad',
        component: UserSquad,
    },
    {
        title: '我的任务',
        name: 'UserTask',
        component: UserTask,
    },
    {
        title: '成长权益',
        name: 'UserGrow',
        component: UserGrow,
    },
    {
        title: '权益详情',
        name: 'UserRight',
        component: UserRight,
    },
    {
        title: '我的考试',
        name: 'UserTest',
        component: UserTest,
    },
    // {
    //     title: '错题集',
    //     name: 'UserWrong',
    //     component: UserWrong,
    // },
    // {
    //     title: '我的提问',
    //     name: 'UserAsk',
    //     component: UserAsk,
    // },
    {
        title: '消息中心',
        name: 'Message',
        component: Message,
    },
    {
        title: '系统通知',
        name: 'MessageInfo',
        component: MessageInfo,
    },
    // {
    //     title: '申请讲师',
    //     name: 'ApplyTeacher',
    //     component: ApplyTeacher,
    // },
    // {
    //     title: '申请条例',
    //     name: 'TeacherRule',
    //     component: TeacherRule,
    // },
    // {
    //     title: '讲师勋章',
    //     name: 'TeacherMedal',
    //     component: TeacherMedal,
    // },
    {
        title: '我的地址',
        name: 'UserAddress',
        component: UserAddress,
    },
    {
        title: '保存地址',
        name: 'SaveAddress',
        component: SaveAddress,
    },
    {
        title: '帮助反馈',
        name: 'FeedBack',
        component: FeedBack,
    },
 
]

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const linking = {
    prefixes: ['http://localhost:3000/'],
    screens: {
        Main: '/',
        Discovery: 'discovery',
        NotFound: '*',
    }
};

function Main() {
    return (
        <Tab.Navigator
            //initialRouteName={'CourseCategory'}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let icon;
                    if (route.name === 'Home') {
                        icon = focused ? asset.home.tab_on : asset.home.tab
                    } else if (route.name === 'CourseCategory') {
                        icon =  focused ? asset.course.tab_on : asset.course.tab
                    } else if (route.name === 'Discovery') {
                        icon = focused ? asset.discovery.tab_on : asset.discovery.tab
                    } else if (route.name === 'Study') {
                        icon = focused ? asset.study.tab_on : asset.study.tab
                    } else if (route.name === 'User') {
                        icon = focused ? asset.user.tab_on : asset.user.tab
                    }

                    return <Image source={icon} style={{ width: 20, height: 20 }} />;
                },
                tabBarActiveTintColor: '#ff6710',
                tabBarInactiveTintColor: '#999999',
                tabBarStyle: {
                    padding: 5,
                    height:50
                }
            })}
        >
            <Tab.Screen name="Home" component={connectComponent(Home)} options={{
                title: '首页',
                headerTitle: (props) => <View><Image source={asset.headertit} style={{ width: 100, height: 20 }} /></View>,
                headerStyle: {
                    backgroundColor: '#ffffff',
                },
                headerTitleAlign: 'center',
                headerShadowVisible: false,
                headerLeft: (props) => (
                    <View>
                        <TouchableOpacity style={{ marginLeft: 20 }} onPress={() => {
                            try{
                                window.webkit.messageHandlers.WKWebViewJavascriptBridge.postMessage({ "handlerName": "page.close" })
                            }catch(err){
                                window.JSBridge.backToHome()
                            }
                        }}>
                            <Image source={asset.navi_back} style={{ width: 22, height: 22 }} />
                        </TouchableOpacity>
                    </View>
                )
            }} />
            <Tab.Screen name="CourseCategory" component={connectComponent(CourseCategory)} options={{
                title: '课程',
                headerTitleAlign: 'center',
                headerLeft: (props) => (
                    <View>
                        <TouchableOpacity style={{ marginLeft: 20 }} onPress={() => {
                            try{
                                window.webkit.messageHandlers.WKWebViewJavascriptBridge.postMessage({ "handlerName": "page.close" })
                            }catch(err){
                                window.JSBridge.backToHome()
                            }
                        }}>
                            <Image source={asset.navi_back} style={{ width: 22, height: 22 }} />
                        </TouchableOpacity>
                    </View>
                )
            }} />
            <Tab.Screen name="Discovery" component={connectComponent(Discovery)} options={{
                title: '发现',
                headerTitleAlign: 'center',
                headerLeft: (props) => (
                    <View>
                        <TouchableOpacity style={{ marginLeft: 20 }} onPress={() => {
                            try{
                                window.webkit.messageHandlers.WKWebViewJavascriptBridge.postMessage({ "handlerName": "page.close" })
                            }catch(err){
                                window.JSBridge.backToHome()
                            }
                        }}>
                            <Image source={asset.navi_back} style={{ width: 22, height: 22 }} />
                        </TouchableOpacity>
                    </View>
                )
            }} />
            <Tab.Screen name="Study" component={connectComponent(Study)} options={{
                title: '学习',
                headerTitleAlign: 'center',
                headerLeft: (props) => (
                    <View>
                        <TouchableOpacity style={{ marginLeft: 20 }} onPress={() => {
                            try{
                                window.webkit.messageHandlers.WKWebViewJavascriptBridge.postMessage({ "handlerName": "page.close" })
                            }catch(err){
                                window.JSBridge.backToHome()
                            }
                        }}>
                            <Image source={asset.navi_back} style={{ width: 22, height: 22 }} />
                        </TouchableOpacity>
                    </View>
                )
            }} />
            <Tab.Screen name="User" component={connectComponent(User)} options={{
                title: '我的',
                headerTitleAlign: 'center',
                headerLeft: (props) => (
                    <View>
                        <TouchableOpacity style={{ marginLeft: 20 }} onPress={() => {
                            try{
                                window.webkit.messageHandlers.WKWebViewJavascriptBridge.postMessage({ "handlerName": "page.close" })
                            }catch(err){
                                window.JSBridge.backToHome()
                            }
                        }}>
                            <Image source={asset.navi_back} style={{ width: 22, height: 22 }} />
                        </TouchableOpacity>
                    </View>
                )
            }} />
        </Tab.Navigator>
    );
}

// create a component
export default class AppNav extends Component {
    render() {
        return (
            <NavigationContainer fallback={<Text>Loading...</Text>}>
                <Stack.Navigator>
                    <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />

                    {route.map((r, index) => {
                        return (
                            <Stack.Screen key={'screen_' + index} name={r.name} component={connectComponent(r.component)} options={{
                                headerTitleAlign: 'center',
                                title: r.title,
                            }} />
                        )
                    })}


                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
