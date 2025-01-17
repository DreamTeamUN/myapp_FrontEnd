import { createStackNavigator } from 'react-navigation';
import Main from './components/Main';
import SignUpMain from './components/SignUpMain';
import SignUpAdult from './components/SignUpAdult';
import SignUpTeacher from './components/SignUpTeacher';
import LogInTypeUser from './components/LogInTypeUser';
import LogIn from './components/LogIn';
import HomeAdult from './components/HomeAdult';
import WeekProgress from './components/WeekProgress';
import Sentence from './components/Sentence';
import Games from './components/Games';
import HomeStudent from './components/HomeStudent';
import Practices from './components/Practices';
import GameProgress from './components/GameProgress';
import AddStudent from './components/AddStudent';
import EditProfile from './components/EditProfile/EditProfile';
import ChangeFullname from './components/EditProfile/ChangeFullname';
import ChangePassword from './components/EditProfile/ChangePassword';
import ChangeBirthdate from './components/EditProfile/ChangeBirthdate';
import ChangePhoto from './components/EditProfile/ChangePhoto';
import ForumScreen from './components/ForumScreen';
import HomeForum from './components/HomeForum';
import ClassRoom from './components/classroom';
import AddClassRoom from './components/AddClassRoom';
import AdminStudentsTutor from './components/AdminStudentsTutor';
import CardForum from './components/CardForum';
import PalabraImagen from './components/PalabraImagen';
import NivelesPalabraImagen from './components/NivelesPalabraImagen';
import ClassroomView from './components/ClassroomView';

export const AppStack = createStackNavigator(
    {
        HomeAdult: HomeAdult,
        AddClassRoom: AddClassRoom,
        ClassroomView: ClassroomView,
        NivelesPalabraImagen: NivelesPalabraImagen,
        HomeStudent: HomeStudent,
        WeekProgress: WeekProgress,
        GameProgress: GameProgress,
        ClassRoom: ClassRoom,
        Sentence: Sentence,
        Games: Games,
        PalabraImagen: PalabraImagen,
        Practices: Practices,
        AdminStudentsTutor: AdminStudentsTutor,
        AddStudent: AddStudent,
        EditProfile: EditProfile,
        ChangeFullname: ChangeFullname,
        ChangePassword: ChangePassword,
        ChangeBirthdate: ChangeBirthdate,
        ChangePhoto: ChangePhoto,
        ForumScreen: ForumScreen,
        HomeForum: HomeForum,
        CardForum: CardForum,
    },

    {
        initialRouteName: 'HomeAdult',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#5D99C6',
                height: 50,
            },
            headerTintColor: '#E9E9EF',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);


export const AuthStack = createStackNavigator(
    {
        Main: Main,
        SignUpMain: SignUpMain,
        SignUpAdult: SignUpAdult,
        SignUpTeacher: SignUpTeacher,
        LogInTypeUser: LogInTypeUser,
        LogIn: LogIn,
    },
    {
        initialRouteName: 'Main',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#5D99C6',
                height: 50,
            },
            headerTintColor: '#E9E9EF',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);
