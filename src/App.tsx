import { Route, Routes } from 'react-router-dom';
import { Home } from './_root/pages';
import Topic from './_root/pages/Topic';
import Course from './_root/pages/Course'; // Import Course component
import Layout from './_root/Layout';
import AuthLayout from './_auth/AuthLayout';
import SignInForm from '@/_auth/forms/SigninForm';
import SignupForm from '@/_auth/forms/SignupForm';
import DashLayout from './_root/pages/Dashboard/DashLayout';
import DashboardHome from './_root/pages/Dashboard/pages/dashboard-home';
import DashProgress from './_root/pages/Dashboard/pages/dashboard-progress';
import DashAchievement from './_root/pages/Dashboard/pages/dashboard-achievements';
import DashSettings from './_root/pages/Dashboard/pages/dashboard-settings';
import DashboardCourse from './_root/pages/Dashboard/pages/dashboard-courses';
import Article from './_root/pages/Article';
import Subject from './_root/pages/Subject';


const App = () => {
    console.log("App component rendered."); // Log when the App component renders

    return (
        <main className='flex h-screen w-full' >
            <Routes>
                {/* public routes */}
                <Route element={<Layout />}>
                    {/* Render Home only for the index route */}
                    <Route path='/' element={<Home />} />
                    <Route path="/article/:id" element={<Article />} />
                    <Route path="/article" element={<Article />} />
                    <Route path='/:topicName/:ctg' element={<Topic />} />
                    <Route path='/topics' element={<Topic />} />

                    {/* Route for listing and viewing courses */}
                    <Route path='/course' element={<Course />}>
                        <Route path=':id' element={<Course />} />
                    </Route>
                    <Route path='/course/:courseId/:subjectId' element={<Subject />} />

                </Route>

                {/* auth routes */}
                <Route element={<AuthLayout />}>
                    <Route path="/sign-in" element={<SignInForm />} />
                    <Route path="/sign-up" element={<SignupForm />} />
                </Route>

                {/* dashboard routes */}
                <Route element={<DashLayout />}>
                    <Route path='/dashboard/home' element={<DashboardHome />} />
                    <Route path='/dashboard/courses' element={<DashboardCourse />} />
                    <Route path='/dashboard/progress' element={<DashProgress />} />
                    <Route path='/dashboard/achievements' element={<DashAchievement />} />
                    <Route path='/dashboard/settings' element={<DashSettings />} />
                </Route>
            </Routes>
        </main>
    );
}

export default App;
