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
        title: '????????????',
        name: 'Web',
        component: Web,
    },
    {
        title: '????????????',
        name: 'Comment',
        component: Comment,
    },
    {
        title: '?????????',
        name: 'PublishComment',
        component: PublishComment,
    },
    {
        title: '??????',
        name: 'Search',
        component: Search,
    },
    {
        title: '????????????',
        name: 'CourseChannel',
        component: CourseChannel,
    },
    {
        title: '????????????',
        name: 'ArticleChannel',
        component: ArticleChannel,
    },
    {
        title: '????????????',
        name: 'Article',
        component: Article,
    },
    {
        title: '????????????',
        name: 'Vod',
        component: Vod,
    },
    {
        title: '????????????',
        name: 'Audio',
        component: Audio,
    },
    {
        title: '??????',
        name: 'Related',
        component: Related,
    },
    {
        title: '????????????',
        name: 'Live',
        component: Live,
    },
    {
        title: '????????????',
        name: 'LiveChannel',
        component: LiveChannel,
    },
    {
        title: '????????????',
        name: 'CourseOrder',
        component: CourseOrder,
    },
    {
        title: '????????????',
        name: 'Activity',
        component: Activity,
    },
    {
        title: '????????????',
        name: 'ActivityJoin',
        component: ActivityJoin,
    },
    {
        title: '????????????',
        name: 'ActivityWork',
        component: ActivityWork,
    },
    {
        title: '????????????',
        name: 'ActivityPaper',
        component: ActivityPaper,
    },
    {
        title: '????????????',
        name: 'Special',
        component: Special,
    },
    {
        title: '???????????????',
        name: 'Squad',
        component: Squad,
    },
    {
        title: '????????????',
        name: 'News',
        component: News,
    },
    {
        title: '??????',
        name: 'NewsChannel',
        component: NewsChannel,
    },
    {
        title: '?????????',
        name: 'Rank',
        component: Rank,
    },
    {
        title: '????????????',
        name: 'Map',
        component: Map,
    },
    {
        title: '????????????',
        name: 'MapChannel',
        component: MapChannel,
    },
    {
        title: '????????????',
        name: 'Plan',
        component:Plan,
    },
    {
        title: '????????????',
        name: 'PlanChannel',
        component:PlanChannel,
    },
    {
        title: '??????',
        name: 'Paper',
        component:Paper,
    },
    {
        title: '????????????',
        name: 'PaperDone',
        component:PaperDone,
    },
    {
        title: '????????????',
        name: 'Group',
        component:Group,
    },
    {
        title: '????????????',
        name: 'GroupChannel',
        component:GroupChannel,
    },
    {
        title: '????????????',
        name: 'GroupMember',
        component:GroupMember,
    },
    {
        title: '????????????',
        name: 'PublishGroup',
        component:PublishGroup,
    },
    {
        title: '??????',
        name: 'GroupOn',
        component:GroupOn,
    },
    {
        title: '??????',
        name: 'Ask',
        component: Ask,
    },
    {
        title: '?????????',
        name: 'AskChannel',
        component: AskChannel,
    },
    {
        title: '????????????',
        name: 'InviteAsk',
        component: InviteAsk,
    },
    {
        title: '????????????',
        name: 'PublishAsk',
        component: PublishAsk,
    },
    {
        title: '?????????',
        name: 'ReplyAsk',
        component: ReplyAsk,
    },
    {
        title: '????????????',
        name: 'TeacherChannel',
        component: TeacherChannel,
    },
    {
        title: '????????????',
        name: 'Teacher',
        component: Teacher,
    },
    {
        title: '????????????',
        name: 'UserIntegral',
        component: UserIntegral,
    },
    // {
    //     title: '??????',
    //     name: 'Recharge',
    //     component: Recharge,
    // },
    {
        title: '????????????',
        name: 'UserCert',
        component: UserCert,
    },
    {
        title: '????????????',
        name: 'UserCollect',
        component: UserCollect,
    },
    {
        title: '????????????',
        name: 'UserCourse',
        component: UserCourse,
    },
    {
        title: '????????????',
        name: 'UserFollow',
        component: UserFollow,
    },
    {
        title: '????????????',
        name: 'UserMedal',
        component: UserMedal,
    },
    // {
    //     title: '??????',
    //     name: 'MedalInfo',
    //     component: MedalInfo,
    // },
    // {
    //     title: '?????????',
    //     name: 'UserQr',
    //     component: UserQr,
    // },
    {
        title: '????????????',
        name: 'UserStudy',
        component: UserStudy,
    },
    {
        title: '?????????',
        name: 'UserSquad',
        component: UserSquad,
    },
    {
        title: '????????????',
        name: 'UserTask',
        component: UserTask,
    },
    {
        title: '????????????',
        name: 'UserGrow',
        component: UserGrow,
    },
    {
        title: '????????????',
        name: 'UserRight',
        component: UserRight,
    },
    {
        title: '????????????',
        name: 'UserTest',
        component: UserTest,
    },
    // {
    //     title: '?????????',
    //     name: 'UserWrong',
    //     component: UserWrong,
    // },
    // {
    //     title: '????????????',
    //     name: 'UserAsk',
    //     component: UserAsk,
    // },
    {
        title: '????????????',
        name: 'Message',
        component: Message,
    },
    {
        title: '????????????',
        name: 'MessageInfo',
        component: MessageInfo,
    },
    // {
    //     title: '????????????',
    //     name: 'ApplyTeacher',
    //     component: ApplyTeacher,
    // },
    // {
    //     title: '????????????',
    //     name: 'TeacherRule',
    //     component: TeacherRule,
    // },
    // {
    //     title: '????????????',
    //     name: 'TeacherMedal',
    //     component: TeacherMedal,
    // },
    {
        title: '????????????',
        name: 'UserAddress',
        component: UserAddress,
    },
    {
        title: '????????????',
        name: 'SaveAddress',
        component: SaveAddress,
    },
    {
        title: '????????????',
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
                title: '??????',
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
                title: '??????',
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
                title: '??????',
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
                title: '??????',
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
                title: '??????',
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
